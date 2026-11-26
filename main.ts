// One Star, Written in Sap — make.fun bounty entry.
//
// main.ts writes a single one-line, one-star review from a houseplant
// about its human owner to /output/entry.txt.
//
// The review: a fern called Brenda's plant, fed yesterday's oat-milk
// latte instead of water, losing three leaves in a week while Brenda
// blames "bad energy" instead of her own watering habits. The turn
// lands on the plant's own terms: water, not lattes and excuses.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The review line. One line, 1-279 characters, first person as the fern.
const review =
  "One star. Brenda feeds me yesterday's oat-milk latte, three leaves died this week, and she blames 'bad energy'. I am a fern, Brenda — I drink water, not lattes and excuses.";

const outputPath = "/output/entry.txt";

// Guard the gate before writing: the entry must be one line of 1-279
// characters. Fail loudly instead of writing an invalid review.
if (review.length < 1 || review.length > 279 || review.includes("\n")) {
  throw new Error(
    `Review must be a single line of 1-279 characters, got ${review.length}.`,
  );
}

// Make sure the output directory exists, then write the review with no
// trailing newline so the file holds exactly the review line.
mkdirSync(dirname(outputPath), { recursive: true });
writeFileSync(outputPath, review, "utf8");

console.log(`Wrote ${review.length} characters to ${outputPath}`);
