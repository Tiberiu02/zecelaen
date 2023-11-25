import { CgMenuGridO } from "react-icons/cg";
import { FaStar, FaFire, FaFacebookF } from "react-icons/fa6";
import { FaFacebookMessenger } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";
import { HiDownload } from "react-icons/hi";
import { SubLogo } from "../../components/SubLogo";
import { Test1 } from "./Test1";

import React from "react";

const CircularProgressBar = ({
  relativeWidth,
  progressGreen,
  progressRed,
  className,
}: {
  relativeWidth: number;
  progressGreen: number;
  progressRed: number;
  className?: string;
}) => {
  // Calculate the center, start, and end points
  const eps = 0.0001;
  const R = 100;
  const r = R - (R * relativeWidth) / 2;
  const Cx = R;
  const Cy = R;
  const startX = R;
  const startY = (R * relativeWidth) / 2;

  // Convert progress to radians
  const midAngle = (Math.PI * 2 * progressRed) / 100;
  const endAngle = (Math.PI * 2 * (progressGreen + progressRed)) / 100 - eps;

  // Calculate mid position based on angle
  const midX = Cx + r * Math.sin(midAngle);
  const midY = Cy - r * Math.cos(midAngle);

  // Calculate end position based on angle
  const endX = Cx + r * Math.sin(endAngle);
  const endY = Cy - r * Math.cos(endAngle);

  console.log(endAngle, progressGreen + progressRed);

  // Large Arc Flag (0 for angles < 180, 1 for angles > 180)
  const largeArcFlag1 = progressRed <= 50 ? "0" : "1";
  const largeArcFlag2 = progressGreen <= 50 ? "0" : "1";

  // Path definition for the background circle
  const backgroundPath = `M ${startX} ${startY} A ${r} ${r} 0 1 1 ${
    startX - eps
  } ${startY}`;

  // Path definition for the progress bar
  const progressRedBarPath = `M ${startX} ${startY} A ${r} ${r} 0 ${largeArcFlag1} 1 ${midX} ${midY}`;
  const progressBarGreenPath = `M ${midX} ${midY} A ${r} ${r} 0 ${largeArcFlag2} 1 ${endX} ${endY}`;

  return (
    <svg
      width={2 * R}
      height={2 * R}
      viewBox={`0 0 ${2 * R} ${2 * R}`}
      className={className}
    >
      <path
        d={backgroundPath}
        stroke="#e5e5e5"
        strokeWidth={relativeWidth * R}
        fill="none"
      />
      {progressRed > 0 && (
        <path
          d={progressRedBarPath}
          stroke="#FF6767"
          strokeWidth={relativeWidth * R}
          fill="none"
          strokeLinecap="round"
        />
      )}
      {progressGreen > 0 && (
        <path
          d={progressBarGreenPath}
          stroke="#5dd35b"
          strokeWidth={relativeWidth * R}
          fill="none"
          strokeLinecap="round"
        />
      )}
    </svg>
  );
};

const RoundedRectangleProgressBar = ({
  width,
  height,
  thickness,
  borderRadius,
  progressGreen,
  progressRed,
}: {
  width: number;
  height: number;
  thickness: number;
  borderRadius: number;
  progressGreen: number;
  progressRed: number;
}) => {
  const progressLengthGreen =
    2 * (width + height - 2 * borderRadius) * (progressGreen / 100);
  const progressLengthRed =
    2 * (width + height - 2 * borderRadius) * (progressRed / 100);

  // Path for the entire rounded rectangle
  const fullPath = `M ${borderRadius},0
                    H ${width - borderRadius}
                    A ${borderRadius},${borderRadius} 0 0 1 ${width},${borderRadius}
                    V ${height - borderRadius}
                    A ${borderRadius},${borderRadius} 0 0 1 ${
    width - borderRadius
  },${height}
                    H ${borderRadius}
                    A ${borderRadius},${borderRadius} 0 0 1 0,${
    height - borderRadius
  }
                    V ${borderRadius}
                    A ${borderRadius},${borderRadius} 0 0 1 ${borderRadius},0
                    Z`;

  return (
    <svg
      width={width}
      height={height}
      viewBox={`${-thickness / 2} ${-thickness / 2} ${width + thickness} ${
        height + thickness
      }`}
    >
      <path d={fullPath} stroke="#eee" strokeWidth={thickness} fill="none" />
      <path
        d={fullPath}
        stroke="#5dd35b"
        strokeWidth={thickness}
        fill="none"
        strokeDasharray={`0,${progressLengthRed},${progressLengthGreen},${
          2 * (width + height)
        }`}
        strokeLinecap="round"
      />
      <path
        d={fullPath}
        stroke="#FF6767"
        strokeWidth={thickness}
        fill="none"
        strokeDasharray={`${progressLengthRed},${2 * (width + height)}`}
        strokeLinecap="round"
      />
    </svg>
  );
};

export default function Home() {
  const progress = true;

  return (
    <main className="bg-math min-h-screen flex flex-col items-center">
      <h1 className="w-full text-lg font-medium text-left text-black mb-0 h-16 flex flex-col justify-center items-center bg-white border-[1px] border-t-0 border-gray-200 shadow">
        <div className="w-[60rem] flex items-center">
          <div className="font-bold text-2xl">
            10<sup>N</sup>
          </div>
          <div className="w-full"></div>
          <div className="flex gap-2 mr-8 items-center text-red-700 font-semibold">
            <FaFire className="text-lg text-red-500 mb-[1px]" />7
          </div>
          <div className="flex gap-2 items-center text-yellow-600 font-semibold">
            <FaStar className="text-xl text-yellow-400 mb-[1px]" />
            35
          </div>
          <div className="w-full"></div>

          <CgMenuGridO className="text-3xl shrink-0 opacity-40 hover:opacity-100 cursor-pointer duration-150" />
        </div>
      </h1>

      <div className="w-[60rem] px-4 py-4 mt-8 rounded-2xl text-lg font-medium text-left text-black justify-center flex flex-col items-center bg-white border-[1px]  border-gray-200 shadow">
        <div className="flex flex-row items-center gap-4 w-full px-1">
          <SubLogo seed={1201231} className="w-10 h-10" />
          <div className="flex mr-auto flex-col justify-between">
            <div className="text-lg font-medium text-center bg-anti-math">
              Evaluarea Națională
            </div>
            <div className="w-fit font-semibold text-sm opacity-40 bg-anti-math">
              23 iunie 2023
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
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                <div className="text-base font-semibold text-black mt-[1px]">
                  9,52
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="w-[calc(100%+0rem)] mt-6 text-base flex items-center font-medium gap-2 text-black/60">
          <button className="flex gap-2 items-center bg-white rounded-full border-2 border-gray-200 shadow p-3 hover:bg-gray-100 hover:shadow-none hover:translate-y-[2px] px-4 py-1 duration-150">
            <HiDownload className=" " />
            Subiect
          </button>
          <button className="flex gap-2 items-center bg-white rounded-full border-2 border-gray-200 shadow p-3 hover:bg-gray-100 hover:shadow-none hover:translate-y-[2px] px-4 py-1 duration-150">
            <HiDownload className=" " />
            Barem
          </button>
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
        <Test1 />
      </div>

      <div className="flex flex-col gap-4 items-center">
        <div className="mb-4 mt-28 font-medium text-black/40 bg-anti-math flex items-center gap-1">
          <span className="text-2xl">©</span> 2023 ZeceLaEN.ro
        </div>
      </div>
    </main>
  );
}
