import process from "process";

import { add } from "@/index.ts";

function main(args: string[]) {
  args.forEach((arg, i) => {
    console.log(`Arg [${i.toString()}]: ${arg}`);
  });

  if (args.length < 3) {
    console.error("Usage: bin/index.js <num1> <num2>");
    process.exit(1);
  }

  const a = parseInt(args[2]);
  const b = parseInt(args[3]);
  const c = add(a, b);

  console.log(`${a.toString()} + ${b.toString()} = ${c.toString()}`);
  process.exit(0);
}

main(process.argv);
