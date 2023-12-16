import { getKey, tests } from "../tests/tests";
import fs from "fs";
import path from "path";

const sourceDir = "./subiecte";
const destinationDir = "./public/pdf";

// Function to copy file
function copyFile(source: string, destination: string) {
  fs.copyFileSync(source, destination);
  console.log(`Copied ${source} to ${destination}`);
}

tests.forEach((test) => {
  const name = getKey(test.fullName);
  const id = test.id;

  const testDir = path.join(sourceDir, id, "pdf");
  const pathSubiect = path.join(testDir, "subiect.pdf");
  const pathBarem = path.join(testDir, "barem.pdf");

  const destDir = path.join(destinationDir, id);
  const destSubiect = path.join(destDir, `subiect-${name}.pdf`);
  const destBarem = path.join(destDir, `barem-${name}.pdf`);

  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }

  copyFile(pathSubiect, destSubiect);
  copyFile(pathBarem, destBarem);
});
