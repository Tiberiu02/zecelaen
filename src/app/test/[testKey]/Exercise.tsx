"use client";

import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useState } from "react";
import {
  FaAngleDown,
  FaAngleUp,
  FaCaretDown,
  FaCheck,
  FaRegStar,
  FaStar,
  FaVideo,
  FaXmark,
} from "react-icons/fa6";
import { BlockMath } from "react-katex";
import { twMerge } from "tailwind-merge";

function parseKatex(str: string) {
  return (
    <>
      <div className="text-3xl text-[1.35rem] line font-normal font-katex">
        {str.split("$").map((s, ix) => {
          if (ix % 2 == 1) {
            return (
              <span className="whitespace-nowrap" key={`${ix}`}>
                <span className="inline-block -my-3 text-lg">
                  <BlockMath math={s} />
                </span>
              </span>
            );
          } else {
            const lines = s.split("\n");
            return (
              <div
                key={ix}
                className="text-3xl text-[1.35rem] line font-normal font-katex inline"
              >
                {lines.map((line, i) => {
                  line = line.replaceAll(/-([\d ])/gi, "−$1");
                  if (i == 0) {
                    return <span key={i}>{line}</span>;
                  } else {
                    return (
                      <span key={i} className="block">
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
    <div className="text-left text-black justify-center flex flex-col items-center [ttext-wrap:balance]">
      <div
        className="w-[60rem] flex flex-col gap-0 bg-white rounded-2xl border-[1px] border-gray-200 shadow py-4 px-6"
        ref={cardRef}
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
        <div className="font-normal text-lg text-left w-full flex flex-col mt-4 gap-4 items-left">
          {parseKatex(description)}
          {image && (
            <img
              src={image}
              className="self-center"
              style={{ maxWidth: `${imageSize || 20}rem` }}
            />
          )}
        </div>
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
          <div className="flex gap-4 px-0 mt-6 -mx-2">
            {options.map((option, i) => (
              <div
                className={twMerge(
                  "flex w-full gap-4 group items-center text-xl rounded-full border-[2px] duration-150 shadow py-1 pl-2 pr-4",
                  chosen != i
                    ? "bg-white border-gray-200 "
                    : correct == i
                    ? "bg-[#d6ffd5] border-[#8ce98b] shadow-[#8ce98b]"
                    : "bg-[#ffe6e6] border-[#fcc3c3] shadow-[#fcc3c3]",
                  chosen == null &&
                    "hover:bg-gray-100 cursor-pointer hover:shadow-none hover:translate-y-[2px]"
                )}
                onClick={chosen == null ? () => setChosen(i) : undefined}
                key={i}
              >
                {chosen == null ? (
                  <div
                    className={twMerge(
                      "h-7 w-7 border-2 border-red-200 duration-150 text-base flex items-center justify-center rounded-full text-white font-medium",
                      className.options[i]
                    )}
                  >
                    {"ABCD"[i]}
                  </div>
                ) : i == correct ? (
                  <div className="h-7 w-7 text-base flex items-center justify-center rounded-full text-white border-2 border-[#c8ffc6] border-opacity-50 bg-[#5dd35b]">
                    <FaCheck />
                  </div>
                ) : (
                  <div className="h-7 w-7 text-base flex items-center justify-center rounded-full text-white border-2 border-white border-opacity-50 bg-[#FF7676]">
                    <FaXmark />
                  </div>
                )}
                <div className="mx-auto">{parseKatex(`${option}`)}</div>
              </div>
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
        {showSolution &&
          subExercises &&
          subExercises.some((e) => e.solution) && (
            <div className="flex flex-col gap-0 mt-8">
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
                            className="flex gap-4 justify-between items-center"
                          >
                            <div className="font-normal text-lg">
                              {parseKatex(s.text)}
                            </div>
                            <div className="flex text-yellow-400 gap-1 shrink-0">
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
            <div className="font-norma text-lg">
              Câte puncte crezi că ai fi obținut, conform baremului?
            </div>
            <div className="flex gap-4">
              {[0, 1, 2, 3, 4, 5].map((p, i) => (
                <div
                  className={twMerge(
                    "flex justify-center w-full gap-2 group items-center text-xl rounded-3xl border-[2px] duration-150 shadow h-12 py-2 bg-white border-gray-200 hover:bg-gray-100 cursor-pointer hover:shadow-none hover:translate-y-[2px]",
                    className.score[i]
                  )}
                  onClick={() => setScore(p)}
                  key={i}
                >
                  <FaStar className="" />
                  <div className="font-bold">{p}</div>
                </div>
              ))}
            </div>
          </div>
        )}
        {(chosen != null || !options) && (
          <button
            className="flex  duration-150 justify-center gap-2 text-lg mt-6 items-center font-semibold text-black/40 hover:text-black/50"
            onClick={() => setShowSolution(!showSolution)}
          >
            {showSolution ? (
              <>
                <FaAngleUp className="mt-0" />
                Ascunde rezolvarea
              </>
            ) : (
              <>
                <FaAngleDown className="mt-1" />
                Arată rezolvarea
              </>
            )}
          </button>
        )}
      </div>
    </div>
  );
}
