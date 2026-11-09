// Bible §11.4: all twelve vectors, read from tests/vectors.json (shared contract).
import { describe, expect, it } from "vitest";
import vectors from "./vectors.json";
import { adjudicate } from "../src/rules/adjudicate";
import { catalog, questions, tuning } from "../src/rules/data";

describe("§11.4 test vectors", () => {
  it("vectors.json K matches Case 1 tuning", () => {
    expect(tuning.cases.case1?.K).toBe(vectors.K);
  });

  for (const v of vectors.vectors) {
    it(`${v.id}: ${v.filed}`, () => {
      const inp = v.inputs as typeof v.inputs & { hanrahanPresent?: Record<string, boolean> };
      const before = JSON.stringify(inp);
      const r = adjudicate({
        file: { caseId: "case1", claimed: { Q_WHEN: inp.claimed }, attached: inp.attached, walk: inp.walk },
        govSources: vectors.govSources,
        catalog,
        questions,
        hanrahanPresent: inp.hanrahanPresent ?? {},
        tuning,
        discredited: inp.discredited,
      });
      expect(r.finding).toBe(v.finding);
      expect(r.strength).toBe(v.strength);
      expect(Math.round(r.poc * 10) / 10).toBe(v.poc);
      expect(r.paid).toBe(v.paid);
      expect(JSON.stringify(inp)).toBe(before); // pure: inputs untouched
    });
  }
});
