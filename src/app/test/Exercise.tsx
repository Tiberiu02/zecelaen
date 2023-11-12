"use client";

import { FaStar } from "react-icons/fa6";
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
}: {
  description: string;
  points: number;
  index: number;
  options: string[];
}) {
  const optionClass = [
    "text-sky-300 border-2 border-sky-300 group-hover:text-gray-100 group-hover:bg-sky-300 opacity-80 ",
    "text-purple-300 border-2 border-purple-300 group-hover:text-gray-100 group-hover:bg-purple-300 opacity-80 ",
    "text-orange-300 border-2 border-orange-300 group-hover:text-gray-100 group-hover:bg-orange-300 opacity-80 ",
    "text-fuchsia-300 border-2 border-fuchsia-300 group-hover:text-gray-100 group-hover:bg-fuchsia-300 opacity-80 ",
  ];
  return (
    <div className="rounded-xl text-left text-black justify-center flex flex-col items-center">
      <div className="w-[60rem] flex flex-col gap-4 bg-white rounded-xl border-[1px] border-gray-200 shadow py-6 px-8">
        <div className="flex justify-between font-bold text-lg">
          <span className="font-bold">{index}.</span>
          <div className="flex text-yellow-400 gap-1">
            <FaStar className="mt-1" />
            <div className="text-yellow-500">{points}</div>
          </div>
        </div>
        <div className="flex w-full justify-between gap-8">
          <div className="font-normal center text-lg text-center w-full">
            {parseKatex(description)}
          </div>
        </div>
        <div className="grid grid-cols-4 gap-8 px-8 mt-8">
          {options.map((option, i) => (
            <button
              className="flex group items-center text-xl bg-white rounded-3xl border-[2px] border-gray-200 shadow p-2 hover:bg-gray-100 duration-150"
              key={i}
            >
              <div
                className={twMerge(
                  "h-7 w-7 duration-150 text-base flex items-center justify-center rounded-full text-white font-medium",
                  optionClass[i]
                )}
              >
                {"ABCD"[i]}
              </div>
              <div className="mx-auto">{parseKatex(`${option}$`)}</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
