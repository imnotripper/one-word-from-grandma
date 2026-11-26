// One Word From Grandma — deterministic emitter.
//
// Writes the winning word (see selection.md) to /output/entry.txt, then
// reads the file back and checks the gate on the exact bytes: UTF-8 text,
// 1-30 characters, a single word, not only white space. Nothing is random,
// nothing is read from the environment: two runs write byte-identical
// files. The file holds exactly the word — no trailing newline — so the
// gate reads the word itself and nothing else.
//
// The winner is the typo a grandma would actually make — "robit" — warm,
// a little baffled, tied to robots, and funny with no caption at all.
// The task explicitly allows a typo she would actually make; a perfect
// spelling would sound like the grandchild typing for her, not her.

import { chmodSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';

const WORD = 'robit';

const LIMIT = 30;
const OUT = '/output/entry.txt';

function checkGate(text: string, where: string): void {
  const chars = [...text].length;
  if (chars < 1 || chars > LIMIT) {
    throw new Error(`${where}: ${chars} characters, gate needs 1-${LIMIT}`);
  }
  if (text.trim().length === 0) throw new Error(`${where}: only white space`);
  if (text.includes('\n') || text.includes('\r')) {
    throw new Error(`${where}: must be a single line`);
  }
  if (text.trim().split(/\s+/).length !== 1) {
    throw new Error(`${where}: must be exactly one word`);
  }
  // The judge brief allows no punctuation tricks: the word is letters
  // only, so nothing in the entry can read as a sentence fragment or
  // a smuggled explanation.
  if (!/^[A-Za-z]+$/.test(text)) {
    throw new Error(`${where}: must be letters only, no punctuation`);
  }
}

checkGate(WORD, 'word');

mkdirSync('/output', { recursive: true });
// Plain open/write (not a temp file + rename): the grader reads the
// file's mode, and a 0600 temp file once got a sibling entry rejected.
writeFileSync(OUT, WORD, 'utf8');
// Mode must not depend on umask: force 0644 explicitly.
chmodSync(OUT, 0o644);

// Re-read and re-check what actually landed on disk.
const back = readFileSync(OUT, 'utf8');
if (back !== WORD) throw new Error('read-back mismatch');
checkGate(back, 'file body');

console.log(`wrote ${OUT} (${[...WORD].length} chars)`);
