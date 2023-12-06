import { twMerge } from "tailwind-merge";
import { TbDiscountCheckFilled } from "react-icons/tb";
import { SubLogo } from "../components/SubLogo";
import { getKey, tests, testsByYear } from "@/tests/tests";
import { Fragment } from "react";
import { NavBar } from "../components/NavBar";
import { fullDate } from "@/tests/fullDate";

export default function Home() {
  return (
    <main className="bg-math min-h-screen flex flex-col items-center">
      <NavBar />
      <h1 className="w-full text-lg font-medium text-left text-black mb-0 h-16 justify-center flex flex-col items-center bg-white border-[1px]  border-gray-200 shadow">
        <div className="w-[60rem]">Subiecte Evaluarea Națională Matematică</div>
      </h1>

      <div className="flex flex-col gap-4 items-center">
        {Object.entries(testsByYear)
          .sort((a, b) => parseInt(b[0]) - parseInt(a[0]))
          .map(([byear, subs]) => (
            <Fragment key={byear}>
              <h1 className="text-base mt-12 mb-2 font-semibold text-left text-black/40 px-2 py-1 bg-white rounded-md border-[1px] border-gray-200 shadow">
                {byear}
              </h1>
              <div className="grid grid-cols-[auto_auto] gap-4 [&>*:nth-child(even)]:translate-y-[16px] hover:[&>*:nth-child(even)]:translate-y-[18px]">
                {subs.map((s, i) => (
                  <a
                    key={i}
                    className={twMerge(
                      "relative group overflow-hidden w-[28rem] items-center bg-white rounded-full border-2 hover:bg-gray-50 hover:shadow-none hover:translate-y-[2px] border-gray-200 shadow flex flex-row px-6 py-4 gap-8 cursor-pointer duration-150"
                    )}
                    href={`/test/${getKey(s.fullName)}`}
                  >
                    <SubLogo seed={s.fullName} className="w-8 h-8" />
                    <div className="flex mr-auto flex-col justify-between">
                      <div className="text-xl font-normal text-center">
                        {s.name}
                      </div>
                      <div className="w-fit font-semibold text-sm opacity-40">
                        {fullDate(s.date)}
                      </div>
                    </div>
                    {null && (
                      <TbDiscountCheckFilled className="text-green-500 text-4xl" />
                    )}
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
