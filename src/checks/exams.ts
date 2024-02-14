import { getTest, tests } from "../tests/tests";
import fs from "fs";

for (const test of tests) {
  const exam = getTest(test.id);

  let examPoints = 0;
  const imageFiles = fs.readdirSync(`subiecte/${test.id}/img`);
  exam.sections.forEach((section, sectionIx) => {
    section.questions.forEach((question, questionIx) => {
      // Check image files
      const imageFileExists = imageFiles.some((i) =>
        i.startsWith(`${sectionIx + 1}-${questionIx + 1}.`)
      );

      if ((question.image != undefined) != imageFileExists) {
        console.log(
          `Image mismatch for exam '${test.id}', question ${sectionIx + 1}.${
            questionIx + 1
          }`
        );
      }

      // Check points
      examPoints += question.points;
      if (question.subQuestions.length > 0) {
        let questionPoints = 0;
        question.subQuestions.forEach((subQuestion) => {
          questionPoints += subQuestion.points;

          const solutionPoints = subQuestion.solution.reduce(
            (acc, solution) => acc + solution.points,
            0
          );

          if (solutionPoints != subQuestion.points) {
            console.log(
              `Points mismatch at solution for exam '${test.id}', question ${
                sectionIx + 1
              }.${questionIx + 1}, subquestion ${
                subQuestion.label
              } (solution points = ${solutionPoints}, subquestion points = ${
                subQuestion.points
              })`
            );
          }
        });

        if (questionPoints != question.points) {
          console.log(
            `Points mismatch for exam '${test.id}', question ${sectionIx + 1}.${
              questionIx + 1
            }`
          );
        }
      }
    });
  });

  if (examPoints != 90) {
    console.log(
      `Points mismatch for exam '${test.id}', total points = ${examPoints}`
    );
  }
}
