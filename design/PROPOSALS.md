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

## Resolved
