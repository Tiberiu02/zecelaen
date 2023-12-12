"use client";

import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useState } from "react";
import { FaAngleDown, FaAngleUp, FaStar, FaVideo } from "react-icons/fa6";
import { BlockMath } from "react-katex";
import { twMerge } from "tailwind-merge";

function parseKatex(str: string) {
  return (
    <>
      <div className="text-3xl text-[1.35rem] line font-normal font-katex overflow-x-auto overflow-y-hidden">
        {str.split("$").map((s, ix) => {
          if (ix % 2 == 1) {
            return (
              <span className="whitespace-nowrap" key={`${ix}`}>
                <span
                  className={twMerge(
                    "inline-block -my-3 text-lg",
                    str.includes("array") && "px-[1px]", // Padding to show table borders
                    str.includes("sqrt") && "pr-[2px]" // Padding because sqrt has -2 margin right
                  )}
                >
                  <BlockMath
                    math={`\\def,{{\\char\`,}} {${s.replaceAll(
                      ", ",
                      ",\\text{ }"
                    )}}`}
                  />
                </span>
              </span>
            );
          } else {
            const lines = s.split("\n");
            return (
              <div
                key={ix}
                className="text-3xl text-[1.35rem] font-normal font-katex inline"
              >
                {lines.map((line, i) => {
                  line = line.replaceAll(/-([\d ])/gi, "−$1");
                  if (i == 0) {
                    return <span key={i}>{line}</span>;
                  } else {
                    return (
                      <span key={i}>
                        <br />
                        {line}
                      </span>
                    );
                  }
                })}
              </div>
            );
          }
        })}
      </div>
    </>
  );
}

