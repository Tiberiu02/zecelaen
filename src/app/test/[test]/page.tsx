import { HiDownload } from "react-icons/hi";
import { SubLogo } from "../../../components/SubLogo";
import { Test } from "./Test";

import React from "react";
import { testsByKey } from "@/tests/tests";
import { NavBar } from "@/components/NavBar";
import { RoundedRectangleProgressBar } from "../../../components/RoundedRectangleProgressBar";
import { fullDate } from "../../../tests/fullDate";
import { Button } from "@/components/Button";
import { ShareButtons } from "@/components/ShareButtons";
import { Card } from "../../../components/Card";

export function generateStaticParams() {
  return Object.keys(testsByKey).map((test) => ({
    test,
  }));
}

export default async function Page({ params }: { params: { test: string } }) {
  const test = testsByKey[params.test];
  const progress = true;

  const pdfSubiect = `/pdf/${test.id}/subiect.pdf`;
  const pdfBarem = `/pdf/${test.id}/barem.pdf`;

  return (
    <main className="bg-math min-h-screen flex flex-col items-center">
      <NavBar />

      <div className="flex flex-col items-center md:px-4 w-full max-w-5xl">
        <Card className="w-full md:mt-8 text-lg font-medium text-left text-black justify-center flex flex-col items-center p-4 pb-6 md:pb-4">
          <div className="flex flex-row items-center gap-4 w-full px-1">
            <SubLogo seed={test.id} className="w-10 h-10 shrink-0" />
            <div className="flex mr-auto flex-col">
              <div className="text-lg font-medium [text-wrap:balance]">
                {test.fullName}
              </div>
              <div className="w-fit font-semibold text-sm opacity-40">
                {fullDate(test.date)}
              </div>
            </div>
            {progress && (
              <div className="relative -mr-1">
                {/* // <TbDiscountCheckFilled className="text-green-500 text-4xl" /> */}
                <RoundedRectangleProgressBar
                  width={75}
                  height={40}
                  thickness={4}
                  progressGreen={50}
                  progressRed={25}
                  borderRadius={20}
                  // className="w-14 h-14"
                />
                <div className="absolute w-full h-full inset-0 flex items-center justify-center">
                  <div className="text-base font-semibold text-black mt-[1px]">
                    9,52
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="w-full mt-6 text-base grid grid-cols-1 md:flex flex-wrap items-center justify-between font-medium gap-2 text-black/60">
            <div className="grid grid-cols-2 gap-2">
              <a href={pdfSubiect} download={`${test.fullName} - ZeceLaEN.pdf`}>
                <Button className="flex gap-2 py-1 px-4 items-center justify-center">
                  <HiDownload className="shrink-0" />
                  Subiect
                </Button>
              </a>
              <a
                href={pdfBarem}
                download={`${test.fullName} - BAREM - ZeceLaEN.pdf`}
              >
                <Button className="flex gap-2 py-1 px-4 items-center justify-center">
                  <HiDownload className="shrink-0" />
                  Barem
                </Button>
              </a>
            </div>
            {/* <div className="w-full"></div> */}
            <div className="grid grid-cols-3 gap-2">
              <ShareButtons />
            </div>
          </div>
        </Card>

        <div className="flex gap-2 flex-col w-full">
          <Test testId={test.id} />
        </div>

        <div className="flex flex-col gap-4 items-center">
          <div className="mb-4 mt-28 font-medium text-black/40 bg-anti-math flex items-center gap-1">
            <span className="text-2xl">©</span> 2023 ZeceLaEN.ro
          </div>
        </div>
      </div>
    </main>
  );
}
