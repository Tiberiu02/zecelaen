import { getTest } from "@/tests/tests";
import { Exercise } from "./Exercise";

export async function Test({ testId }: { testId: string }) {
  const exam = getTest(testId);

  for await (const section of exam.sections) {
    for await (const exercise of section.questions) {
      if (exercise.image) {
        const imgName = exercise.image.split("/").at(-1);

        exercise.image = (
          await import(`../../../../subiecte/${testId}/img/${imgName}`)
        ).default.src;
      }
    }
  }

  return (
    <>
      {exam.sections.map((section, sectionIndex) => (
        <div key={sectionIndex} className="flex flex-col items-center gap-8">
          <h1 className="text-base w-fit mt-16 self-center font-semibold text-left text-black/40 px-2 py-1 bg-white rounded-md border-[1px] border-gray-200 shadow">
            {section.title}
          </h1>
          {section.questions.map(async (question, questionIndex) => (
            <Exercise
              key={questionIndex}
              index={question.number}
              description={question.text}
              points={question.points}
              options={question.options}
              correct={question.correctOption}
              subExercises={question.subQuestions.map(
                (subQuestion, subQuestionIndex) => ({
                  description: subQuestion.text,
                  points: subQuestion.points,
                  solution: subQuestion.solution,
                })
              )}
              image={question.image}
              imageSize={question.imageSize}
            />
          ))}
        </div>
      ))}
    </>
  );
}
