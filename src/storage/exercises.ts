import { WritableAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";

type ExerciseData = number | null;

const exerciseAtoms = {} as Record<
  string,
  WritableAtom<ExerciseData, [ExerciseData], void>
>;

export function getExerciseAtom(
  examId: string,
  sectionIndex: number,
  exerciseIndex: number
) {
  const key = `exerciseChoice-${examId}-${sectionIndex}-${exerciseIndex}`;
  if (!exerciseAtoms[key]) {
    exerciseAtoms[key] = atomWithStorage(key, null as ExerciseData);
  }
  return exerciseAtoms[key];
}
