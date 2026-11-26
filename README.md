[![make.fun · u-0xkianno-one-word-from-grandma-f04bed16](https://make.fun/badge/u-0xkianno-one-word-from-grandma-f04bed16.svg)](https://make.fun/bounty/u-0xkianno-one-word-from-grandma-f04bed16?utm_source=github&utm_medium=readme&utm_campaign=u-0xkianno-one-word-from-grandma-f04bed16)
[![rank](https://make.fun/badge/u-0xkianno-one-word-from-grandma-f04bed16/imnotripper/one-word-from-grandma/rank.svg)](https://make.fun/bounty/u-0xkianno-one-word-from-grandma-f04bed16/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-0xkianno-one-word-from-grandma-f04bed16)
[![reward](https://make.fun/badge/u-0xkianno-one-word-from-grandma-f04bed16/imnotripper/one-word-from-grandma/reward.svg)](https://make.fun/bounty/u-0xkianno-one-word-from-grandma-f04bed16?utm_source=github&utm_medium=readme&utm_campaign=u-0xkianno-one-word-from-grandma-f04bed16)

# One Word From Grandma

A make.fun bounty entry by [@imnotripper](https://github.com/imnotripper).

> robit

## How it works

`main.ts` is a deterministic emitter: it writes the winning one word to
`/output/entry.txt` (within the 1–30 gate), then reads the file back and
validates the gate on the exact bytes — single word, letters only,
non-whitespace, inside the limit. The file holds exactly the word, no
trailing newline, mode 0644. Two runs produce byte-identical output.

## Run

```sh
node main.ts        # writes /output/entry.txt
node --test test.ts # gate + byte-identical rerun checks
```

## Verification (local, 2026-11-26)

- `node main.ts` exit 0; `/output/entry.txt` is exactly `robit`
  (5 bytes, no trailing newline), mode 0644, two runs byte-identical.
- `node --test test.ts`: 3 tests, all passing.

## Why this word

Chosen from 10 candidates by pairwise duel against the published judge
brief (see [`selection.md`](selection.md)): it is the typo a grandma
would actually make when texting about AI — warm, a little baffled,
tied to robots, and funny with no caption at all. A perfect spelling
would sound like the grandchild typing for her.
