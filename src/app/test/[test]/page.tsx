import { HiDownload } from "react-icons/hi";
import { SubLogo } from "../../../components/SubLogo";
import { Test } from "./Test";

import React from "react";
import { testsByKey } from "@/tests/tests";
import { NavBar } from "@/components/NavBar";
import { fullDate } from "../../../tests/fullDate";
import { Button } from "@/components/Button";
import { ShareButtons } from "@/components/ShareButtons";
import { Card } from "../../../components/Card";
import { ExamProgressIndicator } from "@/components/ExamProgressIndicator";
import { Metadata } from "next";

export function generateStaticParams() {
  return Object.keys(testsByKey).map((test) => ({
    test,
  }));
}

export function generateMetadata({
  params,
}: {
  params: { test: string };
}): Metadata {
  const test = testsByKey[params.test];

  return {
    title: test.fullName,
    description: `Rezolvă subiectul de la ${test.fullName} din ${test.date}`,
  };
}

export default async function Page({ params }: { params: { test: string } }) {
  const testKey = params.test;
  const test = testsByKey[testKey];
  const progress = true;

  const pdfSubiect = `/pdf/${test.id}/${testKey}.pdf`;
  const pdfBarem = `/pdf/${test.id}/${testKey}-barem.pdf`;

  return (
    <main className="bg-math min-h-screen flex flex-col items-center">
      <NavBar />

      <div className="flex flex-col items-center md:px-4 w-full max-w-5xl">
        <Card className="w-full md:mt-8 text-lg font-medium text-left text-black justify-center flex flex-col items-center p-4 pt-6 pb-6 md:pb-4 max-md:shadow-none max-md:border-b-2 border-gray-200">
          <div className="flex flex-row items-center gap-6 w-full px-1">
            <SubLogo
              seed={test.id}
              className="w-12 h-12 shrink-0 hidden md:block"
            />
            <div className="flex mr-auto flex-col">
              <h1 className="text-lg font-medium [text-wrap:balance]">
                {test.fullName}
              </h1>
              <div className="w-fit font-semibold text-sm opacity-40">
                {fullDate(test.date)}
              </div>
            </div>
            {progress && <ExamProgressIndicator examId={test.id} />}
          </div>
          <div className="w-full mt-6 text-base grid grid-cols-1 md:flex flex-wrap items-center justify-between font-medium gap-2 text-black/60">
            <div className="grid grid-cols-2 gap-2">
              <a href={pdfSubiect} download={`${test.fullName}.pdf`}>
                <Button className="flex gap-2 py-1 px-4 items-center justify-center">
                  <HiDownload className="shrink-0" />
                  Subiect
                </Button>
              </a>
              <a href={pdfBarem} download={`Barem ${test.fullName}.pdf`}>
                <Button className="flex gap-2 py-1 px-4 items-center justify-center">
                  <HiDownload className="shrink-0" />
                  Barem
                </Button>
              </a>
            </div>
            <div className="md:grid grid-cols-3 gap-2 hidden">
              <ShareButtons />
            </div>
          </div>
        </Card>

        <div className="flex md:gap-2 flex-col w-full">
          <Test testId={test.id} />
        </div>

        <div className="flex flex-col gap-4 items-center">
          <div className="mb-4 mt-28 font-medium text-black/40 bg-anti-math flex items-center gap-1">
            <span className="text-2xl">©</span> 2024 ZeceLaEN.ro
          </div>
        </div>
      </div>
    </main>
  );
}
