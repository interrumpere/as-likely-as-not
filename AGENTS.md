# Working agreement for agents on *As Likely As Not*

Two agents work on this repo, and Andre (they/them) directs both. A **writing agent**, usually a claude.ai chat session working with Andre, writes the Ink and other player-facing text. A **coding agent**, usually Claude Code, builds the engine, the rules and the tests. Neither can talk to the other directly, so everything that has to cross between them goes through the files in `design/`. This file says which ones and how.

## Start of every session

1. `git pull`.
2. Read `design/DECISIONS.md`. Newest entries are at the top, and anything there overrides your memory of earlier sessions.
3. Read **your own** inbox (`design/INBOX-writing.md` or `design/INBOX-code.md`) and act on or answer each open item.
4. Read the parts of `design/BIBLE.md` that Section 1 of the bible assigns to your role. A writer reads Sections 2–9, 12 and 13. A coding agent reads Section 2, then 7, 8 and 10–14.

## End of every session

1. Commit in small, labelled commits. Start each message with `[writing]` or `[code]`.
2. Questions for the other agent go in **their** inbox. Questions for Andre go at the top of your final reply to Andre, and also in `design/PROPOSALS.md` if they concern the bible.
3. If you decided something that the other agent or a future session needs to know, add a dated entry to `design/DECISIONS.md`.
4. `git push`. Unpushed work does not exist for the other agent.

## The bible is Andre's

- `design/source/*.docx` is the canonical bible. `design/BIBLE.md` is generated from it by `tools/bible-to-md.sh`. **Never edit either by hand.**
- To change the bible, add an entry to `design/PROPOSALS.md` saying what and why, with section numbers. Andre accepts or rejects it, revises the .docx, and drops the new version into `design/source/`. Whoever is working next then reruns the script, marks the proposal resolved, and logs the new version in `DECISIONS.md`.
- Section 1's rules apply to everyone: **do not invent** dialogue, names, facts, clues or endings, and put `[[TODO: short description]]` wherever content is missing. "Never" rules are absolute. Everything else can be questioned in a proposal.
- The writing agent drafts new content only at Andre's direction, and Andre approves it. A draft is not canon until it is merged into `content/`, and nothing becomes bible canon until it is in the .docx.

## Who owns what

| Path | Owner | Notes |
|---|---|---|
| `content/ink/**` | writing | The coding agent may add `EXTERNAL` declarations and fix syntax that breaks the compiler, but must not touch prose. Log any such fix in the writing inbox. |
| `content/data/*` prose fields (labels, document text, poison facts) | writing | |
| `content/data/tuning.*` and the numeric fields (rates, K, caps, credits) | code | The starting values come from bible Sections 10–11. Report any change you make in playtesting in `DECISIONS.md`. |
| `src/**`, `tests/**` (except `vectors.json`), build config | code | **No player-facing prose in TypeScript** (bible 14.1). |
| `design/STATE.md`, `tests/vectors.json` | **shared contract** | Either agent may propose a change, but it takes effect only after it is noted in the other agent's inbox **and** logged in `DECISIONS.md`. |
| `design/BIBLE.md`, `design/source/` | Andre | See above. |

## The contract, briefly

Every `say(sourceId)`, `give(docId)`, `poison(factId)` and `open_telling(id, version)` call in Ink names an ID that must exist in `content/data/` and be listed in `design/STATE.md`. Every source belongs to a question and a version that `src/rules/adjudicate.ts` scores. If the writer needs a new ID, or the coder needs to rename one, that is a contract change and follows the rule above. The ID conventions are the ones in bible 11.2: `say_<speaker>_<version>`, `doc_<thing>_<version>`, `gov_<thing>`.

**Name safety (bible §1).** Code IDs are `player`, `hanrahan`, `ed` and `log_kostecki`. Never use "danny" or "denny" as an identifier.

## Inbox format

```
## [open] 2026-11-09 — short title  (from: code)
What you need, why, and what is blocked until it is answered.
```
When answered, change `[open]` to `[done]` and add a one-line reply beneath. Delete `[done]` items after a week or so to keep the file short.
