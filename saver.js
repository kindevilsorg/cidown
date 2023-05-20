import fs from "fs";
import readline from "readline";

async function processLineByLine() {
  const filename = process.argv[2]; // Get the filename from command line arguments
  const fileStream = fs.createReadStream(filename);

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  let lineCount = 0;
  let fileIndex = 1;
  let data = "";

  for await (const line of rl) {
    data += line + "\n";
    lineCount++;
    if (lineCount === 50000) {
      fs.writeFileSync(`bye${fileIndex}.txt`, data);
      data = "";
      lineCount = 0;
      fileIndex++;
    }
  }

  if (lineCount > 0) {
    fs.writeFileSync(`bye${fileIndex}.txt`, data);
  }
}

processLineByLine();
