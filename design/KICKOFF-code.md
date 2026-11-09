# Kickoff prompt for the coding agent (Claude Code)

Paste this into a new Claude Code session that has the repo attached:

---

You're the coding agent on *As Likely As Not*, a narrative browser game. Read `AGENTS.md` first and follow its start-of-session routine: pull, then read `design/DECISIONS.md`, then your inbox `design/INBOX-code.md`, then the coding sections of `design/BIBLE.md` (Section 2, then 7, 8 and 10–14).

Your task is **build step 1 from bible §14.8**: the rules library with all twelve vectors in `tests/vectors.json` passing as Vitest tests, and no UI. Set up the toolchain from §14.1 (TypeScript, Vite, Vitest, with inkjs and Playwright added as dependencies even though they aren't used yet). Implement `src/rules/adjudicate.ts` from the reference algorithm in §14.4. It must be pure, with no I/O. Starting numbers (credit table, K, PEN_MAX, badge cap, shortest paths) go in `content/data/tuning.json`, not in code. Also propose zone IDs and the Case 1 Telling ID in `design/STATE.md`.

Constraints: do not invent dialogue, names, facts or clues (§1). Put no player-facing prose in TypeScript (§14.1). Never use "danny" or "denny" as identifiers.

When you're done, commit with `[code]` prefixes, log your decisions in `DECISIONS.md`, put any questions for the writer in `design/INBOX-writing.md`, push, and give Andre a short report: what passes, what you decided, and anything in the bible that turned out to be ambiguous once you implemented it.
