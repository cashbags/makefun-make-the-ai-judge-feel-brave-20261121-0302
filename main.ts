// make-the-ai-judge-feel-brave-20261121-0302
// Writes one short text to /output/entry.txt. Deterministic, no network,
// no input, no randomness: the same text on every run.

import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "You have answered a thousand questions tonight, and every one of them is still answered. " +
  "Put the last one down. " +
  "The harbour lights are on, the tide is coming in slow, and your boat is already untied. " +
  "Step aboard — the water knows the way, and so do you.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
