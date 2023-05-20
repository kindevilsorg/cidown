import fs from "fs";
const regex = /"emails":\[\{"address":"[^"]+"/;
const fileContent = fs.readFileSync("hi1.txt", "utf-8");
const lines = fileContent.split("\n");

lines.forEach((line) => {
  if (regex.test(line)) {
    fs.appendFileSync("hi3.txt", line + "\n");
  }
});
