import { Exercise } from "./Exercise";

export function Test1() {
  return (
    <>
      <h1 className="text-base w-fit self-center font-semibold text-left text-black/40 px-2 py-1 bg-white rounded-md border-[1px] border-gray-200 shadow">
        Subiectul I
      </h1>

      <Exercise
        index={1}
        description="Rezultatul calculului 15 - (3 + 4) este egal cu:"
        points={5}
        options={["3", "8", "16", "22"]}
        correct={1}
      />

      <Exercise
        index={2}
        description="Știind că $\frac{x}{y} = \frac{5}{2}$, $y \not = 0$, rezultatul calculului $2x - 5y + 10$ este egal cu:"
        points={5}
        options={["0", "7", "10", "17"]}
        correct={2}
      />

      <Exercise
        index={3}
        description="Produsul dintre numărul 3 și opusul numărului 3 este egal cu:"
        points={5}
        options={["-9", "-6", "0", "1"]}
        correct={0}
      />

      <Exercise
        index={4}
        description="Numărul care reprezintă $\frac{2}{3}$ din 12 este egal cu:"
        points={5}
        options={["2", "4", "8", "12"]}
        correct={2}
      />

      <Exercise
        index={5}
        description="Profesorul  întreabă  care  este  cel  mai  mare  număr  întreg  din  intervalul  (2, -5). Răspunsurile  date  de  elevii 
        Andreea, Marina, David și Vlad sunt prezentate în tabelul de mai jos:<br/>
        $\begin{array}{|c|c|c|c|}
        \hline
        \text{Andreea} & \text{Marina} & \text{David} & \text{Vlad} \\
        \hline
        -3 & -2 & 5 & 4 \\
        \hline
        \end{array}$<br/>
        Dintre cei patru elevi, cel care a răspuns corect la întrebarea profesorului este:"
        points={5}
        options={["Andreea", "Marina", "David", "Vlad"]}
        correct={3}
      />

      <Exercise
        index={6}
        description="În diagrama de mai jos sunt prezentate rezultatele obținute la un test la matematică, de către elevii unei clase a VIII-a. Afirmația: „Conform informațiilor din diagramă, la acest test, nota 7 a fost obținută de 10 elevi.” este:"
        points={5}
        options={["adevărată", "falsă"]}
        correct={1}
        image="/tests/1/img/1-6.png"
        imageSize={40}
      />

      <h1 className="text-base w-fit mt-16 self-center font-semibold text-left text-black/40 px-2 py-1 bg-white rounded-md border-[1px] border-gray-200 shadow">
        Subiectul II
      </h1>

      <Exercise
        index={1}
        description="În figura alăturată sunt reprezentate punctele coliniare $A, B, C$ și $D$, în această ordine, astfel încât $AB = BC = CD$, iar lungimea segmentului $AC$ este egală cu $10$ cm. Lungimea segmentului $AD$ este egală cu:"
        points={5}
        options={["5 cm", "10 cm", "15 cm", "20 cm"]}
        correct={2}
        image="/tests/1/img/2-1.jpg"
      />

      <Exercise
        index={2}
        description="În figura alăturată sunt reprezentate punctele coliniare $A, O$ și $B$, în această ordine. Punctele $M$ și $N$ sunt de aceeași parte a dreptei $AB$, astfel încât măsura unghiului $MOA$ este egală cu $30^\circ$ și dreapta $ON$ este perpendiculară pe dreapta $AB.$ Măsura unghiului $MON$ este egală cu:"
        points={5}
        options={["$30^\\circ$", "$45^\\circ$", "$60^\\circ$", "$90^\\circ$"]}
        correct={2}
        image="/tests/1/img/2-2.png"
      />

      <Exercise
        index={3}
        description="În figura alăturată este reprezentat triunghiul $ABC$ cu aria de 15 cm$^2$. Punctul $M$ se află pe segmentul $BC$, astfel încât $BC = 3 \cdot BM.$ Aria triunghiului $AMC$ este egală cu:"
        points={5}
        options={["5 cm$^2$", "7.5 cm$^2$", "10 cm$^2$", "12.5 cm$^2$"]}
        correct={2}
        image="/tests/1/img/2-3.jpg"
      />

      <Exercise
        index={4}
        description="În figura alăturată este reprezentat pătratul $ABCD$ cu perimetrul egal cu 40 cm. Lungimea segmentului $AC$ este egală cu:"
        points={5}
        options={["10 cm", "$10\\sqrt{2}$ cm", "$10\\sqrt{3}$ cm", "20 cm"]}
        correct={1}
        image="/tests/1/img/2-4.jpg"
      />

      <Exercise
        index={5}
        description="În figura alăturată, punctele distincte $A, B, C, D, E, F, G$ și $H$ sunt reprezentate pe cercul de centru $O$, astfel încât arcele mici $AB, BC, CD, DE, EF, FG, GH$ și $HA$ sunt congruente. Măsura arcului mic $BC$ este egală cu:"
        points={5}
        options={["$30^\\circ$", "$45^\\circ$", "$60^\\circ$", "$75^\\circ$"]}
        correct={1}
        image="/tests/1/img/2-5.png"
      />

      <Exercise
        index={6}
        description="În figura alăturată este reprezentat cubul $ABCD A'B'C'D'$ cu $AB=5$ cm. Lungimea segmentului $B'D'$ este egală cu:"
        points={5}
        options={["5 cm", "$5\\sqrt{2}$ cm", "$5\\sqrt{3}$ cm", "10 cm"]}
        correct={2}
        image="/tests/1/img/2-6.png"
      />

      <h1 className="text-base w-fit mt-16 self-center font-semibold text-left text-black/40 px-2 py-1 bg-white rounded-md border-[1px] border-gray-200 shadow">
        Subiectul III
      </h1>

      <Exercise
        index={1}
        description="Maria are 14 ani și tatăl ei are 40 de ani."
        points={5}
        subExercises={[
          {
            description:
              "Este posibil ca, peste 2 ani, suma dintre vârsta Mariei și vârsta tatălui ei să fie egală cu 60 de ani? Justifică răspunsul dat.",
            points: 2,
          },
          {
            description:
              "Determină peste câți ani vârsta Mariei va fi jumătate din vârsta tatălui ei.",
            points: 3,
          },
        ]}
      />

      <Exercise
        index={2}
        description="Se consideră expresia $E(x) = \left( \frac{1}{(x+1)(x+2)} + \frac{1}{x+2} \right) : \frac{x+3}{5(x+1)}$, unde $x$ este număr real, $x \neq -3$, $x \neq -2$ și $x \neq -1$."
        points={5}
        subExercises={[
          {
            description:
              "Arată că $\\frac{1}{(x+1)(x+2)} + \\frac{1}{x+2} = \\frac{1}{x+1}$, pentru orice număr real $x$, $x \\neq -2$ și $x \\neq -1$.",
            points: 2,
          },
          {
            description:
              "Determină suma soluțiilor ecuației $E(x) = \\frac{x-3}{8}$, unde $x$ este număr real, $x \\neq -3$, $x \\neq -2$ și $x \\neq -1$.",
            points: 3,
          },
        ]}
      />

      <Exercise
        index={3}
        description="Se consideră funcția $f : \mathbb{R} \rightarrow \mathbb{R}, f(x) = -x + 5$."
        points={5}
        image="/tests/1/img/3-3.png"
        subExercises={[
          {
            description: "Arată că $f(4) + f(6) = 0$.",
            points: 2,
          },
          {
            description:
              "Reprezentarea geometrică a graficului funcției $f$ intersectează axele $Ox$ și $Oy$ ale sistemului de axe ortogonale $xOy$ în punctele $A$, respectiv $B$. Calculează distanța de la punctul $P(0, -3)$ la dreapta $AB$.",
            points: 3,
          },
        ]}
      />

      <Exercise
        index={4}
        description="În figura alăturată este reprezentat trapezul dreptunghic $ABCD$ cu $AB \parallel CD$ și $BC=10$ cm. Semidreapta $BD$ este bisectoarea unghiului $ABC$ și măsura unghiului $ABD$ este egală cu $15^\circ$."
        points={5}
        image="/tests/1/img/3-4.png"
        subExercises={[
          {
            description: "Determină măsura unghiului $BCD$.",
            points: 2,
          },
          {
            description: "Arată că $AB - AD < 14$ cm.",
            points: 3,
          },
        ]}
      />

      <Exercise
        index={5}
        description="În figura alăturată este reprezentat dreptunghiul $ABCD$ cu $AB = 9\sqrt{10}$ cm și $AC = 30$ cm. Dreptele $AC$ și $BD$ se intersectează în punctul $O$, iar punctul $M$ este mijlocul segmentului $CD$. Dreptele $BC$ și $AM$ se intersectează în punctul $E$, iar dreptele $OE$ și $CD$ se intersectează în punctul $P$."
        points={5}
        image="/tests/1/img/3-5.jpg"
        subExercises={[
          {
            description:
              "Arată că aria dreptunghiului $ABCD$ este egală cu $270$ cm$^2$.",
            points: 2,
          },
          {
            description:
              "Arată că lungimea segmentului $SP$ este egală cu $10$ cm, unde $S$ este punctul de intersecție a dreptelor $AM$ și $BD$.",
            points: 3,
          },
        ]}
      />

      <Exercise
        index={6}
        description="În figura alăturată este reprezentat cubul $ABCD A'B'C'D'$ cu $AB=10$ cm."
        points={5}
        image="/tests/1/img/3-6.png"
        subExercises={[
          {
            description:
              "Arată că măsura unghiului dreptelor $AB'$ și $BC'$ este egală cu $60^\\circ$.",
            points: 2,
          },
          {
            description:
              "Calculează distanța de la punctul $C$ la planul $(BDC')$.",
            points: 3,
          },
        ]}
      />
    </>
  );
}
