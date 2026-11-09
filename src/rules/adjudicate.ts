// The adjudicator: bible §10.3–10.4, reference algorithm §14.4.
// Pure. No I/O, no randomness, no clock. Every number comes from `tuning`.

import type { Adjudication, FiledClaim, Question, Source, SourceDef, Tuning } from "./types";

export interface AdjudicateInput {
  file: FiledClaim;
  /** Government-side source IDs that arrive whatever the player does (e.g. gov_badge_1971). */
  govSources: readonly string[];
  catalog: Readonly<Record<string, SourceDef>>;
  questions: readonly Question[];
  /** Runtime stamp from say(): was Hanrahan in the room? Missing means false. */
  hanrahanPresent?: Readonly<Record<string, boolean>>;
  tuning: Tuning;
  discredited: boolean;
  /** §10.4 "and employment is established". Not modelled in Case 1; defaults to true. */
  employmentEstablished?: boolean;
}

/** Strength of every version of `question` given `sources`, after the contest penalty (§14.4). */
export function strengths(question: Question, sources: readonly Source[]): Record<string, number> {
  const raw: Record<string, number> = {};
  for (const v of question.versions) {
    const forV = sources.filter((s) => s.questionId === question.id && s.versionId === v.id);
    const hasDoc = forV.some((s) => s.kind === "doc" || s.kind === "gov");
    const speakers = new Set(forV.filter((s) => s.kind === "say").map((s) => s.speaker));
    raw[v.id] = hasDoc ? 3 : Math.min(2, speakers.size);
  }
  const out: Record<string, number> = {};
  for (const v of question.versions) {
    const contested = question.versions.some((o) => o.id !== v.id && (raw[o.id] ?? 0) > 0);
    out[v.id] = Math.max(0, (raw[v.id] ?? 0) - (contested ? 1 : 0));
  }
  return out;
}

/** Drop testimony struck by the recalculation (§10.6): Hanrahan's, or taken with him present. */
export function strike(sources: readonly Source[]): Source[] {
  return sources.filter((s) => !(s.kind === "say" && (s.speaker === "hanrahan" || s.hanrahanPresent === true)));
}

/** Highest strength wins; on a tie the claimed version stands, else the first in declared order. */
export function pickFinding(
  question: Question,
  str: Readonly<Record<string, number>>,
  claimed: string | undefined,
): string | null {
  let best = 0;
  for (const v of question.versions) best = Math.max(best, str[v.id] ?? 0);
  if (best === 0) return null;
  const tied = question.versions.filter((v) => (str[v.id] ?? 0) === best).map((v) => v.id);
  if (claimed !== undefined && tied.includes(claimed)) return claimed;
  return tied[0] ?? null;
}

export function adjudicate(input: AdjudicateInput): Adjudication {
  const { file, tuning, catalog } = input;
  const caseT = tuning.cases[file.caseId];
  if (!caseT) throw new Error(`adjudicate: no tuning for case ${file.caseId}`);
  const question = input.questions.find((q) => q.id === caseT.questionId);
  if (!question) throw new Error(`adjudicate: unknown question ${caseT.questionId}`);

  const resolve = (id: string): Source => {
    const def = catalog[id];
    if (!def) throw new Error(`adjudicate: unknown source ${id}`);
    const present = input.hanrahanPresent?.[id];
    return present === undefined ? { ...def } : { ...def, hanrahanPresent: present };
  };
  let s = [...new Set([...file.attached, ...input.govSources])].map(resolve);
  if (input.discredited) s = strike(s);

  const str = strengths(question, s);
  const finding = pickFinding(question, str, file.claimed[question.id]);
  if (finding === null) {
    return { finding: null, strength: 0, poc: 0, paid: false, exposure: 0, dose: 0, strengths: str };
  }
  const strength = str[finding] ?? 0;

  const shortest = caseT.shortestPath[finding];
  if (shortest === undefined) throw new Error(`adjudicate: no shortest path for ${finding}`);
  let exposure =
    file.walk && file.walk.version === finding ? Math.min(file.walk.total, tuning.PEN_MAX) : shortest;

  for (const src of s) {
    if (src.kind !== "gov") continue;
    const cap = tuning.govCaps[src.id];
    if (cap && cap.questionId === question.id && cap.versionId === finding) exposure = Math.min(exposure, cap.cap);
  }

  const credit = tuning.credit[String(strength)];
  if (credit === undefined) throw new Error(`adjudicate: no credit for strength ${strength}`);
  const dose = exposure * credit;
  const poc = dose + caseT.K === 0 ? 0 : (100 * dose) / (dose + caseT.K);
  const paid = poc >= tuning.paidThreshold && (input.employmentEstablished ?? true);

  return { finding, strength, poc, paid, exposure, dose, strengths: str };
}
