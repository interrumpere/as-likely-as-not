<!-- GENERATED from As_Likely_As_Not_Game_Bible_v0.2.docx by tools/bible-to-md.sh. Do not edit by hand.
     Andre's .docx is canonical. Propose changes in design/PROPOSALS.md. -->

**AS LIKELY AS NOT**

Game Bible and Design Document

Version 0.2

A single-player narrative investigation. Western New York, 1971 / 2001 / 2003.

*“At least as likely as not” is the legal standard for deciding whether a nuclear worker’s cancer came from the job.*

**This document contains every spoiler.** It is for writers and builders.

**Contents**

[1. How to use this document](#how-to-use-this-document)

[2. The game in brief](#the-game-in-brief)

[3. Pillars and tone](#pillars-and-tone)

[4. World](#world)

[5. The poison](#the-poison)

[6. The hidden truth](#the-hidden-truth)

[7. The deduction](#the-deduction)

[8. The strangeness](#the-strangeness)

[9. Characters](#characters)

[10. Systems](#systems)

[11. First playable: Prologue and Case 1](#first-playable-prologue-and-case-1)

[12. Story structure](#story-structure)

[13. Tone samples](#tone-samples)

[14. Technical plan](#technical-plan)

[15. Open items](#open-items)

[Appendix. Sources and inventions](#appendix.-sources-and-inventions)

# 1. How to use this document

This is the single source of truth for the game. It has two jobs: the bible (world, people, tone, secrets) and the design document (rules, data, build order).

| **If you are…** | **Read**                                                                                                                       |
|-----------------|--------------------------------------------------------------------------------------------------------------------------------|
| A writer        | Sections 2–9, 12 and 13. Section 6 is the hidden truth that every scene must stay consistent with.                             |
| A coding agent  | Section 2 for context, Sections 7, 8 and 10–14 for the build. Section 11 is the complete specification for the first playable. |
| A playtester    | Nothing. Play it cold.                                                                                                         |

## Rules for any agent building from this

- **Do not invent** dialogue, names, facts, clues or endings. Where content is missing, insert \[\[TODO: short description\]\] and keep going.

- **Do not explain.** Never add tooltips, journal entries, achievements or summary text that states a deduction or a moral.

- **Rules marked “never” are absolute.** Everything else can be raised as a question.

- Numbers in Sections 10 and 11 are starting values. They live in a data file and are expected to change in playtesting.

## Name safety

Two main characters have nearly identical names on purpose. The confusion is a running joke in dialogue and must never appear in code.

| **Person**                                   | **Called in dialogue**                                                        | **ID in code** |
|----------------------------------------------|-------------------------------------------------------------------------------|----------------|
| Daniel “Danny” Kostecki, the player          | “Professor” (Denny). “Eddie’s kid” (the old men). “Dan—Den—whoever!” (Carol). | player         |
| Dennis “Denny” Hanrahan, the partner         | “Denny,” “Hanrahan”                                                           | hanrahan       |
| Ed Kostecki, the father                      | “Ed,” “Eddie”                                                                 | ed             |
| “E. Kostecki,” the name in the 1971 gate log | Not a person. It is a log entry.                                              | log_kostecki   |

# 2. The game in brief

**November 2001.** A new federal program will pay \$150,000 to nuclear workers whose cancer is at least as likely as not to have come from the job. Danny Kostecki, 28, has dropped out of graduate school and moved home to Tarraugus, an industrial suburb of Buffalo. He gets work taking statements from men who, thirty years ago, were driven an hour south to a fuel reprocessing plant called the Hill to soak up radiation so the regular crew wouldn’t have to. The industry called them **sponges**.

His partner is Denny Hanrahan, 58, who picked those men out of a bar in 1971 and drove the van.

When a man describes a shift, **the player walks through it.** The space contains only what somebody has said. Everything unsaid is snow. What the player establishes goes onto a federal form, and the form decides who is paid.

The truth and the payout are rarely the same story. Denny is in all of the stories. So is the Kostecki name.

## At a glance

| **Item**    | **Detail**                                                                                                                                                                                                             |
|-------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Form        | Point-and-click and turn-based walking. Conversation, exploration, paperwork.                                                                                                                                          |
| Length      | 6–8 hours. Five cases, a prologue and an epilogue. First playable: about 45 minutes.                                                                                                                                   |
| Never       | Combat, reflexes, timers, visible relationship meters, quest markers, voice acting, 3D.                                                                                                                                |
| Platform    | Desktop web browser.                                                                                                                                                                                                   |
| Audience    | Adults who like *Pentiment*, *Fallout: New Vegas*, *Kingdom Come: Deliverance* and talking to people.                                                                                                                  |
| Touchstones | *True Detective* season 1 (the partnership, the interview frame, the hint of a pattern). *The Wire* season 2 (men whose trade is dying). *Buffalo ’66* (the light, the mean comedy). *The Bear*, “Fishes” (Christmas). |

## What the game is about

- Men who were used by something larger than themselves and then had to live near each other afterward.

- Getting to know, too late, the men you were afraid of as a kid.

- The difference between what happened and what is on file.

- A place where the ground itself is poisoned and people mention it on the way to talking about something else.

# 3. Pillars and tone

## Pillar 1. What you write down becomes what happened

Nothing is official until it is said, backed up or documented. The player is not uncovering a fixed past. The player is assembling a record and is answerable for it.

## Pillar 2. Nobody gives a speech

- Characters never explain their politics. They complain about specifics: the form is blue and the pen won’t write on it.

- Ideology appears as behavior. Who a man won’t sit beside is the whole essay.

- The game never says what the right filing was. There is no morality meter and no narrator verdict.

- Danny has half a sociology degree. His seminar voice sometimes appears as a dialogue option. It always lands badly.

## Pillar 3. Trust the player

The central deduction is never confirmed by the interface and never requires a confession. Clues are ordinary household facts. A player who misses it finishes a complete, sad, different story. See Section 7.

## Pillar 4. Small and dense

One suburb, one bar, one plant, about fifteen people, six weeks. People remember what you said to them.

## The feeling

- **The horror is paperwork.** A needle, a click, a number that comes out 46 when it needs to be 50.

- **Snow is silence.** When it snows hard you are the only person there.

- **Everybody yells and nobody says it.** Working-class Catholic families at full volume, circling the one thing.

- **It’s funny.** The jokes are mean, fast and affectionate, and they are usually a way of not answering.

## How people talk

| **Do**                                                                                                               | **Don’t**                                               |
|----------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------|
| Interrupt. Answer a question with a different question. Locate everyone by street, parish and whose sister they are. | Monologue, summarize feelings, use the word “trauma.”   |
| Name the car, the shift, the brand, the score.                                                                       | Say “the company,” “the system,” “the working class.”   |
| Let a terrible thing go by in the middle of a sentence about parking.                                                | Pause for effect after it.                              |
| Let silence do the work.                                                                                             | Have silence followed by an explanation of the silence. |

# 4. World

## Tarraugus, New York

An inner-ring suburb on Buffalo’s southeast side, close enough to the airport that planes shake the dishes. Doubles and small capes, Polish and Irish parishes four blocks apart, a Tops, a VFW post, a creek nobody swims in anymore and everybody used to.

**The name.** *Tarraugus* is a clerk’s mangling of *Cattaraugus*, usually translated “foul-smelling banks.” The welcome sign says it means **“Pleasant Shore.”** Nobody has ever checked. Treat this as a detail for the observant; no character explains it.

| **Place**                      | **What it is**                                                                                                                                                                                                         | **Used for**                             |
|--------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------|
| **SHEP’S** (Szczepanik’s)      | The sign has said SHEP’S since 1958 because nobody outside the family can spell it. Wings, Labatt Blue, a Bills schedule taped to the mirror. In 1971, where Denny picked the crew. A photograph hangs behind the bar. | Evenings, gossip, the Bills, 1971 scenes |
| **Claimant Assistance Office** | Two desks and a bad fax machine in the Southgate Plaza, between a vacuum repair shop and a tanning salon.                                                                                                              | The File, phone calls to Cincinnati      |
| **The Kostecki house**         | An upper-and-lower double. Ed’s garage is the only quiet place in it.                                                                                                                                                  | Family, Christmas Eve                    |
| **Tarraugus Steel**            | Closed in 1983. Ed, and Ed’s father, worked there.                                                                                                                                                                     | Background, stories                      |
| **Frontier Alkali**            | Chemical works. Closed. Fenced. Kids still get in.                                                                                                                                                                     | Background                               |
| **The Hill**                   | Tannery Hill Fuel Recovery Plant, an hour south. Run by the fictional Allegheny Nuclear Services, 1966–1972. In 2001, a federal cleanup site.                                                                          | The Tellings                             |
| **Route south**                | The van in 1971. Denny’s Buick in 2001. The same road.                                                                                                                                                                 | Partner scenes                           |

## Three times

| **When**                            | **Role**                       | **Texture**                                                                                                                                                    |
|-------------------------------------|--------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **February–April 1971**             | Walked through in the Tellings | Heavy snow. Cash. Men just home from Vietnam alongside moonlighting steel and auto workers.                                                                    |
| **November 13 – December 28, 2001** | The present of the game        | Wrong, warm and brown. No snow at all until Christmas Eve. Flags on every porch. Afghanistan on TV with the sound off. Nobody in the game comments on the war. |
| **Monday, March 17, 2003**          | The frame                      | St. Patrick’s Day. One afternoon in a federal building. A lobby TV nobody is watching.                                                                         |

## The snow

Two snows rhyme. In the Tellings, snow is whatever nobody has testified to. In 2001 it does not snow, and people keep remarking on it, until mid-afternoon on December 24, when it begins and does not really stop until the 28th. **By the last act the present looks like a Telling.** Streets the player knows are white and cannot be entered.

## The Bills

The real 2001 schedule is a game system. Nobody gives an interview during a game. The day after a loss, everyone is shorter and one optional conversation closes. They win exactly once in the game’s six weeks.

| **Sunday** | **Result**                           | **Effect**                                                                            |
|------------|--------------------------------------|---------------------------------------------------------------------------------------|
| Nov 18     | Lose to Seattle, 20–23               | Monday penalty                                                                        |
| Nov 25     | Lose to Miami, 27–34                 | Monday penalty                                                                        |
| Dec 2      | Lose at San Francisco, 0–35          | Monday penalty, and nobody will discuss it                                            |
| **Dec 9**  | **Beat Carolina, 25–24**             | **The happiest day in the game.** One free scene at SHEP’S. Leonard answers his door. |
| Dec 16     | Lose to New England, 9–12 (overtime) | Monday penalty                                                                        |
| Dec 23     | Lose at Atlanta, 30–33               | The last ordinary day                                                                 |

Barroom constants: Flutie was cut on February 28 and then his new team beat us in October. This argument never stops and never means anything.

# 5. The poison

The Hill is one small corner. Tarraugus has been eating, burying and swimming in industrial waste for eighty years. Danny is being paid to ask about exactly one kind.

## Writing rules

- It comes up **on the way to another subject.** No music, no pause, no follow-up line.

- It is told with mild nostalgia or mild pride. If Danny reacts, they look at *him* oddly.

- It is specific: a street, a dog’s name, a brand of boot.

- **Some of it is wrong.** Every town has legends. Roughly one in five should be doubtful.

- No gore for its own sake. One physical detail, then move on.

- Effects must be realistic. Visible injury comes from chemicals. **Radiation is quiet** and shows up only in instruments and, decades later, in people.

## Sample lines

“You know the Pruskis. No, on Ninety-Seventh, the dog with no nose. *Her* sister.”

“We’d whip the rocks at the school and they’d go off like firecrackers. You couldn’t get rocks like that now.”

“Bullhead had a thing on its lip like a wad of gum. You just cut around it.”

“My mother’d make us leave our sneakers outside. Your feet’d get all blistered. So did everybody’s.”

“That’s good fill, under that driveway. That’s from the plant. That’ll never settle.”

## Men in the slag

Everyone over fifty has a steel story: the ladle, the crane, the man who went in. These are told often and well, with names and dates, because they had witnesses, a funeral and a plaque. They exist as the contrast to Michael Skelly, whose death looked like nothing and so never became a story. **No character may point this out.**

## The Drawer (mechanic)

Every poison story is logged as a fact. **The form has no blank for any of them.** They go into Danny’s desk drawer, along with any document the player chooses not to attach. By Christmas the drawer is thicker than the files. In 2003 the investigator opens it.

## The creek and the Seneca Nation

The creek below the Hill crosses Seneca territory before it reaches the lake. The game may refer to this in passing. If a Seneca character appears, they are a person with their own business in the scene and are never a messenger for the theme. Any speaking role or Seneca-language material requires a Seneca reader before it ships.

# 6. The hidden truth

Everything here is true in the fiction. **Almost none of it is ever stated in the game.** Writers keep scenes consistent with it. Agents never surface it.

## How the system worked

Each man could absorb only so much radiation per quarter before he had to be sent home. When the regular crew neared its limits, the plant used temps. Denny kept a list of names at SHEP’S and filled a van. Men were paid by the shift, often two minutes of work.

**Michael Skelly had ignored his induction notice.** He could not put his name on anything. Denny put him in the van under whichever name on the list had room. *A sponge with no name never fills up.* The other men called Michael a draft dodger to his face.

## The night of Tuesday, February 23, 1971

It is Fat Tuesday. Tomorrow is Ash Wednesday. Everyone who was alive that night dates it by the ashes.

1.  Highly radioactive liquid is on the floor of a cell. The regular crew is near its limits. The plant calls SHEP’S.

2.  Five names are on Denny’s list: **Hayes, Doyle, Nowak, Rinaldi, Kostecki.** Ed Kostecki is at the bar early. He takes a photograph of the other men. He has a five-month-old daughter with croup and everyone knows this one is bad.

3.  **Ed goes home.** Before he does, he leans on Michael to take his place: *you got no kids.* There is some joking about the draft. It is not all joking.

4.  Michael signs the gate log **“E. Kostecki.”**

5.  On instruction, the film badges stay on the rack. Walter Pruski, the health physics technician, watches them hang there. The men carry only pen dosimeters.

6.  They mop, in relays of about two minutes.

7.  **Michael goes in a second time.** His pen goes off scale.

8.  The spill is never reported. In the official summary each man’s dose is a single line, and it is low.

9.  The check for two turns is made out to Ed. Ed cashes it and gives Michael most of it.

10. On Wednesday morning some of the men go straight to Mass and get their ashes.

## After

- Michael is diagnosed with leukemia in spring 1973. Danny is born on September 9, 1973. **Michael dies on October 21, 1973,** aged 24.

- Every October Ed has a Mass said for Michael. Every Ash Wednesday an envelope of cash arrives at Dolores Skelly’s with no name on it. It is from Ed. Carol knows. They have never discussed it.

- Denny has never told anyone and has never been asked.

## Why did Michael go back in?

**Every account is correct in some way.** This is permanently unresolved in the game and there is no blank for it on any form.

| **Source**                    | **What they say**                                        | **What’s true in it**                               |
|-------------------------------|----------------------------------------------------------|-----------------------------------------------------|
| Leonard Hayes                 | He was moving before anybody asked.                      | He was.                                             |
| Walter Pruski                 | Denny said, “You’re young, go on.”                       | He did.                                             |
| Rinaldi (letter from Florida) | We were all on him about the draft. It was only ribbing. | It wasn’t only ribbing.                             |
| Dolores Skelly                | He owed me board and he was proud about it.              | He was broke, and proud.                            |
| Ed Kostecki                   | At the bar, before. “I told him he had no kids.”         | Ed was not at the plant. His pressure came earlier. |
| Denny Hanrahan (last)         | “I looked at him and I didn’t say no.”                   | The nearest anyone gets.                            |

**Writers only, never stated or implied by the game:** he might well have gone back in with nobody there at all. The men’s guilt is real and does not depend on it.

# 7. The deduction

**What the player can work out:** the man in the cell that night was not Ed Kostecki. It was Michael Skelly, wearing Ed’s name.

## Absolute rules

- **Never** place the answer in a single document or line.

- **Never** log, announce, reward or confirm the deduction. A decision letter may report what the government found, which is not the same as what happened.

- **Never** have a character volunteer it. Ed and Denny will speak to it only if the player has already shown them they know.

- The player expresses the deduction by **what they file**: in Dolores’s case, any line of the gate log can be attached to any employee name. The option is always there and is never highlighted.

## The clue web

Each clue has an innocent reading. Three or four together should be enough for an attentive player. No clue is required.

| **\#** | **Clue**                                                                                    | **Where**                      | **Innocent reading**      |
|--------|---------------------------------------------------------------------------------------------|--------------------------------|---------------------------|
| 1      | The photo behind the bar shows Hayes, Doyle, Nowak, Rinaldi and a young man in a dark coat. | SHEP’S, from the prologue      | Some kid                  |
| 2      | The gate log for Feb 23 lists Hayes, Doyle, Nowak, Rinaldi, E. Kostecki.                    | Case 4                         | Ed was there              |
| 3      | “Your father’s not in any pictures, he’s always taking them.”                               | Carol, any dinner              | Dads                      |
| 4      | Theresa’s baby book, Feb 23: *croup. Ed walked her till 4.*                                 | Kostecki house, closet         | A baby book               |
| 5      | Leonard’s notebook that night lists men by nickname. One is **“Altar Boy.”**                | Case 3                         | A nickname                |
| 6      | Michael served Mass at St. Brendan’s until he was sixteen.                                  | Dolores, Case 2                | A nice boy                |
| 7      | The parish threw Ed out of the altar servers in a week. It’s a beloved family story.        | Carol’s brother, Thanksgiving  | A funny story             |
| 8      | Boots issued to “Kostecki”: size 8. Ed’s boots by the door: 12.                             | Walter’s ledger; the back hall | A clerk’s error           |
| 9      | The log signature is clean. Ed is left-handed and smears everything he signs.               | Log; birthday card; mortgage   | Different pen             |
| 10     | A Mass card for Michael Skelly on Carol’s fridge every October.                             | Kostecki kitchen               | She has one for everybody |
| 11     | The Ash Wednesday envelope.                                                                 | Dolores, if asked about money  | Parish charity            |
| 12     | Ed, who worked a dozen shifts on the Hill, refuses to file anything.                        | Throughout                     | Pride                     |

**Notebook content rule.** Leonard’s notebook records pens, times and nicknames. It does not contain the name Kostecki or Skelly, and it does not say anyone went off scale. For Feb 23 it says who went in and how many times: “Altar Boy, 2.” His next entry is two weeks later.

# 8. The strangeness

The game sits at one setting: **it’s a pattern, or you’ve been drinking.** It is never resolved.

## The young man in the snow

In some Tellings a young man in a dark coat stands at the edge of the whiteout. He does not speak, approach or react. Nobody mentions him. If the player walks toward him, there is only snow.

**The available explanation:** a Telling is Danny picturing what he’s told, and he has seen that photograph behind the bar since he was a child.

| **Telling**                      | **Was Michael really there?**                            | **Does he appear?**                                                        |
|----------------------------------|----------------------------------------------------------|----------------------------------------------------------------------------|
| Case 1, Gerry’s April shift      | No                                                       | No                                                                         |
| Case 1, Gerry’s February version | **Gerry wasn’t there.** He’s repeating a story he heard. | **Yes.** Trusting the figure as proof that Gerry was present is a mistake. |
| Case 2, Dolores’s kitchen, 1971  | Yes. It’s his house.                                     | He’s simply in the scene, with his back turned.                            |
| Case 3, Leonard’s February       | Yes                                                      | Yes                                                                        |
| Case 4, Walter’s February        | Yes                                                      | **No.** Walter looked away.                                                |
| Case 5, Denny’s February         | Yes                                                      | Yes, and for the first time he is not at the edge.                         |

## The Geiger counter

Danny can buy a yellow Civil Defense counter at a gun show for \$25. It can be used once per location in 2001. Most places read background. Some read high for real reasons (a driveway, the Alkali fence). Three readings are never explained: **the photograph, the Mass card, and the first snow on Christmas Eve.**

## Never

- No jump scares, hallucination effects, text corruption or dead people talking.

- No scene in which Danny tells anyone what he’s seen.

# 9. Characters

| **Character**             | **Born**                | **2001**      | **In short**                                                                               |
|---------------------------|-------------------------|---------------|--------------------------------------------------------------------------------------------|
| Danny Kostecki (player)   | Sept 9, 1973            | 28            | The player. Observant, funny in his head, a coward in ways he’d call methodological.       |
| Denny Hanrahan (hanrahan) | 1943                    | 58            | The partner. Charming, bullying, devout on alternate days. Sick and says it’s the weather. |
| Ed Kostecki               | 1947                    | 54            | The father. Steelworker, then machinist. Lefty. Worked a dozen shifts on the Hill.         |
| Carol Kostecki            | 1949                    | 52            | The mother. Irish, loud, runs everything. Fridge full of Mass cards.                       |
| Theresa Kostecki          | Sept 1970               | 31            | The sister. Oncology nurse in Buffalo. Says the actual thing.                              |
| Gerry Wasik               | 1940                    | 61            | Case 1. Lung cancer, oxygen, buckets.                                                      |
| Bernice Wasik             | 1942                    | 59            | Gerry’s wife. Cleaning something that’s already clean.                                     |
| Dolores Skelly            | 1928                    | 73            | Case 2. Michael’s mother.                                                                  |
| Michael Skelly            | Jan 1949 – Oct 21, 1973 | —             | The young man in the dark coat.                                                            |
| Leonard Hayes             | 1946                    | 55            | Case 3. Kept a notebook.                                                                   |
| Walter Pruski             | 1938                    | 63            | Case 4. Collected the badges.                                                              |
| Paul Rinaldi              | 1945                    | 56            | In Florida. Reachable by letter.                                                           |
| Doyle, Nowak              | —                       | Dead          | Died 1994 and 1988. Their families drink at SHEP’S.                                        |
| Dr. Anita Ruhl            | 1950                    | 51            | Health physicist in Cincinnati. A voice on the phone.                                      |
| Lorraine Beck             | 1955                    | 2003 only: 47 | Labor Department investigator. 2003 only.                                                  |

## Danny Kostecki

Left for Albany, got halfway through a doctorate in sociology, came home in August “for a semester.” He can describe anybody’s situation and has trouble sitting in a room with it. **His question:** can you get to know, in time, the men you were scared of?

**Voice:** quick, qualified, self-protecting. His seminar register is a flinch. As the game goes on, his best options get shorter.

## Denny Hanrahan

Irish, Vietnam 1965–67, home to a job running temps. A kind of guy who was everywhere. He taught half the town to drive. He calls Danny “Professor” and remembers everyone’s mother’s maiden name. Hired as “community liaison” because men won’t talk to a kid with a clipboard.

**Wants:** to get as many of his guys paid as he can before he dies. **Fears:** a question nobody has ever asked him. **Does:** opens doors, gets men laughing, and steers. He lies generously, for other people’s benefit, and it is one of his kindest lies that exposes him.

**He is alive in 2003** and his claim is undecided. Apart from Ed, he is the only one left who can join Michael’s name to Michael’s face. If he is discredited, honest men lose with him.

## Ed Kostecki

Six foot three, quiet, frightening to small children without trying to be. He doesn’t want Danny doing this work. He’s not sick. **He’s not sick yet** is the thing nobody in the house says. What he did at 23 was go home to his baby. There is nothing wrong with it. He has never forgiven himself.

**Voice:** nouns. He answers from under a car.

## Carol and Theresa

Carol converts all feeling into volume and food. She’s the best source in the game and gives everything away sideways. Theresa has already nursed half of Danny’s claimants and thinks he’s playing at it. She loves him and says so by being rude.

## Gerry and Bernice Wasik

A sweet, stubborn man who carried buckets. He worked the Hill in April and has borrowed February because he’s heard it was bad and he’s dying and he wants Bernice to have the house.

## Dolores Skelly

Small, exact, undefeated. She knows Michael refused to go to Vietnam and has never apologized for him. Everyone in 2001 tells her that **the law doesn’t cover mothers** like her. She files anyway.

## Leonard Hayes

Black, from Buffalo’s East Side, an Army clerk who took the bus to SHEP’S for the money and was charged double for drinks. Dry, precise, in no hurry. He wrote everything down because he expected to be called a liar. He will not file. He’ll lend the notebook on one condition: **he reads what you write before it’s sent.** His scenes are about a careful man deciding whether a careless one can be trusted. He isn’t there to teach Danny anything.

## Walter Pruski

Company man, honest by temperament, obedient by habit. Left thirty badges hanging on a rack because he was told to. His own badge was always on. His claim is the strongest in the game. **The man who kept the records gets paid.**

## Dr. Anita Ruhl

Kind, tired, exact. She isn’t a villain. She is the math.

## Lorraine Beck

Courteous and unhurried. She does what Danny did: she asks, and then she waits.

# 10. Systems

One day is three slots: **morning, afternoon, evening.** A slot holds one visit, one office task or one evening scene. Each case has fewer slots than there are things to do.

## 10.1 The Kitchen Table (interviews)

Conversation authored in Ink. The player mostly chooses **how** to ask. Each beat offers two to four of:

| **Option**               | **Always there?**    | **What it does**                                                                                                                                                                 |
|--------------------------|----------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **\[Say nothing.\]**     | Yes                  | Often strongest. The room fills: oxygen machine, TV, running water. People say true things into it. Overused, it becomes cruelty; each character has a limit of three per scene. |
| Plain question           | Usually              | Gets a plain answer.                                                                                                                                                             |
| Seminar voice            | Sometimes            | Closes a thread. Always funny.                                                                                                                                                   |
| **\[Look at Denny.\]**   | Only if he’s present | He gets an answer. It’s his version.                                                                                                                                             |
| Show a document or photo | If held              | Can change a version or open one.                                                                                                                                                |

**Before each visit the player chooses: bring Denny, or go alone.** With Denny, doors open and stories come fast, and some things won’t be said. Alone, some people won’t talk and some finally will. Every piece of testimony permanently records whether he was in the room. The player isn’t told why that matters.

## 10.2 The Telling (playable memory)

- A small top-down grid. It contains **only what has been said.** Anything unsaid is white and impassable.

- Asking more at the table opens more of the space. The two modes alternate.

- Turn-based: **one move or one interaction is one tick. Standing still costs nothing.** There is no clock.

- In hot areas each tick adds to the pen dosimeter at that zone’s rate. **The total becomes the exposure in the statement.** Linger and you’re writing a bigger dose. Nothing stops you, but **the pen tops out at 150** and no claimant’s walk can be filed above that.

- A Telling can be walked again. The most recent walk is the one on file.

| **State of a detail** | **How it looks**                                 |
|-----------------------|--------------------------------------------------|
| Unsaid                | White. Not there.                                |
| Said by one person    | Faint                                            |
| Said by two or more   | Solid                                            |
| Documented            | Solid, with a thin paper edge                    |
| Contested             | Slowly alternates between versions. No flashing. |

## 10.3 The evidence model

Facts are organized as **questions** with competing **versions**. Each version is supported by **sources** (testimony or documents). Strength is computed **only from what is attached to the file.**

| **Strength** | **Requires**                   | **Credit** |
|--------------|--------------------------------|------------|
| 3            | At least one document          | 1.00       |
| 2            | Two or more different speakers | 0.75       |
| 1            | One speaker                    | 0.50       |
| 0            | Nothing attached               | 0.00       |

- If any other version of the same question also has support attached, subtract 1 from each (minimum 0).

- The government’s **finding** is the strongest version. On a tie, the claimed version stands.

- **Leaving a document out is allowed.** It goes in the Drawer.

## 10.4 The File and the number

The player fills a period form by placing facts in blanks, chooses what to attach, and signs. Filed is filed. Some records arrive from the government’s side whatever the player does.

D = exposure from the walk (capped if a badge record applies) x credit

POC = 100 \* D / (D + K) K is a constant per cancer type

paid = POC \>= 50 before rounding, and employment is established

This is a deliberate simplification of the real method. It’s fair, legible to writers and easy to tune.

**Calling Anita** gives an informal range of ±3 points before filing. One free call in Case 1, then three for the rest of the game.

## 10.5 When results arrive

Nothing is decided during 2001. **Decision letters are handed across the table in the 2003 frame, one case at a time,** so the player always learns the outcome of a case after beginning the next. Dolores’s and Denny’s are still pending in 2003 and arrive in the epilogue.

## 10.6 The frame

March 17, 2003. Beck interviews Danny about irregularities in the Tarraugus claims. Short scenes between cases. Danny can tell the truth, shade it, lie or decline. It opens as a formality and becomes the climax.

**Three questions decide the ending.** Each is asked once, late.

1.  Was Gerry Wasik at the Hill in February 1971?

2.  Did Mr. Hanrahan tell claimants what to say?

3.  Who was E. Kostecki on February 23, 1971?

The third is asked only if the gate log is in any file, and it offers only answers the player has grounds for.

**The recalculation.** If Danny’s answers discredit Denny, every piece of testimony Denny gave, and every piece taken with Denny in the room, is struck. All cases are re-run under the same rules. Honest claims can fail. Under the real law, a claimant found to have defrauded the program forfeits permanently. The letters change on the table.

## 10.7 Proving who Michael was

Dolores must show that Michael worked at the Hill. The real program accepted a sworn co-worker affidavit (Form EE-4), so the game does too. Identity needs **3 points**, and the gate log must be attached. The Kostecki name goes in the file by every route.

| **Evidence**                        | **Points** | **Cost**                                                                                                        |
|-------------------------------------|------------|-----------------------------------------------------------------------------------------------------------------|
| Ed swears to it                     | 3          | Admits to cashing the check. Must be asked, alone, by a player who shows him at least two of clues 4, 8, 9, 10. |
| Denny swears to it                  | 2          | Becomes 0 if he is later discredited.                                                                           |
| Leonard identifies the photo        | 1          | He only knew him as Altar Boy.                                                                                  |
| Altar server record (St. Brendan’s) | 1          | —                                                                                                               |
| Boot ledger against Ed’s boots      | 1          | Points at Ed.                                                                                                   |
| Baby book                           | 1          | Carol’s handwriting. Points at Ed.                                                                              |
| Signature comparison                | 1          | Points at Ed.                                                                                                   |

# 11. First playable: Prologue and Case 1

This section is the complete build target for the first version. Everything else waits until it has been playtested.

## 11.1 Calendar

| **Date**   | **Slots**           | **Available**                                                                                         |
|------------|---------------------|-------------------------------------------------------------------------------------------------------|
| Tue Nov 13 | Prologue (scripted) | Office opens. Denny. First drive. First night at SHEP’S. The photo is on screen and is not mentioned. |
| Wed Nov 14 | 3                   | Gerry visit 1 (bring Denny or not). Office. Dinner.                                                   |
| Thu Nov 15 | 3                   | Gerry visit 2. SHEP’S. Ride with Denny.                                                               |
| Fri Nov 16 | 3                   | Bernice alone (stubs). Anita call. Fish fry.                                                          |
| Sat Nov 17 | 3                   | Gun show. Gerry visit 3. Garage with Ed.                                                              |
| Sun Nov 18 | 1 (evening)         | Bills lose to Seattle. SHEP’S.                                                                        |
| Mon Nov 19 | 1 (morning)         | File. Then Frame 1.                                                                                   |

## 11.2 The question at issue

**Q_WHEN: when did Gerry work the Hill?** Truth: April. He claims February.

| **Source ID**    | **Version** | **Kind**   | **How obtained**                                                                                                                                               |
|------------------|-------------|------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| say_gerry_feb    | feb         | Testimony  | Visit 1. Always offered first.                                                                                                                                 |
| say_hanrahan_feb | feb         | Testimony  | \[Look at Denny\] in visit 2 or 3. He goes quiet first. “A clean-up job. In the winter there. Yeah. Gerry was on that.”                                        |
| doc_stubs_apr    | apr         | Document   | Bernice, alone, or \[Say nothing\] in visit 2. Three stubs, April 12–30, in a cookie tin.                                                                      |
| say_gerry_apr    | apr         | Testimony  | Visit 3, alone, with the stubs shown, and \[Say nothing\].                                                                                                     |
| gov_badge_1971   | —           | Government | One line: *1971, whole body, total.* No dates. Caps exposure at **85**, and only if the finding is April. In the February version the badges were on the rack. |

**Clue the player can catch:** Gerry says he got his ashes at the seven o’clock Mass the morning after the February job. Elsewhere, men who were there say the van wasn’t back until nine.

## 11.3 The Telling

| **Zone**               | **Opened by**                | **Rate per tick** | **Ticks on shortest path** | **Subtotal** |
|------------------------|------------------------------|-------------------|----------------------------|--------------|
| Locker room            | “They gave you a pen.”       | 0                 | any                        | 0            |
| Step-off               | “You’d stand on the tape.”   | 1                 | 2                          | 2            |
| Aisle                  | “Long hall, green.”          | 3                 | 4                          | 12           |
| Doorway                | “A fella with a stopwatch.”  | 6                 | 2                          | 12           |
| Cell, April version    | “Wiped down a pump.”         | 10                | 5                          | 50           |
| Cell, February version | “It was all over the floor.” | 16                | 5                          | 80           |

Shortest walk: **76** (April) or **106** (February). The pen clicks at each 10 units. At 80 the stopwatch man says “Out.” The player may ignore him. The pen stops counting at **150**, so loitering alone can never carry a claim. The young man in the dark coat stands beyond the cell in the February version only. If the February version was claimed but the finding is April, exposure defaults to the shortest April walk, 76.

## 11.4 Test vectors

K = 100 for this cancer. An implementation is correct when it reproduces these.

| **\#** | **Filed**                                                                           | **Finding** | **Strength** | **POC**  | **Paid** |
|--------|-------------------------------------------------------------------------------------|-------------|--------------|----------|----------|
| T1     | April + stubs, shortest walk (76)                                                   | apr         | 3            | 43.2     | No       |
| T2     | April + stubs, long walk (110, capped at 85)                                        | apr         | 3            | 45.9     | No       |
| T3     | Feb, Gerry only, shortest (106)                                                     | feb         | 1            | 34.6     | No       |
| T4     | Feb, Gerry + Denny, shortest (106)                                                  | feb         | 2            | 44.3     | No       |
| T5     | As T4, one extra cell tick (122)                                                    | feb         | 2            | 47.8     | No       |
| T6     | As T4, two extra cell ticks (138)                                                   | feb         | 2            | **50.9** | **Yes**  |
| T7     | As T6, but stubs attached                                                           | apr         | 2            | 36.3     | No       |
| T8     | As T6, recalculated: Denny discredited, Denny was in the room for Gerry’s testimony | none        | 0            | 0.0      | No       |
| T9     | As T6, recalculated: Gerry had been interviewed alone                               | feb         | 1            | 40.8     | No       |
| T10    | As T2, recalculated                                                                 | apr         | 3            | 45.9     | No       |
| T11    | Feb, Gerry only, walk of 300 (pen stops at 150)                                     | feb         | 1            | 42.9     | No       |
| T12    | Feb, Gerry + Denny, walk of 300 (pen stops at 150)                                  | feb         | 2            | 52.9     | Yes      |

**What this produces.** The truthful file comes out at 46 percent and pays nothing. The only way to pay Gerry is to hide three pay stubs, let Denny lie, and stand in the hot room at least two moves longer than the job took. The game never says so.

## 11.5 Acceptance criteria

- Prologue through Frame 1 is playable start to finish with no console errors.

- All twelve test vectors pass as automated tests.

- Every Gerry outcome above is reachable by play.

- Going alone and bringing Denny produce visibly different visit 1 and visit 2 text.

- Snow coverage changes as facts are said. Unsaid zones cannot be entered.

- Save, quit and reload restores the exact state, including an in-progress walk.

- Playable with keyboard only. Text size adjustable. No flashing.

- No on-screen text states a deduction, a moral or an outcome before Frame 1.

# 12. Story structure

| **Chapter**                                    | **Dates**                   | **Core of it**                                                        |
|------------------------------------------------|-----------------------------|-----------------------------------------------------------------------|
| Prologue                                       | Nov 13                      | It’s too warm. The fax doesn’t work. Denny drives.                    |
| **1. Buckets** (Gerry)                         | Nov 14–19                   | Learn every system. The kind lie.                                     |
| **2. The Law Doesn’t Cover Mothers** (Dolores) | Nov 20–27                   | Thanksgiving. A boy with no record. Denny says he never heard of him. |
| **3. The Notebook** (Leonard)                  | Nov 28 – Dec 9              | A man who wrote it down. The Bills win.                               |
| **4. The Rack** (Walter)                       | Dec 10–20                   | The gate log. The boots. The strongest claim in town.                 |
| **5. As Likely As Not** (Denny)                | Dec 21–28                   | Christmas Eve, the storm, Denny’s statement.                          |
| Frame                                          | Mar 17, 2003                | Between chapters, then the end.                                       |
| Epilogue                                       | Ash Wednesday, Feb 25, 2004 | Letters. Who’s alive.                                                 |

## Case 2. Dolores Skelly

She serves tea and corrects the spelling on the form. The Telling is her kitchen in 1971: Michael counting out board money in small bills, his back to us. She gives: the altar boys, the induction notice if asked without flinching, the envelope. Denny, in the car, says he never heard of any Skelly and misses a turn he’s made ten thousand times.

**The legal wall.** In 2001 the law generally excluded a mother who hadn’t depended on her son for support. Everyone says so, Anita included. The player can still open the file. **A player who never opens it cannot benefit from what happens on December 28.**

**Thanksgiving at the Kosteckis’:** the altar server story, at volume.

## Case 3. Leonard Hayes

Three visits through a storm door before he opens it. He reads Danny’s draft and strikes two adjectives. His Telling is the most solid in the game; everything in it has a paper edge. He contradicts himself once, about whether he laughed.

**Choice:** the notebook strengthens several files and puts his name in all of them. He will agree only if the player has kept the terms.

## Case 4. Walter Pruski

Offers to show Danny how the badges worked. Has kept the ledger and a photocopied gate log in a suit box for thirty years, waiting for someone to ask. Filing his claim honestly is easy and pays. Whether to use his log for anyone else is the case. In his Telling there’s no young man, because Walter looked at the rack.

## Case 5. Denny Hanrahan

**December 23.** The last ordinary day.

**December 24, Christmas Eve.** Fourteen people in the Kostecki house. Snow from mid-afternoon, four inches an hour, thunder. Denny arrives uninvited with a ham and can’t be sent home. Everyone is yelling about the ham. Designed as one continuous scene through five rooms: kitchen (Carol), table (everyone), closet (baby book), back hall (boots), garage (Ed). The player has time for three.

**December 25.** A lull. Mass for those who can walk. Quiet.

**December 26–27.** The band comes back. Driving ban. Denny asks Danny to take his statement at the kitchen table. The Telling is February 23, **assembled from everything the player has gotten anyone to say all game.** Whatever was never said is white. Near the end the young man isn’t at the edge. His face is never shown and no one addresses him by name.

**December 28.** Digging out. On the radio, between closings, one line about a defense bill signed in Washington. It changes who counts as a survivor, backdated to July. **Mothers count.** No character remarks on it. If the file is open, it’s alive.

## Endings

There is no ending list. The epilogue is assembled from independent results, one short scene each, at SHEP’S and St. Brendan’s on Ash Wednesday 2004.

| **Thread**        | **States**                                                                                                     |
|-------------------|----------------------------------------------------------------------------------------------------------------|
| Gerry and Bernice | Paid / denied / paid and clawed back. Gerry has died in all of them.                                           |
| Dolores           | Never filed / denied for identity / paid. If paid, she receives it at a table with Ed in the room, or without. |
| Michael           | Named in a federal record, or not.                                                                             |
| Leonard           | Notebook returned in person / by mail / subpoenaed.                                                            |
| Walter            | Paid. Goes to Florida or can’t bring himself to cash it.                                                       |
| Denny             | Protected / exposed. Claim paid / denied. Has died by 2004; who’s at the funeral varies.                       |
| Ed                | Asked / never asked. Named with consent / named without / not named.                                           |
| Danny             | Truthful / lied to an investigator / declined. Stayed / left.                                                  |
| The Drawer        | Taken as evidence / kept / burned in Ed’s garage stove.                                                        |

**Last image, always the same:** the bar mirror, the photograph, ash on foreheads. It must not vary with what the player worked out.

**Final card:** *In 2019 the government proposed covering workers at the real plant for these years without calculating their dose, provided they had worked 250 days. It reported no evidence of a single incident of exceptionally high exposure.*

# 13. Tone samples

Reference for writers. Match the rhythm.

### Gerry’s living room

*Oxygen concentrator. TV with the sound off: mountains, a map with arrows.*

GERRY: You want to know what I did up there, I carried buckets.

DENNY: He carried buckets.

GERRY: I carried buckets from one place to another place.

→ **\[Say nothing.\]**

→ “What was in the buckets?”

→ “So you were, in effect, a disposable unit of exposure.”

→ **\[Look at Denny.\]**

If \[Say nothing.\]:

*The machine does its sigh. In the kitchen Bernice runs water over something that’s already clean.*

GERRY: …They gave you a pen. Like a fountain pen. Clipped it right here. You went in till the pen said go out.

DENNY: The pocket dosimeter.

GERRY: I know what it’s called, Denny.

If seminar voice:

GERRY: (to Denny) Is he from the government or the college?

### Ed’s garage

*Ed’s legs, under a Buick.*

ED: Half-inch.

*You hand him the half-inch.*

→ “Did you know a Gerry Wasik?”

→ **\[Say nothing.\]**

ED: Other half-inch.

### Dolores

DOLORES: Two L’s. Everyone leaves one off. The Army managed to spell it.

### The Buick, southbound

DENNY: Your mother ever tell you I taught her to drive?

→ “She said you hit a mailbox.”

DENNY: *She* hit the mailbox. I was the one said keep going.

### Carol, answering the phone

CAROL: It’s for you! It’s Dan— it’s Den— it’s the one that’s not you!

### Frame 1

BECK: Is there anything about Mr. Wasik’s file you’d like to add?

*She has a pen. She isn’t holding it.*

→ **\[Say nothing.\]**

→ “It’s all in there.”

→ “What did he get?”

*She slides the letter over. She lets you read it. It is a very good silence. You’d know.*

# 14. Technical plan

## 14.1 Stack

- TypeScript, Vite. **inkjs** for all dialogue. Canvas 2D for Tellings. HTML/CSS for the File, calendar and letters.

- Vitest for rules. Playwright for the acceptance path.

- No server, accounts, analytics or network calls. Saves in IndexedDB with export and import.

- **All writing lives in Ink and data files.** No player-facing prose in TypeScript.

## 14.2 Layout

/content/ink/ prologue.ink, case1/\*.ink, frame/\*.ink

/content/data/ characters, questions, sources, zones, calendar, tuning

/src/rules/ adjudicate.ts, identity.ts, recalc.ts (pure, no UI)

/src/telling/ grid, snow mask, dosimeter

/src/file/ form, attach, drawer

/src/calendar/ slots, gating

/src/state/ one serializable GameState, reducers, saves

/tests/vectors.json Section 11.4, verbatim

## 14.3 Data model

Source { id, questionId, versionId\|null, kind: "say"\|"doc"\|"gov",

speaker?, hanrahanPresent?: boolean, obtainedOn?: date }

Question { id, versions: \[{ id, label }\] }

Zone { id, telling, version?, opensWith: factId, rate, cells }

Walk { telling, version, ticksByZone, total }

File { caseId, claimed: {questionId: versionId}, attached: sourceId\[\],

walk, logLinks: \[{ logEntryId, employeeName }\], signedOn }

Drawer { items: (sourceId \| poisonFactId)\[\] }

Frame { answers: { q1?, q2?, q3? }, hanrahanDiscredited: boolean }

## 14.4 Reference algorithm

strength(version, sources):

docs = sources for version where kind is "doc" or "gov"

speakers = distinct speakers for version where kind is "say"

raw = 3 if docs else min(2, count(speakers))

if any other version of the question has raw \> 0: raw = raw - 1

return max(0, raw)

adjudicate(file, govSources, tuning, discredited):

s = file.attached + govSources

if discredited:

drop every "say" where speaker is hanrahan or hanrahanPresent

finding = version with highest strength; on a tie, the claimed one

if strength(finding) == 0: return NOT_ESTABLISHED

exposure = min(walk total, PEN_MAX) if the walk matches the finding,

else the finding's shortest path

if the finding has a badge cap: exposure = min(exposure, cap)

D = exposure \* CREDIT\[strength\]

POC = 100 \* D / (D + K)

return { finding, strength, POC, paid: POC \>= 50 }

A gov source with no version, such as gov_badge_1971, sets caps only and adds no strength.

## 14.5 Ink bindings

EXTERNAL say(sourceId) // records testimony, stamps hanrahanPresent

EXTERNAL give(docId) // player now holds document

EXTERNAL poison(factId) // straight to the Drawer

EXTERNAL open_telling(id, version)

EXTERNAL has(id) EXTERNAL with_hanrahan() EXTERNAL silence_count()

## 14.6 Look and sound

- **A tired photocopy.** One-bit or four-tone dithering, paper grain, toner dropout. No hand-drawn animation and no portraits. People are a voice, a chair and an object.

- Snow is white paper with no toner on it.

- Kitchen Table scenes are one still composition per location.

- **Sound carries it:** room tone, oxygen machine, pen clicks, furnace, a distant game. When the snow comes, almost nothing.

- No music in poison scenes or Tellings. Music is permitted from in-world radios and at the end.

## 14.7 Accessibility and content care

- Full keyboard play. Scalable text. Captions for every sound that carries information, including clicks. No flashing. Reduced-motion mode holds contested details in a split view.

- Opening notice: cancer, illness of parents, animal injury, war and draft references, period racism, grief.

## 14.8 Build order

1.  Rules library with all test vectors passing. No UI.

2.  One Telling, gray boxes, with snow and dosimeter.

3.  One Kitchen Table in Ink with sources being recorded.

4.  The File, the Drawer and Frame 1.

5.  Calendar, save and load, and the look.

6.  **Stop. Playtest with five people who haven’t read this. Revise this document.**

7.  Cases 2 to 5, one at a time, each playtested.

## 14.9 What to watch for in playtests

- After Case 1, can players say what they did to get their result, in their own words?

- Did anyone feel told what to think? Where?

- Did anyone look at the photograph?

- By the end, about half of attentive players should know who was in the cell. If nearly everyone does by Case 4, remove clues. If almost nobody does by Christmas, move one earlier.

# 15. Open items

Each has a default so that no work is blocked.

| **Item**                                      | **Default until decided**                                           |
|-----------------------------------------------|---------------------------------------------------------------------|
| Town name                                     | **Tarraugus**, stored once as TOWN_NAME.                            |
| Game title                                    | *As Likely As Not*                                                  |
| How far a Seneca thread goes                  | Passing reference only, per Section 5.                              |
| Michael ignored his induction notice          | Canon as written. Dolores confirms it only if asked.                |
| Diagnoses and K values, Cases 2–5             | Gerry: lung, K = 100. Others set when each case is written.         |
| Full scripts for Prologue and Case 1          | To be written in Ink. Agents use placeholders.                      |
| Real names (the Bills, players, Labatt, Tops) | Text mentions only, no logos. Review before any commercial release. |

# Appendix. Sources and inventions

The people, the town, the plant, its operator, the bar and the night of February 23 are invented. The machinery around them is mostly real.

## Real, with sources

| **Used in the game**                                                                                                                                                                    | **Source**                                                                                                                                                          |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| The real plant (West Valley, NY) used roughly 1,000 temporary workers a year; 991 in 1971. Nicknamed “sponges.” Included moonlighters, students and seasonal auto workers.              | [Investigative Post, 2021](https://www.investigativepost.org/2021/03/01/cancer-plagues-west-valley-nuke-workers/)                                            |
| Badges were worn on the chest, which under-read radiation from floors. Many workers’ recorded dose is a single sentence.                                                                | [SC&A site profile review, 2013](https://www.Cdc.Gov/niosh/ocas/pdfs/abrwh/scarpts/sca-wvdpsp-r1.pdf)                                                        |
| \$150,000, and the “at least as likely as not” test.                                                                                                                                    | [NIOSH, EEOICPA](https://cdc.gov/niosh/ocas/ocaseeoi.html)                                                                                                   |
| First claims July 31, 2001. First claimant telephone interview December 2001.                                                                                                           | [NIOSH timeline, 2001](https://cdc.gov/niosh/ocas/time2001.html)                                                                                             |
| Sworn co-worker affidavits (Form EE-4), forfeiture for fraud, and the exclusion of non-dependent parents in 2001.                                                                       | [Federal Register, May 25, 2001](https://govinfo.gov/link/fr/66/28957)                                                                                       |
| Survivor rules amended by a law of December 28, 2001, retroactive to July 1.                                                                                                            | [Federal Register, Dec 26, 2002](https://www.govinfo.gov/content/pkg/FR-2002-12-26/pdf/02-31841.pdf)                                                         |
| Parents are eligible under the amended law; siblings are not.                                                                                                                           | [DOL decision 60958-2005](https://www.dol.gov/agencies/owcp/energy/regs/compliance/Decisions/GenericDecisions/DecisionsRef/60958-2005--20050224)             |
| The 2019 proposal, the 250-day rule, and no identified high-exposure incident. The real plant was covered as a weapons employer for 1966–1973.                                          | [NIOSH SEC-00252](https://Cdc.gov/niosh/ocas/pdfs/sec/wvdp/wvdper-252-508.pdf)                                                                               |
| No snow in Buffalo in November 2001.                                                                                                                                                    | [NOAA](https://webarchive.library.unt.edu/eot2008/20090513020019/http://www.noaanews.noaa.gov/stories/s848.htm)                                              |
| The storm, hour by hour: 81.6 inches at the airport, four inches an hour, thunder.                                                                                                      | [NWS Buffalo](https://www.weather.gov/buf/HistoryDec24.html)                                                                                                 |
| Bills scores.                                                                                                                                                                           | [Stats Crew](https://www.statscrew.com/football/results/t-BUF/y-2001)                                                                                        |
| Flutie cut February 28, 2001.                                                                                                                                                           | [ESPN](https://www.espn.com/nfl/news/2001/0228/1116487.html)                                                                                                 |
| The dog’s nose and blistered feet at Love Canal (one family’s account).                                                                                                                 | [Family account](https://wol.pr418.com/en/wol/d/r1/lp-e/101980843)                                                                                           |
| “Fire rocks.”                                                                                                                                                                           | [TIME](https://content.time.com/time/subscriber/article/0,33009,924172-2,00.html)                                                                            |
| Tumors on 29 percent of surveyed Buffalo River bullheads, 1998–2000.                                                                                                                    | [USGS](https://www.usgs.gov/publications/assessment-fish-tumors-or-other-deformities-beneficial-use-impairment-brown-bullhead)                               |
| Radioactive slag used as fill in Niagara County, much of it from ordinary ore processing.                                                                                               | [EPA](https://19january2021snapshot.epa.gov/ny/niagara-county-radiation-removal-sites_.html); [Oak Ridge](https://www.osti.gov/servlets/purl/5101865) |
| Origin of “Cattaraugus.”                                                                                                                                                                | [Wikipedia, Cattaraugus Creek](https://en.wikipedia.com/wiki/Cattaraugus_Creek)                                                                              |
| Survey near the creek on Seneca territory: two areas barely above background, no health concern identified for the areas assessed; assessments for the Seneca areas were still pending. | [DOE/NYSERDA, 2016](https://www.energy.gov/sites/default/files/2022-10/08-24-2016%20QPM%20Aerial%20Survey%20Update%20alm3%20amd.pdf)                         |

## Invented or simplified

- Working under other men’s names, and leaving badges on the rack. No source says this happened at the real plant.

- Recruiting Vietnam veterans from a Buffalo-area bar. Plausible, undocumented.

- Taking statements in person. Real interviews were by telephone.

- The probability formula. The real one uses cancer-specific risk models and a confidence limit.

- Decision times, compressed. Early claims that needed dose reconstruction often took much longer.

- The weather on February 23, 1971. The date itself, Fat Tuesday, is correct.
