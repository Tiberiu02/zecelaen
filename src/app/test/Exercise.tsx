"use client";

import { useState } from "react";
import { FaCheck, FaStar, FaXmark } from "react-icons/fa6";
import { BlockMath } from "react-katex";
import { twMerge } from "tailwind-merge";

function parseKatex(str: string) {
  return (
    <>
      {str.split("$").map((x, i) =>
        i % 2 == 0 ? (
          x
        ) : (
          <span className="inline-block -my-4" key={i}>
            <BlockMath math={x} />
          </span>
        )
      )}
    </>
  );
}

export function Exercise({
  description,
  points,
  index,
  options,
  correct,
}: {
  description: string;
  points: number;
  index: number;
  options: string[];
  correct: number;
}) {
  const [chosen, setChosen] = useState<number | null>(null);

  const className = {
    options: [
      "bg-[#35A9FF] border-[#84caff]",
      "bg-[#B265FF] border-[#d3a7ff]",
      "bg-[#FF63E6] border-[#ffaaf1]",
      "bg-[#FF8C21] border-[#ffc691]",
    ],
  };

  return (
    <div className="text-left text-black justify-center flex flex-col items-center">
      <div className="w-[60rem] flex flex-col gap-0 bg-white rounded-2xl border-[1px] border-gray-200 shadow py-4 px-6">
        <div className="flex justify-between font-bold text-lg">
          <span className="font-bold">{index}.</span>
          <div className="flex text-yellow-400 gap-1">
            <FaStar className="mt-1" />
            <div className="text-yellow-500">{points}</div>
          </div>
        </div>
        <div className="font-normal center text-lg text-center w-full">
          {parseKatex(description)}
        </div>
        <div className="grid grid-cols-4 gap-4 px-0 mt-6 -mx-2">
          {options.map((option, i) => (
            <div
              className={twMerge(
                "flex group items-center text-xl rounded-3xl border-[2px] duration-150 shadow h-12 px-2",
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
                <div className="h-7 w-7 text-base flex items-center justify-center rounded-full text-white border-2 border-[#b3ffb1] border-opacity-50 bg-[#3ace38]">
                  <FaCheck />
                </div>
              ) : (
                <div className="h-7 w-7 text-base flex items-center justify-center rounded-full text-white border-2 border-white border-opacity-50 bg-[#FF7676]">
                  <FaXmark />
                </div>
              )}
              <div className="mx-auto">{parseKatex(`$${option}$`)}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
