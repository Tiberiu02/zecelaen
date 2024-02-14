import { twMerge } from "tailwind-merge";
import { TbVideoOff } from "react-icons/tb";
import { SubLogo } from "../../components/SubLogo";
import { getKey, testsByYear } from "@/tests/tests";
import { Fragment } from "react";
import { NavBar } from "../../components/NavBar";
import { fullDate } from "@/tests/fullDate";
import { Button } from "@/components/Button";
import Link from "next/link";
import { ExamProgressIndicatorMinimal } from "@/components/ExamProgressIndicator";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Teste Evaluarea Națională Matematică cu rezolvări video",
  description:
    "Teste oficiale Evaluarea Națională Matematică de la examenele și simulările din anii trecuți în format interactiv cu rezolvări video",
  icons: [
    {
      url: "/favicon.ico",
      type: "image/x-icon",
    },
  ],
};

export default function Home() {
  return (
    <main className="bg-math min-h-screen flex flex-col items-center">
      <NavBar />
      <h1 className="w-full text-lg font-medium text-left text-black mb-0 min-h-16 justify-center flex flex-col items-center bg-white border-[1px]  border-gray-200 shadow">
        <div className="w-full max-w-5xl p-4">
          Teste Evaluarea Națională Matematică
        </div>
      </h1>

      <div className="flex flex-col gap-4 items-center max-w-4xl w-full px-2 sm:px-4">
        {Object.entries(testsByYear)
          .sort((a, b) => parseInt(b[0]) - parseInt(a[0]))
          .map(([byear, subs]) => (
            <Fragment key={byear}>
              <h1 className="text-base mt-12 mb-2 font-semibold text-left text-black/40 px-2 py-1 bg-white rounded-md border-[1px] border-gray-200 shadow">
                {byear}
              </h1>
              <div
                className={twMerge(
                  "grid w-full max-w-md lg:max-w-none lg:grid-cols-[1fr_1fr] gap-4 lg:[&>*:nth-child(even)]:translate-y-[16px] lg:hover:[&>*:nth-child(even)]:translate-y-[18px]",
                  subs.length == 1 && "lg:grid-cols-1 lg:max-w-md"
                )}
              >
                {subs
                  .sort((a, b) => (b.videos ? 1 : 0) - (a.videos ? 1 : 0))
                  .map((s, i) => (
                    <Link key={i} href={`/test/${getKey(s.fullName)}`}>
                      <Button className="group flex items-center flex-row px-4 sm:px-6 py-4 gap-4 sm:gap-6">
                        <SubLogo
                          seed={s.id}
                          className="w-6 h-6 sm:w-8 sm:h-8"
                        />
                        <div className="flex mr-auto flex-col justify-between">
                          <div className="text-base sm:text-xl font-normal">
                            {s.name}{" "}
                            {!s.videos && (
                              <TbVideoOff className="inline opacity-30 mt-[-3px] sm:-mt-1" />
                            )}
                          </div>
                          <div className="w-fit font-semibold text-xs sm:text-sm opacity-40">
                            {fullDate(s.date)}
                          </div>
                        </div>
                        <ExamProgressIndicatorMinimal examId={s.id} />
                      </Button>
                    </Link>
                  ))}
              </div>
            </Fragment>
          ))}
        <div className="mb-4 mt-28 font-medium text-black/40 bg-anti-math flex items-center gap-1">
          <span className="text-2xl">©</span> 2023 ZeceLaEN.ro
        </div>
      </div>
    </main>
  );
}
