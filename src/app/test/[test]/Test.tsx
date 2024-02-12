import { getTest, testsById } from "@/tests/tests";
import { Exercise } from "./Exercise";

export async function Test({ testId }: { testId: string }) {
  const examMeta = testsById[testId];
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
        <div key={sectionIndex} className="flex flex-col items-center md:gap-2">
          <div className="max-md:border-b-2 border-gray-200 w-full flex flex-col items-center max-md:py-2">
            {/* <h2 className="text-base md:w-fit self-center text-center font-semibold bg-white md:rounded-full text-black/40 md:mt-8 md:my-2 py-2 px-4 md:border-[1px] border-gray-200 md:shadow max-md:border-b-2 max-md:w-full max-md:bg-gray-50 max-md:text-black max-md:text-xl"> */}
            <h2 className="text-base w-fit self-center text-center font-medium bg-white rounded-full text-neutral-700 mt-8 my-2 py-2 px-5 border-[1px] border-gray-200 shadow">
              {section.title}
            </h2>
          </div>
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
              videoUrl={examMeta?.videos?.[sectionIndex]?.[questionIndex]}
            />
          ))}
        </div>
      ))}
    </>
  );
}