export function Exercise({
  description,
  points,
  index,
  options,
  correct,
  image,
  imageSize,
  subExercises,
}: {
  description: string;
  points?: number;
  index: number;
  options?: string[];
  correct?: number;
  image?: string;
  imageSize?: number;
  subExercises?: {
    description: string;
    points?: number;
    solution?: {
      text: string;
      points: number;
    }[];
  }[];
}) {
  const [chosen, setChosen] = useState<number | null>(null);
  const [score, setScore] = useState<number | null>(null);
  const [showSolution, setShowSolution] = useState(false);
  const [cardRef] = useAutoAnimate();

  const className = {
    options: [
      "bg-[#35A9FF] border-[#84caff]",
      "bg-[#B265FF] border-[#d3a7ff]",
      "bg-[#FF63E6] border-[#ffaaf1]",
      "bg-[#FF8C21] border-[#ffc691]",
    ],
    score: [
      "text-[#FF6767]",
      "text-[#FF823C]",
      "text-[#FF9F2E]",
      "text-[#95D92C]",
      "text-[#61D338]",
      "text-[#09D305]",
    ],
  };

  return (
    <Card
      className="w-full flex flex-col gap-0 p-2 md:py-5 py-6 px-6"
      cardRef={cardRef}
    >
      <div className="flex justify-between font-bold text-lg gap-4">
        <span className="font-bold">{index}.</span>
        {points && (
          <div className="flex text-yellow-400 gap-1">
            <FaStar className="mt-1" />
            <div className="text-yellow-500">{points}</div>
          </div>
        )}
      </div>
      <h3 className="font-normal text-lg text-left w-full flex flex-col mt-4 gap-4 items-left">
        {parseKatex(description)}
        {image && (
          <img
            src={image}
            className="self-center w-full"
            style={{ maxWidth: `${imageSize || 20}rem` }}
          />
        )}
      </h3>
      {subExercises &&
        subExercises.map((sub, i) => (
          <div key={i}>
            <div
              key={i}
              className="flex items-center justify-between font-bold text-lg mt-4 gap-4"
            >
              <span className="font-medium">
                {"abcde"[i]}
                {"."}
              </span>
              <div className="flex text-yellow-400 gap-1">
                <FaStar className="mt-1" />
                <div className="text-yellow-500">{sub.points}</div>
              </div>
            </div>
            <div className="font-normal center mt-4 text-lg text-left w-full flex flex-col gap-4 items-left">
              {parseKatex(sub.description)}
            </div>
          </div>
        ))}
      {options && (
        <div
          className={twMerge(
            "grid gap-4 px-0 mt-6 -mx-2",
            options.length == 4
              ? "grid-rows-4 sm:grid-cols-2 sm:grid-rows-2 md:grid-cols-4 md:grid-rows-1"
              : options.length == 2
              ? "grid-rows-2 sm:grid-cols-2 sm:grid-rows-1"
              : (() => {
                  throw new Error(`invalid option count ${options.length}`);
                })()
          )}
        >
          {options.map((option, i) => (
            <Button
              className={twMerge(
                "flex w-full gap-4 items-center text-xl py-1 pl-2 pr-4",
                chosen == i &&
                  (correct == i
                    ? "bg-[#d6ffd5] border-[#8ce98b] shadow-[#8ce98b]"
                    : "bg-[#ffe6e6] border-[#fcc3c3] shadow-[#fcc3c3]")
              )}
              active={chosen == null}
              onClick={chosen == null ? () => setChosen(i) : undefined}
              key={i}
            >
              <div
                className={twMerge(
                  "h-7 w-7 border-2 duration-150 text-base flex items-center justify-center rounded-full text-white font-medium",
                  chosen == null
                    ? className.options[i]
                    : i == correct
                    ? "border-[#98eb96] bg-[#5dd35b]"
                    : "border-[#ffadad] bg-[#FF7676]"
                )}
              >
                {"ABCD"[i]}
              </div>
              <div className="mx-auto">{parseKatex(`${option}`)}</div>
            </Button>
          ))}
        </div>
      )}
      {showSolution && (
        <div className="flex flex-col gap-4 mt-8">
          <div className="font-semibold text-lg">Rezolvare</div>

          <div className="bg-blue-500 text-white aspect-video w-full rounded-2xl flex items-center justify-center gap-4 flex-col">
            <FaVideo className="text-3xl" />
            <div>video will be here</div>
          </div>
        </div>
      )}
      {showSolution && subExercises && subExercises.some((e) => e.solution) && (
        <div className="flex flex-col gap-0 mt-8 w-full">
          <div className="font-semibold text-lg">Barem</div>

          {subExercises.map(
            (sub, i) =>
              sub.solution && (
                <div key={i}>
                  <div className="font-medium text-lg mt-4">
                    {"abcde"[i]}
                    {"."}
                  </div>
                  <div className="font-normal center text-lg text-left w-full flex flex-col gap-4 mt-4 items-left">
                    {sub.solution.map((s, i) => (
                      <div
                        key={i}
                        className="flex w-full flex-col sm:flex-row gap-4 justify-between items-center"
                      >
                        <div className="font-normal text-lg w-full">
                          {parseKatex(s.text)}
                        </div>
                        <div className="flex w-fit text-yellow-400 gap-1 shrink-0 ml-auto">
                          <FaStar className="mt-1" />
                          <div className="text-yellow-500 font-bold">
                            {s.points}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )
          )}
        </div>
      )}
      {score != null && (
        <div
          className={twMerge(
            "flex flex-row items-center justify-end gap-1 mt-8",
            className.score[score]
          )}
        >
          <FaStar className="text-xl mt-[-2px]" />
          <div className="font-bold text-lg">{score}</div>
        </div>
      )}
      {showSolution && !options && score == null && (
        <div className="flex flex-col gap-4 mt-8">
          <div className="font-bold text-lg">Estimare punctaj</div>
          <div className="font-normal text-lg">
            Câte puncte crezi că ai fi obținut, conform baremului?
          </div>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4 -mx-1">
            {[0, 1, 2, 3, 4, 5].map((p, i) => (
              <Button
                className={twMerge(
                  "flex justify-center w-full gap-2 group items-center text-xl py-2",
                  className.score[i]
                )}
                onClick={() => setScore(p)}
                key={i}
              >
                <FaStar />
                <div className="font-bold">{p}</div>
              </Button>
            ))}
          </div>
        </div>
      )}
      {(chosen != null || !options) && (
        <button
          className="flex w-fit self-center duration-150 justify-center gap-2 text-lg mt-6 items-center font-semibold text-black/40 hover:text-black/50 whitespace-nowrap"
          onClick={() => setShowSolution(!showSolution)}
        >
          {showSolution ? (
            <>
              <FaAngleUp className="shrink-0 mt-0" />
              Ascunde rezolvarea
            </>
          ) : (
            <>
              <FaAngleDown className="shrink-0 mt-1" />
              Arată rezolvarea
            </>
          )}
        </button>
      )}
    </Card>
  );
}
