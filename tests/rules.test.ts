// Edge cases the vectors don't reach, and data-file consistency.
import { describe, expect, it } from "vitest";
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";
import { adjudicate, pickFinding } from "../src/rules/adjudicate";
import { catalog, questions, sourceList, tuning } from "../src/rules/data";
import vectors from "./vectors.json";

const run = (claimed: string, attached: string[], walk: { version: string; total: number } | null, discredited = false) =>
  adjudicate({
    file: { caseId: "case1", claimed: { Q_WHEN: claimed }, attached, walk },
    govSources: ["gov_badge_1971"],
    catalog,
    questions,
    tuning,
    discredited,
  });

describe("adjudicate edge cases", () => {
  it("nothing attached is NOT_ESTABLISHED", () => {
    expect(run("feb", [], { version: "feb", total: 138 }).finding).toBeNull();
  });

  it("one speaker on each side cancels to NOT_ESTABLISHED", () => {
    const r = run("feb", ["say_gerry_feb", "say_gerry_apr"], { version: "feb", total: 106 });
    expect(r.finding).toBeNull();
    expect(r.strengths).toEqual({ feb: 0, apr: 0 });
  });

  it("on a tie the claimed version stands", () => {
    const q = questions[0]!;
    expect(pickFinding(q, { feb: 1, apr: 1 }, "apr")).toBe("apr");
    expect(pickFinding(q, { feb: 1, apr: 1 }, "feb")).toBe("feb");
  });

  it("no walk on file uses the finding's shortest path", () => {
    expect(run("apr", ["doc_stubs_apr"], null).exposure).toBe(76);
  });

  it("badge cap does not apply to a February finding", () => {
    expect(run("feb", ["say_gerry_feb"], { version: "feb", total: 140 }).exposure).toBe(140);
  });

  it("badge cap applies only if the badge record is in the source set", () => {
    const r = adjudicate({
      file: { caseId: "case1", claimed: { Q_WHEN: "apr" }, attached: ["doc_stubs_apr"], walk: { version: "apr", total: 110 } },
      govSources: [],
      catalog,
      questions,
      tuning,
      discredited: false,
    });
    expect(r.exposure).toBe(110);
  });

  it("unknown source IDs are a contract error", () => {
    expect(() => run("feb", ["say_nobody_feb"], null)).toThrow();
  });
});

describe("content/data consistency", () => {
  it("shortest paths equal the sum of zone rate × ticks (§11.3)", () => {
    for (const [caseId, c] of Object.entries(tuning.cases)) {
      const zones = tuning.tellings[c.telling]?.zones ?? [];
      for (const [version, expected] of Object.entries(c.shortestPath)) {
        const sum = zones
          .filter((z) => z.version === null || z.version === version)
          .reduce((a, z) => a + z.rate * (z.shortestTicks ?? 0), 0);
        expect(sum, `${caseId}/${version}`).toBe(expected);
      }
    }
  });

  it("every source references a known question and version", () => {
    for (const s of sourceList) {
      const q = questions.find((x) => x.id === s.questionId);
      expect(q, s.id).toBeDefined();
      if (s.versionId !== null) expect(q!.versions.map((v) => v.id)).toContain(s.versionId);
      else expect(s.kind).toBe("gov");
      if (s.kind === "say") expect(s.speaker, s.id).toBeTruthy();
    }
  });

  it("every ID used in vectors.json and govCaps is in the catalog", () => {
    const ids = new Set([...vectors.govSources, ...vectors.vectors.flatMap((v) => v.inputs.attached), ...Object.keys(tuning.govCaps)]);
    for (const id of ids) expect(catalog[id], id).toBeDefined();
  });

  it("credit table covers strengths 0–3", () => {
    for (const k of ["0", "1", "2", "3"]) expect(tuning.credit[k]).toBeTypeOf("number");
  });
});

describe("name safety (§1)", () => {
  const walk = (dir: string): string[] =>
    readdirSync(dir).flatMap((f) => {
      const p = join(dir, f);
      return statSync(p).isDirectory() ? walk(p) : [p];
    });

  it("no identifier contains 'danny' or 'denny' in src/ or content/data/", () => {
    for (const file of [...walk("src"), ...walk("content/data")]) {
      expect(readFileSync(file, "utf8").toLowerCase(), file).not.toMatch(/danny|denny/);
    }
  });
});
