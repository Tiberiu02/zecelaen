"use client";

import { useAtom } from "jotai";
import { RoundedRectangleProgressBar } from "./RoundedRectangleProgressBar";
import { getExamAtom } from "@/storage/exams";
import { twMerge } from "tailwind-merge";
import { TbDiscountCheckFilled } from "react-icons/tb";

export function ExamProgressIndicator({ examId }: { examId: string }) {
  const [examData] = useAtom(getExamAtom(examId));
  const examTotal = 90;

  return (
    <div
      className={twMerge(
        "relative -mr-1",
        examData.correct > 0 || examData.incorrect > 0 ? "" : "invisible"
      )}
    >
      <RoundedRectangleProgressBar
        width={75}
        height={40}
        thickness={4}
        progressGreen={(examData.correct / examTotal) * 100}
        progressRed={(examData.incorrect / examTotal) * 100}
        borderRadius={20}
      />
      <div className="absolute w-full h-full inset-0 flex items-center justify-center">
        <div className="text-base font-semibold text-black mt-[1px]">
          {(1 + examData.correct / 10).toLocaleString("ro-RO", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </div>
      </div>
    </div>
  );
}

export function ExamProgressIndicatorMinimal({ examId }: { examId: string }) {
  const [examData] = useAtom(getExamAtom(examId));
  const examTotal = 90;

  return (
    <div
      className={twMerge(
        "relative",
        examData.correct > 0 || examData.incorrect > 0 ? "" : "invisible"
      )}
    >
      {examData.correct + examData.incorrect < examTotal ? (
        <RoundedRectangleProgressBar
          width={30}
          height={30}
          thickness={5}
          progressGreen={(examData.correct / examTotal) * 100}
          progressRed={(examData.incorrect / examTotal) * 100}
          borderRadius={15}
        />
      ) : (
        <TbDiscountCheckFilled className="text-green-500 text-3xl" />
      )}
    </div>
  );
}
