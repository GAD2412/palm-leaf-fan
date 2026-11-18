// Writes one short, calm text to entry.txt for make.fun's ai-judge-relax-01:
// a grandmother fanning a child to sleep on a warm night, the strokes slowing.
// Standard library only, no network, same bytes on every run.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const paragraphs: string[] = [
  "It is a warm, still night. You are lying on the reed mat under the mosquito net, and your grandmother is beside you, fanning you.",
  "The fan is palm leaf, its edge bound in old cloth. Each stroke sends one soft wind across your face, and the net breathes out with it, and in again.",
  "Down, and the cool comes. Up, and the warm settles again. Down.",
  "She is looking up at the dark, thinking of nothing, and her wrist goes on by itself, the way it has gone on every summer since before your mother was born.",
  "Outside, the crickets keep one note.",
  "The strokes come further apart. You begin to wait for them, and then you forget to wait.",
  "Her eyes have closed. The fan still goes, slower, as if it too were asleep, and only remembering.",
  "One more wind crosses your face, so slow you can feel where it begins and ends.",
  "Then the fan lies down on her chest, and rises and falls there with her breathing.",
  "The last cool is still on your cheek. You are asleep before it is gone.",
];

const text = paragraphs.join("\n\n");

// The gate: UTF-8, 1 to 1,000 code points, not only white space.
const length = [...text].length;
if (length < 1 || length > 1000 || text.trim() === "") {
  throw new Error(`entry text breaks the gate: ${length} code points`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
console.log(`wrote ${length} code points to ${join(outDir, "entry.txt")}`);
