import { getTest, testsById } from "@/tests/tests";
import { Exercise } from "./Exercise";

export async function Test({ testId }: { testId: string }) {
  const examMeta = testsById[testId];
  const exam = getTest(testId);

  console.log(testId, examMeta);

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
        <div key={sectionIndex} className="flex flex-col items-center gap-2">
          <h2 className="text-base w-fit md:w-fit self-center text-center font-semibold bg-white rounded-full md:text-left text-black/40 mt-8 mb-2 py-2 px-4 border-[1px] border-gray-200 shadow">
            {section.title}
          </h2>
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
