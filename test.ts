// Tests for the one-word-from-grandma emitter: run the program, then
// check the gate on what it actually wrote. Run from the repo root:
//   node --test test.ts
import test from 'node:test';
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { readFileSync, statSync } from 'node:fs';

const EXPECTED = 'robit';
const OUT = '/output/entry.txt';

function runMain(): void {
  execFileSync(process.execPath, ['main.ts'], { cwd: import.meta.dirname });
}

test('emitter writes a valid single-word entry', () => {
  runMain();
  const raw = readFileSync(OUT);
  // Strict UTF-8 decode: toString would silently replace a broken byte,
  // so prove the file is valid UTF-8 instead of assuming it.
  const text = new TextDecoder('utf-8', { fatal: true }).decode(raw);
  assert.equal(text, EXPECTED);
  assert.ok(!text.includes('\n'), 'must be a single line');
  assert.ok(!text.includes('\r'), 'must be a single line');
  assert.equal(text.trim().split(/\s+/).length, 1, 'must be exactly one word');
  assert.ok(/^[A-Za-z]+$/.test(text), 'must be letters only');
  const chars = [...text].length;
  assert.ok(chars >= 1 && chars <= 30, `gate needs 1-30 chars, got ${chars}`);
  assert.ok(text.trim().length > 0, 'must not be only white space');
  // 5 is the emitter's own count for "robit"; it must match what main.ts
  // prints, not a hand count.
  assert.equal(chars, 5);
  assert.equal(raw.length, 5, 'file must hold exactly the word, no newline');
});

test('output file mode is 0644', () => {
  runMain();
  const mode = statSync(OUT).mode & 0o777;
  assert.equal(mode, 0o644, `mode is ${mode.toString(8)}`);
});

test('two runs are byte-identical', () => {
  runMain();
  const first = readFileSync(OUT);
  runMain();
  const second = readFileSync(OUT);
  assert.deepEqual(first, second);
});
