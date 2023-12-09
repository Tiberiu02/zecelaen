import { twMerge } from "tailwind-merge";
import { TbDiscountCheckFilled } from "react-icons/tb";
import { SubLogo } from "../components/SubLogo";
import { getKey, tests, testsByYear } from "@/tests/tests";
import { Fragment } from "react";
import { NavBar } from "../components/NavBar";
import { fullDate } from "@/tests/fullDate";
import { Button } from "@/components/Button";

export default function Home() {
  return (
    <main className="bg-math min-h-screen flex flex-col items-center">
      <NavBar />
      <h1 className="w-full text-lg font-medium text-left text-black mb-0 min-h-16 justify-center flex flex-col items-center bg-white border-[1px]  border-gray-200 shadow">
        <div className="w-full max-w-5xl p-4">
          Teste Evaluarea Națională Matematică
        </div>
      </h1>

      <div className="flex flex-col gap-4 items-center max-w-4xl w-full px-4">
        {Object.entries(testsByYear)
          .sort((a, b) => parseInt(b[0]) - parseInt(a[0]))
          .map(([byear, subs]) => (
            <Fragment key={byear}>
              <h1 className="text-base mt-12 mb-2 font-semibold text-left text-black/40 px-2 py-1 bg-white rounded-md border-[1px] border-gray-200 shadow">
                {byear}
              </h1>
              <div
                className={twMerge(
                  "grid w-full max-w-md md:max-w-none md:grid-cols-[1fr_1fr] gap-4 md:[&>*:nth-child(even)]:translate-y-[16px] md:hover:[&>*:nth-child(even)]:translate-y-[18px]",
                  subs.length == 1 && "md:grid-cols-1 md:max-w-md"
                )}
              >
                {subs.map((s, i) => (
                  <a key={i} href={`/test/${getKey(s.fullName)}`}>
                    <Button className="group flex items-center flex-row px-6 py-4 gap-8">
                      <SubLogo seed={s.id} className="w-8 h-8" />
                      <div className="flex mr-auto flex-col justify-between">
                        <div className="text-xl font-normal">{s.name}</div>
                        <div className="w-fit font-semibold text-sm opacity-40">
                          {fullDate(s.date)}
                        </div>
                      </div>
                      {null && (
                        <TbDiscountCheckFilled className="text-green-500 text-4xl" />
                      )}
                    </Button>
                  </a>
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
