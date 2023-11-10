"use client";

import { BlockMath } from "react-katex";

export function Exercise({
  description,
  points,
  index,
  options,
}: {
  description: string;
  points: number;
  index: number;
  options: React.ReactNode[];
}) {
  return (
    <div className="rounded-xl text-lg text-left text-black mb-0 p-6 px-8 mt-4 justify-center flex flex-col items-center [font-family:KaTeX\_Main,Times_New_Roman,serif]">
      <div className="w-[60rem] flex flex-col">
        <div className="flex w-full font-bold justify-between gap-8">
          <div className="font-normal center bg-anti-math">
            <span className="font-bold mr-4">{index}.</span>{" "}
            {description.split("$").map((x, i) =>
              i % 2 == 0 ? (
                x
              ) : (
                <span className="inline-block [font-size:0.83em]" key={i}>
                  <BlockMath math={x} />
                </span>
              )
            )}
          </div>
          {/* <div className="w-full"></div> */}
          <div className="text-black/40 bg-anti-math">{points}p</div>
        </div>
        <div></div>
        <div className="grid grid-cols-4 mt-4 gap-4 font-normal">
          {options.map((option, i) => (
            <button
              className="flex items-center justify-center border-2 border-gray-300 shadow hover:bg-gray-50 duration-150 rounded-lg py-2 bg-white"
              key={i}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
