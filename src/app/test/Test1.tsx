import { Exercise } from "./Exercise";

export function Test1() {
  return (
    <>
      <Exercise
        index={1}
        description="Rezultatul calculului $15 - (3 + 4)$ este egal cu:"
        points={5}
        options={["3", "8", "16", "22"]}
        correct={1}
      />

      <Exercise
        index={2}
        description="Știind că $\frac{x}{y} = \frac{5}{2},$ $y \not = 0,$ rezultatul calculului $2x - 5y + 10$ este egal cu:"
        points={5}
        options={["0", "7", "10", "17"]}
        correct={2}
      />

      <Exercise
        index={3}
        description="Produsul dintre numărul $3$ și opusul numărului $3$ este egal cu:"
        points={5}
        options={["-9", "-6", "0", "1"]}
        correct={0}
      />

      <Exercise
        index={4}
        description="Numărul care reprezintă $\frac{2}{3}$ din $12$ este egal cu:"
        points={5}
        options={["2", "4", "8", "12"]}
        correct={2}
      />
    </>
  );
}
