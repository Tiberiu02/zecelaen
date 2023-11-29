import fs from "fs";

interface SubQuestion {
  label: string;
  points: number;
  text: string;
  solution: {
    text: string;
    points: number;
  }[];
}

interface Question {
  number: number;
  points: number;
  text: string;
  options?: string[];
  correctOption?: number;
  image?: string;
  imageSize?: number;
  subQuestions: SubQuestion[];
}

interface Section {
  title: string;
  questions: Question[];
}

interface Exam {
  sections: Section[];
}

export function parseSubiect(subiectMd: string, baremMd: string): Exam {
  // Regular expressions for different parts of the file
  const sectionHeaderRegex = /^# (.+)$/;
  const questionHeaderRegex = /^## (\d+)\. (\d+)p$/;
  const subQuestionRegex = /^### ([a-z])\. (\d+)p$/;
  const optionRegex = /^[a-d]\. (.+)$/;
  const imageRegex = /^!\[(.+)\]\((.+)\)(.*)$/;

  const lines = subiectMd.split("\n");
  const result: Exam = {
    sections: [],
  };

  let currentSection: Section | null = null;
  let currentQuestion: Question | null = null;
  let currentSubQuestion: SubQuestion | null = null;

  lines.forEach((line) => {
    if (sectionHeaderRegex.test(line)) {
      const sectionTitle = line.match(sectionHeaderRegex)?.[1] || "";
      currentSection = { title: sectionTitle, questions: [] };
      result.sections.push(currentSection);
    } else if (questionHeaderRegex.test(line)) {
      const matches = line.match(questionHeaderRegex);
      const number = parseInt(matches?.[1] || "");
      const points = parseInt(matches?.[2] || "");
      currentQuestion = {
        number,
        points,
        text: "",
        subQuestions: [],
      };
      currentSubQuestion = null;
      currentSection?.questions.push(currentQuestion);
    } else if (subQuestionRegex.test(line)) {
      const matches = line.match(subQuestionRegex);
      const label = matches?.[1] || "";
      const points = parseInt(matches?.[2] || "");
      currentSubQuestion = { label, points, text: "", solution: [] };
      currentQuestion?.subQuestions.push(currentSubQuestion);
    } else if (optionRegex.test(line)) {
      const optionText = line.match(optionRegex)?.[1] || "";
      if (currentQuestion) {
        if (!currentQuestion.options) {
          currentQuestion.options = [];
        }
        currentQuestion.options?.push(optionText);
      }
    } else if (imageRegex.test(line)) {
      const imageSrc = line.match(imageRegex)?.[2] || "";
      const imageParams = line.match(imageRegex)?.[3].trim() || "";
      if (currentQuestion) {
        currentQuestion.image = `/tests/1/${imageSrc}`;

        const imageSize = parseInt(imageParams.match(/size=(\d+)/)?.[1] || "");

        if (imageSize) {
          currentQuestion.imageSize = imageSize;
        }
      }
    } else {
      if (line.trim() !== "") {
        if (currentSubQuestion) {
          if (currentSubQuestion.text != "") {
            currentSubQuestion.text += "\n";
          }
          currentSubQuestion.text += line.trim();
        } else if (currentQuestion) {
          if (currentQuestion.text != "") {
            currentQuestion.text += "\n";
          }
          currentQuestion.text += line.trim() + "\n";
        }
      }
    }
  });

  const solutionLines = baremMd.split("\n");

  const choiceRegex = /^(\d+)\. ([a-d])$/;
  const solutionRegex = /^\((\d+)p\) (.+)$/;
  const solutionQuestionHeaderRegex = /^## (\d+)\.$/;
  const subQuestionHeaderRegex = /^### ([a-z])\.$/;

  currentSection = null;
  currentQuestion = null;
  currentSubQuestion = null;

  // fs.writeFileSync("barem.json", JSON.stringify(result, null, 2));

  solutionLines.forEach((line, ix) => {
    if (sectionHeaderRegex.test(line)) {
      const sectionTitle = line.match(sectionHeaderRegex)?.[1] || "";
      currentSection =
        result.sections.find((section) => section.title === sectionTitle) ||
        null;

      if (!currentSection) {
        throw new Error(`Section '${sectionTitle}' not found`);
      }
    } else if (choiceRegex.test(line)) {
      const matches = line.match(choiceRegex);
      const number = parseInt(matches?.[1] || "");
      const choice = matches?.[2] || "";
      const question = currentSection?.questions.find(
        (question) => question.number === number
      );
      if (question) {
        question.correctOption = choice.charCodeAt(0) - "a".charCodeAt(0);
      } else {
        throw new Error(
          `Question '${number}' not found in section '${currentSection?.title}'`
        );
      }
    } else if (solutionQuestionHeaderRegex.test(line)) {
      const matches = line.match(solutionQuestionHeaderRegex);
      const number = parseInt(matches?.[1] || "");
      const points = parseInt(matches?.[2] || "");
      currentQuestion =
        currentSection?.questions.find(
          (question) => question.number === number
        ) || null;
      currentSubQuestion = null;

      if (!currentQuestion) {
        throw new Error(`Question '${number}' not found, line ${ix} in barem`);
      }
    } else if (subQuestionHeaderRegex.test(line)) {
      const matches = line.match(subQuestionHeaderRegex);
      const label = matches?.[1] || "";

      if (!currentQuestion) {
        throw new Error("No current question");
      }

      currentSubQuestion =
        currentQuestion?.subQuestions.find(
          (subQuestion) => subQuestion.label === label
        ) || null;

      if (!currentSubQuestion) {
        throw new Error(`Subquestion '${label}' not found`);
      }
    } else if (solutionRegex.test(line)) {
      const matches = line.match(solutionRegex);
      const points = parseInt(matches?.[1] || "");
      const text = matches?.[2] || "";

      if (currentSubQuestion) {
        currentSubQuestion.solution?.push({ points, text });
      }
    } else {
      if (line.trim() !== "") {
        // console.log("extra line", line);
        if (currentSubQuestion) {
          const lastSolutionItem = currentSubQuestion.solution.at(-1);
          if (lastSolutionItem) {
            lastSolutionItem.text += "\n" + line.trim();
          }
        } else {
          throw new Error("No current subquestion");
        }
      }
    }
  });

  return result;
}
