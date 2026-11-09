# Decisions log

Newest first. Each entry is dated, says who decided (Andre, writing or code), and says what changed. If this log and your memory of an earlier session disagree, this log wins. Bible-level decisions are Andre's. Agents log their own implementation decisions here so the other agent can find them.

---

## 2026-11-09 — Build step 1 done: rules library  (code)
- **Toolchain.** TypeScript 7, Vite 8, Vitest 5; `inkjs` and `@playwright/test` installed but unused. `npm test` runs Vitest; `npm run build` is a typecheck only until there is an `index.html` (step 2).
- **All twelve §11.4 vectors pass** (`tests/vectors.test.ts`, reading `tests/vectors.json` unchanged). POC is returned unrounded; `paid` uses the unrounded value; tests round to one decimal.
- **`src/rules/adjudicate.ts`** follows §14.4. It takes one input object (file, gov source IDs, source catalog, questions, the runtime `hanrahanPresent` stamps, tuning, `discredited`) and throws on an unknown source ID, since that is a contract break. It also returns the exposure, dose and every version's strength, for the File and the letters later.
- **Data.** Every number is in `content/data/tuning.json`: PEN_MAX 150, credit table, paid threshold 50, K = 100 for `case1`, shortest paths 76/106, the badge cap (`govCaps.gov_badge_1971`: Q_WHEN, apr, 85), and the Telling's zone rates and shortest-path ticks. A test checks that the shortest paths equal the zone sums. Also stored for later steps: silence limit 3, Anita ±3 and her call counts, pen click every 10, stopwatch "Out" at 80. New `content/data/sources.json` (static catalog) and `questions.json` (version labels left as `[[TODO]]` for writing).
- **Implementation choices where the bible is silent:**
  - Tie for the finding where the claimed version isn't among the tied ones: first version in `questions.json` order. Can't happen in Case 1 (two versions).
  - A `say` with no `hanrahanPresent` stamp counts as "not present". In play `say()` always stamps it.
  - "Employment is established" (§10.4) is an optional input that defaults to true. See P-004.
  - The Locker room's "any" ticks are stored as `null` (rate 0, so it adds nothing).
- **Proposed IDs** (in `STATE.md`, "Proposed by code"): Telling `tell_gerry`; zones `zone_gerry_locker`, `_stepoff`, `_aisle`, `_doorway`, `_cell_apr`, `_cell_feb`; case `case1`. Noted in `INBOX-writing.md`. They stay *proposed* until the writer acknowledges them.
- A test fails the build if "danny" or "denny" appears anywhere in `src/` or `content/data/`.

## 2026-11-09 — Repo set up  (Andre, via writing)
- The repo is the single source of truth for code and content. The claude.ai Project "Vibe Coded Video Games" holds a read-only copy of `design/BIBLE.md` and a pointer to this repo, and nothing else, so the two can't drift apart.
- Bible workflow: Andre's .docx is canonical, `design/BIBLE.md` is generated from it, and agents propose changes in `design/PROPOSALS.md` instead of editing it. Current version: **v0.2**.
- Ownership and the inbox routine are in `AGENTS.md`.
- The test vectors in bible 11.4 were recomputed from the formula in 10.4 when the repo was set up, and all twelve match to one decimal place. `tests/vectors.json` carries them, with fixture inputs derived from 11.2–11.3.
- Build order follows bible 14.8. The coding agent starts at step 1 (the rules library with the vectors passing, and no UI).
