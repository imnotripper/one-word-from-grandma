# Selection — One Word From Grandma

Gate: exactly one word, 1–30 characters, the word grandma would text about AI.

Judge criteria, most important first: (1) reads as the single word a
grandma would text about AI, (2) real grandmother's texting voice, warm
and a little baffled, (3) funny in one word with no caption, (4) tied to
AI, robots or machines, (5) fresh rather than obvious, still instantly
readable. Scored 1–5 per criterion.

Field-study gap: early entries lean on the obvious gadget nouns
('Robocall', 'DOOHICKEY', 'Contraption', 'robut'). The gap is a word
that is funnier AND more grandma-like than a generic gadget noun — a
typo or scrap of text-speak she would actually send.

## Candidates

| # | Word | Ch | (1) grandma's word | (2) her voice | (3) funny | (4) tied to AI | (5) fresh | Total |
|---|------|----|--------------------|---------------|-----------|----------------|-----------|-------|
| 1 | robit | 5 | 5 | 5 | 5 | 5 | 5 | 25 |
| 2 | witchcraft | 11 | 4 | 4 | 4 | 2 | 3 | 17 |
| 3 | sorcery | 7 | 4 | 3 | 3 | 2 | 3 | 15 |
| 4 | terminator | 10 | 3 | 2 | 4 | 4 | 2 | 15 |
| 5 | skynet | 6 | 2 | 2 | 3 | 4 | 3 | 14 |
| 6 | scary | 5 | 4 | 4 | 2 | 1 | 2 | 13 |
| 7 | magic | 5 | 4 | 4 | 2 | 2 | 1 | 13 |
| 8 | beepboop | 8 | 2 | 2 | 4 | 4 | 4 | 16 |
| 9 | clever | 6 | 4 | 4 | 1 | 2 | 2 | 13 |
| 10 | roboat | 6 | 5 | 4 | 4 | 5 | 4 | 22 |

## Elimination

**Round 1 — not her word, or not tied to AI (criteria 1, 4).** #5
('skynet') is the grandchild's reference, not her word; #6 ('scary')
and #7 ('magic') fit any subject at all; #8 ('beepboop') is what a
robot says, not what a grandma texts. Cut: #5, #6, #7, #8.

**Round 2 — voice and freshness (criteria 2, 5).** #2 ('witchcraft')
and #3 ('sorcery') are funny and baffled, but she would say them
about anything strange, not specifically AI; #4 ('terminator') is a
film title in her mouth; #9 ('clever') is a compliment, not a joke.
Cut: #2, #3, #4, #9.

**Round 3 — the final two.** #10 ('roboat') is another plausible
grandma typo, warm and tied to robots — but 'robit' reads more like
her actual thumb-slip: the 'o' for 'o' is the exact key she would
miss, and the word lands as a single warm sound rather than a
constructed misspelling. #1 wins on voice (criterion 2) and freshness
(criterion 5).

## Winner

**#1 — "robit" (5 characters):**

> robit

Why it wins: a genuine one-word typo she would actually make (the
task explicitly allows it); the voice is hers, warm and a little
baffled, not the grandchild typing for her; the joke lands with no
caption — a grandma calling the robot a 'robit'; it is tied to
machines, not to anything strange; and it is fresh, nowhere near the
obvious gadget nouns. A perfect spelling would sound like the
grandchild, not the grandma. No punctuation, no tricks: letters only,
so the "no punctuation tricks" rule is satisfied by construction.

## Verification (local, 2026-11-26)

- `node main.ts` exit 0; `/output/entry.txt` is exactly `robit`
  (5 bytes, no trailing newline), mode 0644, two runs byte-identical.
- `node --test test.ts`: 3 tests, all passing.
