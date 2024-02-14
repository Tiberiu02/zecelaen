import { WritableAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";

type ExamData = {
  correct: number;
  incorrect: number;
};

const exerciseAtoms = {} as Record<
  string,
  WritableAtom<ExamData, [ExamData], void>
>;

export function getExamAtom(examId: string) {
  const key = `examData-${examId}`;
  if (!exerciseAtoms[key]) {
    exerciseAtoms[key] = atomWithStorage(key, {
      correct: 0,
      incorrect: 0,
    } as ExamData);
  }
  return exerciseAtoms[key];
}
