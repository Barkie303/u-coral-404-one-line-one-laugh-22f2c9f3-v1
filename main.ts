// One Line, One Laugh — a compliment from the bank that bills you for hearing it.
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

// The punchline lands because the praise and the punishment arrive in the same sentence.
const line = "My bank congratulated me on saving money, then charged me a fee for the celebration.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
