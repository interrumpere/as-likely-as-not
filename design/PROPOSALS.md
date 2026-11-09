# Proposals for the bible (awaiting Andre)

Agents never edit the bible. To propose a change, add an entry here that cites the section and says what should change and why. Andre marks each entry **accepted**, **rejected** or **later**, then revises the .docx. Once the new version has been regenerated, the entry moves to "Resolved".

Format:
```
## [open] P-003 — short title  (from: code|writing, 2026-11-09, §10.1)
The problem, the proposed change, and what is blocked meanwhile (if anything).
```

## Open

## [open] P-001 — What happens at the fourth [Say nothing.]?  (from: writing, 2026-11-09, §10.1)
Section 10.1 says that "overused, it becomes cruelty" and that each character has a limit of three per scene, but it doesn't say what the limit *does*. The option might disappear, stay available and trigger a reaction, or stay available and close the scene. The Ink binding `silence_count()` exists, so the writer can author a reaction if one is wanted. The coding agent needs a default before build step 3. **Proposed default until decided:** the option stays visible, and a fourth silence plays a per-character authored line (`[[TODO]]` for now) and ends the beat.

## [open] P-002 — Code blocks in §14.2–14.4 lose their indentation in the Markdown copy  (from: writing, 2026-11-09)
The data model and the reference algorithm are set as ordinary paragraphs in the .docx, so the generated Markdown flattens their nesting. The pseudocode is still readable, but if the .docx gave those passages a monospace "Code" paragraph style, the conversion could keep them as code blocks. This is low stakes.

## [open] P-003 — Typo in an appendix link  (from: writing, 2026-11-09, Appendix)
The Cattaraugus Creek link points to `en.wikipedia.com`, which should be `en.wikipedia.org`.

## [open] P-004 — "Employment is established" in §10.4 isn't in §14.4  (from: code, 2026-11-09, §10.4, §14.4, §10.7)
§10.4 says `paid = POC >= 50 … and employment is established`, but the reference algorithm in §14.4 returns `paid: POC >= 50` and says nothing about employment. §10.7 defines it only for Dolores (identity points). For Case 1, what establishes Gerry's employment? Is it simply assumed, or does a finding of any version count? **Default in code until decided:** an optional input that defaults to true, so the vectors are unaffected. Blocks nothing until Case 2.

## [open] P-005 — No Ink binding records a fact that opens a zone  (from: code, 2026-11-09, §11.3, §14.3, §14.5)
Zones have `opensWith: factId` (§14.3), and §11.3 gives the opening lines, but §14.5 only has `say(sourceId)`, which is for scored sources. Proposal: add either a binding `tell(factId)` or a documented Ink tag (`# opens: <zoneId>`) to §14.5, and say whether zone-opening facts are their own ID class (e.g. `fact_<...>`) or just reuse the zone ID. I've asked the writing agent which they'd rather author. Blocks build step 3.

## [open] P-006 — Forfeiture in the recalculation isn't in the algorithm  (from: code, 2026-11-09, §10.6, §14.4, §11.4)
§10.6 says "a claimant found to have defrauded the program forfeits permanently", but neither §14.4 nor the vectors model it (T8 and T9 just re-adjudicate). When is a claimant "found to have defrauded"? Is it when Frame Q1 is answered "no", when Q2 is answered "yes", or something else, and does forfeiture override a finding that would otherwise pay? This belongs in `recalc.ts`, not `adjudicate.ts`, so step 1 isn't blocked, but step 4 (Frame 1) needs an answer.

## Resolved
