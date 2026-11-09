# Shared contract: IDs and bindings

This file lists every ID that Ink and the rules code both depend on. Changing it is a **contract change**: note the change in the other agent's inbox and log it in `DECISIONS.md` (see `AGENTS.md`). The IDs below come straight from the bible unless they are marked *proposed*.

## Characters (bible §1, name safety)
| ID | Who | Notes |
|---|---|---|
| `player` | Danny Kostecki | Never `danny`. |
| `hanrahan` | Denny Hanrahan | Never `denny`. A `say` by `hanrahan`, or any `say` with `hanrahanPresent`, is struck if he is discredited. |
| `ed` | Ed Kostecki | |
| `log_kostecki` | The "E. Kostecki" entry in the 1971 gate log | Not a person. |
| `gerry` | Gerry Wasik | Implied by `say_gerry_*` (§11.2). |
| `bernice`, `dolores`, `leonard`, `walter`, `carol`, `theresa`, `anita`, `beck` | — | *proposed*, following the same pattern. |

## Questions and versions
| Question | Versions | Truth (never surfaced) | Source |
|---|---|---|---|
| `Q_WHEN` | `feb`, `apr` | `apr` | §11.2 |

## Sources, Case 1 (§11.2)
| ID | Question | Version | Kind | Notes |
|---|---|---|---|---|
| `say_gerry_feb` | Q_WHEN | feb | say | Visit 1, always offered first. |
| `say_hanrahan_feb` | Q_WHEN | feb | say | [Look at Denny] in visit 2 or 3. |
| `doc_stubs_apr` | Q_WHEN | apr | doc | Bernice alone, or [Say nothing] in visit 2. |
| `say_gerry_apr` | Q_WHEN | apr | say | Visit 3, alone, stubs shown, plus [Say nothing]. |
| `gov_badge_1971` | Q_WHEN | — | gov | No version. Caps exposure at 85 only if the finding is `apr`. Adds no strength. |

## Telling, Case 1 (§11.3)
The bible gives zone names and opening lines but no IDs. **The coding agent proposes the IDs here.**

| Zone (bible name) | Opened by | Rate | Ticks on shortest path | ID |
|---|---|---|---|---|
| Locker room | "They gave you a pen." | 0 | any | `zone_gerry_locker` *proposed* |
| Step-off | "You'd stand on the tape." | 1 | 2 | `zone_gerry_stepoff` *proposed* |
| Aisle | "Long hall, green." | 3 | 4 | `zone_gerry_aisle` *proposed* |
| Doorway | "A fella with a stopwatch." | 6 | 2 | `zone_gerry_doorway` *proposed* |
| Cell, April version | "Wiped down a pump." | 10 | 5 | `zone_gerry_cell_apr` *proposed* |
| Cell, February version | "It was all over the floor." | 16 | 5 | `zone_gerry_cell_feb` *proposed* |

Telling ID for Case 1: `tell_gerry` *proposed*. Versions `apr` and `feb`, so Ink calls `open_telling("tell_gerry", "feb")`. Shortest walks: 76 (`apr`), 106 (`feb`). The pen stops at 150.

## Ink bindings (§14.5)
```
EXTERNAL say(sourceId)          // records testimony, stamps hanrahanPresent
EXTERNAL give(docId)            // player now holds document
EXTERNAL poison(factId)         // straight to the Drawer
EXTERNAL open_telling(id, version)
EXTERNAL has(id)
EXTERNAL with_hanrahan()
EXTERNAL silence_count()
```

## Proposed by code
### 2026-11-09 — Case 1 Telling and zones  (code)
- Telling: `tell_gerry`. Pattern: `tell_<speaker>`. A later case with more than one Telling per speaker would become `tell_<speaker>_<thing>`.
- Zones: `zone_<telling speaker>_<place>[_<version>]`, i.e. `zone_gerry_locker`, `zone_gerry_stepoff`, `zone_gerry_aisle`, `zone_gerry_doorway`, `zone_gerry_cell_apr`, `zone_gerry_cell_feb`. Shared zones carry no version.
- Case ID: `case1` (the key the rules use for K, shortest paths and the question at issue).
- Speaker IDs in `content/data/sources.json`: `gerry`, `hanrahan`. Docs and gov sources have no speaker.
- **Not yet proposed:** fact IDs for the lines that open zones (`opensWith` in §14.3). §14.5 has no binding that records a said fact, so this waits on the question in `INBOX-writing.md`.
