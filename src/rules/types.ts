// Rules-library types. Shapes follow bible §14.3. No player-facing prose here (§14.1).

export type SourceKind = "say" | "doc" | "gov";

/** Static catalog entry, as in content/data/sources.json. */
export interface SourceDef {
  id: string;
  questionId: string;
  /** null for a government source that only sets caps (e.g. gov_badge_1971). */
  versionId: string | null;
  kind: SourceKind;
  speaker?: string;
}

/** A source as the adjudicator sees it: catalog entry plus runtime stamps. */
export interface Source extends SourceDef {
  hanrahanPresent?: boolean;
  obtainedOn?: string;
}

export interface Question {
  id: string;
  caseId: string;
  versions: { id: string; label: string }[];
}

export interface Walk {
  telling?: string;
  version: string;
  ticksByZone?: Record<string, number>;
  total: number;
}

export interface FiledClaim {
  caseId: string;
  claimed: Record<string, string>;
  attached: string[];
  walk: Walk | null;
}

export interface GovCap {
  questionId: string;
  versionId: string;
  cap: number;
}

export interface CaseTuning {
  questionId: string;
  K: number;
  telling: string;
  shortestPath: Record<string, number>;
}

export interface ZoneTuning {
  id: string;
  version: string | null;
  rate: number;
  /** null where the bible says "any" (rate 0, so it never adds exposure). */
  shortestTicks: number | null;
}

export interface Tuning {
  PEN_MAX: number;
  credit: Record<string, number>;
  paidThreshold: number;
  govCaps: Record<string, GovCap>;
  cases: Record<string, CaseTuning>;
  tellings: Record<string, { penClickEvery: number; stopwatchOutAt: number; zones: ZoneTuning[] }>;
}

export interface Adjudication {
  /** null means NOT_ESTABLISHED. */
  finding: string | null;
  strength: number;
  /** Unrounded. Callers round for display only. */
  poc: number;
  paid: boolean;
  exposure: number;
  dose: number;
  /** Strength of every version after the contest penalty, for the File/letters. */
  strengths: Record<string, number>;
}
