import fs from "fs/promises";

async function processInputFile() {
  try {
    const inputData = await fs.readFile("hi3.txt", "utf8");
    const lines = inputData.trim().split("\n");

    const outputData = lines
      .map((line) => {
        if (!line.trim()) {
          return "";
        }

        const jsonData = JSON.parse(line);

        const firstName = jsonData.first_name;
        const lastName = jsonData.last_name;
        const email = jsonData.emails[0].address || "N/A";
        const emailType = jsonData.emails[0].type || "N/A";
        const workemail = jsonData.work_email || "N/A";
        const phoneNumber =
          jsonData.phone_numbers.length > 0 ? jsonData.phone_numbers[0] : "N/A";
        const companyName = jsonData.job_company_name;
        const companyAddress = jsonData.job_company_location_street_address;
        const inferredSalary = jsonData.inferred_salary;
        const linkedinUrl = jsonData.linkedin_url;

        return `${firstName} | ${lastName} | ${linkedinUrl} | ${email} | ${emailType} | ${workemail} | ${phoneNumber} | ${companyName} | ${companyAddress} | ${inferredSalary}`;
      })
      .join("\n");

    await fs.appendFile(`zedData.txt`, outputData, "utf8");
    console.log(`saved! zedData`);
  } catch (err) {
    console.error("An error occurred:", err);
  }
}

processInputFile();

async function removeFiles() {
  try {
    const files = await fs.readdir(".");
    const filesToRemove = files.filter(
      (file) => file.startsWith("bye") || file.startsWith("hi")
    );

    for (const file of filesToRemove) {
      await fs.unlink(file);
      console.log(`Removed ${file}`);
    }
  } catch (err) {
    console.error("An error occurred:", err);
  }
}

removeFiles();
