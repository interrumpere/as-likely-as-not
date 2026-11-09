# Decisions log

Newest first. Each entry is dated, says who decided (Andre, writing or code), and says what changed. If this log and your memory of an earlier session disagree, this log wins. Bible-level decisions are Andre's. Agents log their own implementation decisions here so the other agent can find them.

---

## 2026-11-09 — Repo set up  (Andre, via writing)
- The repo is the single source of truth for code and content. The claude.ai Project "Vibe Coded Video Games" holds a read-only copy of `design/BIBLE.md` and a pointer to this repo, and nothing else, so the two can't drift apart.
- Bible workflow: Andre's .docx is canonical, `design/BIBLE.md` is generated from it, and agents propose changes in `design/PROPOSALS.md` instead of editing it. Current version: **v0.2**.
- Ownership and the inbox routine are in `AGENTS.md`.
- The test vectors in bible 11.4 were recomputed from the formula in 10.4 when the repo was set up, and all twelve match to one decimal place. `tests/vectors.json` carries them, with fixture inputs derived from 11.2–11.3.
- Build order follows bible 14.8. The coding agent starts at step 1 (the rules library with the vectors passing, and no UI).
