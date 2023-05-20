import fs from "fs";

const regex = /"job_title":"social media manager"/g;

for (let index = 1; index <= 12; index++) {
  const fileName = `bye${index}.txt`;
  const fileContent = fs.readFileSync(fileName, "utf-8");
  const lines = fileContent.split("\n");

  lines.forEach((line) => {
    if (regex.test(line)) {
      fs.appendFileSync("hi1.txt", line + "\n");
    }
  });
}
