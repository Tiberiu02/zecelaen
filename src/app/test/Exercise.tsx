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
    "bg-sky-500 opacity-80 group-hover:opacity-100",
    "bg-purple-500 opacity-80 group-hover:opacity-100",
    "bg-orange-500 opacity-80 group-hover:opacity-100",
    "bg-fuchsia-500 opacity-80 group-hover:opacity-100",
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
          <div className="font-normal center text-lg">
            {parseKatex(description)}
          </div>
        </div>
        <div className="grid grid-cols-4 gap-8 px-8">
          {options.map((option, i) => (
            <button
              className="flex group items-center text-xl bg-white rounded-full border-[2px] border-gray-200 shadow p-2 hover:bg-gray-50 duration-150"
              key={i}
            >
              <div
                className={twMerge(
                  "h-7 w-7 duration-150 text-base flex items-center justify-center rounded-full text-white font-semibold",
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
