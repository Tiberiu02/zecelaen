import { getKey, tests } from "../tests/tests";
import fs from "fs";
import path from "path";
import { PDFDocument, PDFName, PDFString, rgb } from "pdf-lib";
import fontkit from "@pdf-lib/fontkit";

const sourceDir = "./subiecte/{id}/pdf";
const destinationDir = "./public/pdf";
const customFont = "FreeSansOblique.ttf";

const fontBytes = fs.readFileSync(path.join(__dirname, customFont));

async function annotatePdf(
  source: string,
  destination: string,
  title: string,
  text: string
) {
  const pdfBytes = await fs.promises.readFile(source);

  // Load a PDFDocument from the existing PDF bytes
  const pdfDoc = await PDFDocument.load(pdfBytes);

  // Register the `fontBytes` array as a font
  pdfDoc.registerFontkit(fontkit);
  const customFont = await pdfDoc.embedFont(fontBytes);

  pdfDoc.setTitle(title);

  // Get the first page of the document
  const pages = pdfDoc.getPages();

  for (const page of pages) {
    // Get the width and height of the first page
    const { width, height } = page.getSize();

    // Calculate text position and size
    const uri = "https://zecelaen.ro";
    const textSize = height * 0.012;
    const textWidth = customFont.widthOfTextAtSize(text, textSize);
    const textHeight = customFont.heightAtSize(textSize);
    const textX = width - textWidth - textHeight;
    const textY = textHeight;

    // Draw a string of text diagonally across the first page
    page.drawText(text, {
      x: textX,
      y: textY,
      size: textSize,
      font: customFont,
      color: rgb(0, 0, 0),
    });

    // Add a link annotation to the PDF
    const link = page.doc.context.register(
      page.doc.context.obj({
        Type: "Annot",
        Subtype: "Link",
        Rect: [
          textX,
          textY - textHeight * 0.25,
          textX + textWidth,
          textY + textHeight,
        ],
        Border: [0, 0, 0],
        C: [0, 0, 1],
        A: {
          Type: "Action",
          S: "URI",
          URI: PDFString.of(uri),
        },
      })
    );
    page.node.set(PDFName.of("Annots"), pdfDoc.context.obj([link]));
  }

  // Serialize the PDFDocument to bytes (a Uint8Array) and write it to a file
  const newPdfBytes = await pdfDoc.save();
  await fs.promises.writeFile(destination, newPdfBytes);

  console.log(`PDF file written to: ${destination}`);
}

tests.forEach((test) => {
  const name = getKey(test.fullName);
  const id = test.id;

  const testDir = sourceDir.replace("{id}", id);
  const pathSubiect = path.join(testDir, "subiect.pdf");
  const pathBarem = path.join(testDir, "barem.pdf");

  const destDir = path.join(destinationDir, id);
  const destSubiect = path.join(destDir, `${name}.pdf`);
  const destBarem = path.join(destDir, `${name}-barem.pdf`);

  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }

  annotatePdf(
    pathSubiect,
    destSubiect,
    test.fullName,
    "Subiect descărcat de pe ZeceLaEN.ro"
  );
  annotatePdf(
    pathBarem,
    destBarem,
    "Barem " + test.fullName,
    "Barem descărcat de pe ZeceLaEN.ro"
  );
});
