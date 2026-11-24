// "The Database, Twice" — Break Production, Own It (make.fun).
// One line, 150 characters: the whole entry.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "I deleted the production database. Not a table. The database. The backups were in the same place. I have learned nothing, but I have learned it twice.";

// Gate: UTF-8 text, 1–200 characters, never only whitespace.
if (line.length < 1 || line.length > 200 || !line.trim()) {
  throw new Error("entry line must be 1–200 characters");
}

// The output path is overridable for local verification only; the
// judge run uses the default /output/entry.txt.
const outPath = process.env.ENTRY_OUTPUT ?? "/output/entry.txt";
const outDir = outPath.slice(0, outPath.lastIndexOf("/")) || "/";

mkdirSync(outDir, { recursive: true });
writeFileSync(outPath, line, "utf8");
console.log(line);
