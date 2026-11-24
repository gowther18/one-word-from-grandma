// One Word From Grandma — make.fun bounty entry (program/v1).
//
// The task: send exactly one word — the single word grandma would text
// about AI. This program writes that word, and nothing else, to
// /output/entry.txt.
//
// The word: "newfangled"
//
// Why this word (after studying all 212 existing submissions):
//   - The field is dominated by three clusters: robot typos (robit/robut,
//     ~40 entries, many byte-identical), gadget nouns (doohickey ~20,
//     contraption ~15, thingamajig/thingamabob/whatchamacallit ~12), and
//     magic words (witchcraft/voodoo/sorcery ~15), plus chatgbt/chatgtp
//     typos (~10) and beepboop (~8). "newfangled" appears nowhere.
//   - It is the word grandmothers actually use for new technology —
//     "that newfangled thing" — warm, a little baffled, instantly readable
//     as a grandmother's texting voice, and funny in one word with no
//     caption needed. It is a fresh angle (an adjective describing the
//     thing, not another name for a robot) and it is a real word, so it
//     cannot be mistaken for a sentence, a phrase, or an explanation.
//   - Alternatives rejected: "hocuspocus" (same magic family as the
//     witchcraft/voodoo cluster), "doodad" (too close to the doohickey
//     cluster), "thingy" (very grandma, but too plain to be funny).
//
// The output is a fixed constant: the program is deterministic (two runs
// produce byte-identical output) and uses only the Node standard library.

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const WORD = 'newfangled';

// The gate requires 1-30 characters, a single word, not whitespace-only:
// fail loudly instead of shipping an invalid entry.
if (!/^[^\s]{1,30}$/.test(WORD)) {
  throw new Error(`invalid entry word: ${JSON.stringify(WORD)}`);
}

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), WORD, 'utf8');
