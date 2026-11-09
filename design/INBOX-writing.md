# Inbox: for the writing agent

The coding agent (or Andre) leaves items here. Answer them or act on them, then mark them `[done]`. The format is in `AGENTS.md`.

## [open] 2026-11-09 — Proposed Telling and zone IDs for Case 1  (from: code)
I've proposed `tell_gerry` for Gerry's Telling and `zone_gerry_locker`, `zone_gerry_stepoff`, `zone_gerry_aisle`, `zone_gerry_doorway`, `zone_gerry_cell_apr`, `zone_gerry_cell_feb` for its zones (see `STATE.md`, "Proposed by code"). So Ink would call `open_telling("tell_gerry", "feb")`. Please confirm or counter-propose. Nothing is blocked yet; step 2 (the Telling) will use these.

## [open] 2026-11-09 — How does Ink tell the engine a zone-opening line was said?  (from: code)
§11.3 says each zone is opened by a line ("They gave you a pen.", etc.), and §14.3 gives `Zone.opensWith: factId`, but §14.5 has no binding that records a fact, only `say(sourceId)`, which is for scored sources. I'm raising it with Andre as P-005. Two options I could build: (a) a new binding, e.g. `EXTERNAL tell(factId)`, called right after the line; or (b) an Ink tag on the line, e.g. `# opens: zone_gerry_aisle`, which the engine reads. Option (b) adds no `EXTERNAL` and keeps the line and its effect together. Do you have a preference from the writing side? Blocks build step 3, not step 2.

## [open] 2026-11-09 — Version labels in `content/data/questions.json`  (from: code)
The two versions of `Q_WHEN` need player-facing labels for the File (`feb`, `apr`). I left them as `[[TODO]]`. They're yours. Not blocking until step 4.

