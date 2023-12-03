import { CgMenuGridO } from "react-icons/cg";
import { FaStar, FaFire, FaFacebookF } from "react-icons/fa6";
import { FaFacebookMessenger } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";
import { HiDownload } from "react-icons/hi";
import { SubLogo } from "../../../components/SubLogo";
import { Test } from "./Test";

import React from "react";
import { testsByKey } from "@/tests/tests";
import { NavBar } from "@/components/NavBar";
import { RoundedRectangleProgressBar } from "../../../components/RoundedRectangleProgressBar";

function fullDate(date: string) {
  const [day, month, year] = date.split(".");
  const months = [
    "ianuarie",
    "februarie",
    "martie",
    "aprilie",
    "mai",
    "iunie",
    "iulie",
    "august",
    "septembrie",
    "octombrie",
    "noiembrie",
    "decembrie",
  ];
  return `${parseInt(day)} ${months[parseInt(month) - 1]} ${year}`;
}

export function generateStaticParams() {
  return Object.keys(testsByKey).map((testKey) => ({
    testKey,
  }));
}

export default async function Page({
  params,
}: {
  params: { testKey: string };
}) {
  const test = testsByKey[params.testKey];
  const progress = true;

  const pdfSubiect = `/pdf/${test.id}/subiect.pdf`;
  const pdfBarem = `/pdf/${test.id}/barem.pdf`;

  return (
    <main className="bg-math min-h-screen flex flex-col items-center">
      <NavBar />

      <div className="w-[60rem] px-4 py-4 mt-8 rounded-2xl text-lg font-medium text-left text-black justify-center flex flex-col items-center bg-white border-[1px]  border-gray-200 shadow">
        <div className="flex flex-row items-center gap-4 w-full px-1">
          <SubLogo seed={test.fullName} className="w-10 h-10" />
          <div className="flex mr-auto flex-col justify-between">
            <div className="text-lg font-medium text-center bg-anti-math">
              {test.fullName}
            </div>
            <div className="w-fit font-semibold text-sm opacity-40 bg-anti-math">
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
        <div className="w-[calc(100%+0rem)] mt-6 text-base flex items-center font-medium gap-2 text-black/60">
          <a
            href={pdfSubiect}
            download={`${test.fullName} - ZeceLaEN.pdf`}
            className="flex gap-2 items-center bg-white rounded-full border-2 border-gray-200 shadow p-3 hover:bg-gray-100 hover:shadow-none hover:translate-y-[2px] px-4 py-1 duration-150"
          >
            <HiDownload className=" " />
            Subiect
          </a>
          <a
            href={pdfBarem}
            download={`${test.fullName} - BAREM - ZeceLaEN.pdf`}
            className="flex gap-2 items-center bg-white rounded-full border-2 border-gray-200 shadow p-3 hover:bg-gray-100 hover:shadow-none hover:translate-y-[2px] px-4 py-1 duration-150"
          >
            <HiDownload className=" " />
            Barem
          </a>
          <div className="w-full"></div>
          <button className="flex gap-2 items-center bg-white rounded-full border-2 border-gray-200 shadow p-3 hover:bg-gray-100 hover:shadow-none hover:translate-y-[2px] px-4 py-1 duration-150 text-green-500">
            <RiWhatsappFill className=" " />
            Share
          </button>
          <button className="flex gap-2 items-center bg-white rounded-full border-2 border-gray-200 shadow p-3 hover:bg-gray-100 hover:shadow-none hover:translate-y-[2px] px-4 py-1 duration-150 text-blue-800">
            <FaFacebookF className="text-xs" />
            Share
          </button>
          <button className="flex gap-2 items-center bg-white rounded-full border-2 border-gray-200 shadow p-3 hover:bg-gray-100 hover:shadow-none hover:translate-y-[2px] px-4 py-1 duration-150 text-blue-500">
            <FaFacebookMessenger className="text-xs" />
            Share
          </button>
        </div>
      </div>

      <div className="flex mt-16 gap-6 flex-col">
        <Test testId={test.id} />
      </div>

      <div className="flex flex-col gap-4 items-center">
        <div className="mb-4 mt-28 font-medium text-black/40 bg-anti-math flex items-center gap-1">
          <span className="text-2xl">©</span> 2023 ZeceLaEN.ro
        </div>
      </div>
    </main>
  );
}
