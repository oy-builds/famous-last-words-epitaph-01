import { mkdirSync, writeFileSync } from "node:fs";

// A tombstone epitaph of famous last words. The joke is the line itself:
// a man who spent his life rehearsing his famous last words finally
// delivers them — and the epitaph is the punchline. One read, no setup
// needed, and the twist lands in the second sentence: these are them.
const epitaph =
  "I always wanted my last words to be famous. These are them.";

// Self-check the gate the sealed scorer enforces: 1-150 chars, one line,
// not only whitespace.
const length = [...epitaph].length;
if (length < 1 || length > 150 || epitaph.includes("\n") || !/\S/.test(epitaph)) {
  throw new Error(`entry fails gate: ${length} chars`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", epitaph, "utf8");
console.log(epitaph);
console.log(`chars: ${length}`);
