import React from "react";
import { NAVBAR_HEIGHT, NavBar } from "@/components/NavBar";
import { Animation } from "@/components/Animation";
import { Button } from "@/components/Button";
import { BiMath } from "react-icons/bi";
import {
  FaCaretRight,
  FaCirclePlay,
  FaDiscord,
  FaDivide,
} from "react-icons/fa6";
import { LuTriangle } from "react-icons/lu";
import { PiCaretDoubleRight } from "react-icons/pi";
import { FaAngleDoubleRight } from "react-icons/fa";
import Link from "next/link";

export default async function Page() {
  return (
    <main className="flex flex-col">
      <NavBar showStats={false} />

      <div className="w-full bg-math flex flex-col overflow-hidden">
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 lg:gap-16 p-4 w-full"
          style={{
            minHeight: `calc(100vh - ${NAVBAR_HEIGHT})`,
            paddingBottom: `calc(1rem + ${NAVBAR_HEIGHT})`,
          }}
        >
          <div className="w-64 sm:w-96 aspect-square">
            <Animation src="/animations/fig1.riv" stateMachines="main" />
          </div>
          <div className="flex flex-col max-w-xl items-center sm:items-start">
            <h1 className="text-3xl lg:text-5xl font-bold text-black bg-anti-math text-center sm:text-left balance-lines">
              Teste interactive cu
              <br />
              rezolvări video
            </h1>
            <h2 className="text-xl lg:text-3xl font-normal text-black bg-anti-math mt-8 text-center sm:text-left balance-lines">
              Prima platformă educațională gratuită dedicată Evaluării Naționale
            </h2>
            <Link href="/teste-matematica">
              <Button className="px-6 py-2 w-fit font-medium text-lg mt-8 flex gap-4 items-center sm:-ml-1">
                {/* <BiMath /> */}
                Teste matematică
                <FaAngleDoubleRight />
              </Button>
            </Link>
          </div>
        </div>
        <div className="w-full h-32 drop-shadow bg-white rounded-t-[100%] shadow-[0_-1px_3px_0_rgba(0,0,0,0.1),0_-1px_2px_-1px_rgba(0,0,0,0.1)] -mb-1"></div>
      </div>
      <div className="w-full flex flex-col bg-white px-8">
        <div className="flex flex-col items-center text-lg balance-lines">
          <h1 className="text-3xl text-center font-semibold mb-16">
            O platformă nouă în România
          </h1>

          <div className="flex flex-col gap-8 sm:grid sm:grid-cols-2">
            <div className="flex items-center gap-4">
              <svg
                width="90"
                height="66"
                viewBox="0 0 90 66"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10 shrink-0"
              >
                <path
                  d="M0 15C0 6.71573 6.71573 0 15 0H30V66H15C6.71573 66 0 59.2843 0 51V15Z"
                  fill="#408CFF"
                />
                <path d="M30 0H60V66H30V0Z" fill="#FFD600" />
                <path
                  d="M60 0H75C83.2843 0 90 6.71573 90 15V51C90 59.2843 83.2843 66 75 66H60V0Z"
                  fill="#FF6363"
                />
              </svg>
              <div className="max-w-sm">
                <b>Subiecte oficiale</b> de la examenele și simulările din anii
                trecuți
              </div>
            </div>

            <div className="flex items-center gap-4">
              <svg
                width="82"
                height="84"
                viewBox="0 0 82 84"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10 shrink-0"
              >
                <circle cx="27.5" cy="27.5" r="27.5" fill="#B7F4B5" />
                <circle cx="37.5" cy="38.5" r="31.5" fill="#5FE25C" />
                <circle cx="47.5" cy="49.5" r="34.5" fill="white" />
                <path
                  d="M47.5 84C56.65 84 65.4252 80.3652 71.8952 73.8952C78.3652 67.4252 82 58.65 82 49.5C82 40.35 78.3652 31.5748 71.8952 25.1048C65.4252 18.6348 56.65 15 47.5 15C38.35 15 29.5748 18.6348 23.1048 25.1048C16.6348 31.5748 13 40.35 13 49.5C13 58.65 16.6348 67.4252 23.1048 73.8952C29.5748 80.3652 38.35 84 47.5 84ZM62.7285 43.166L45.4785 60.416C44.2117 61.6828 42.1633 61.6828 40.91 60.416L32.285 51.791C31.0182 50.5242 31.0182 48.4758 32.285 47.2225C33.5518 45.9691 35.6002 45.9557 36.8535 47.2225L43.1875 53.5564L58.1465 38.584C59.4133 37.3172 61.4617 37.3172 62.715 38.584C63.9684 39.8508 63.9818 41.8992 62.715 43.1525L62.7285 43.166Z"
                  fill="#19CE15"
                />
              </svg>
              <div className="max-w-sm">
                <b>Grile interactive</b> cu care nu vei mai pierde timpul
                verificând baremul
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FaCirclePlay className="text-lg w-10 h-10 shrink-0 text-[#ff6363]" />
              <div className="max-w-sm">
                <b>Rezolvări video</b> pentru fiecare exercițiu, aflate direct
                sub exercițiul respectiv
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FaDiscord className="text-4xl w-10 h-10 shrink-0 text-[#5865F2]" />
              <div className="max-w-sm">
                <b>Server Discord.</b> Nu suntem doar o platformă, ci o
                comunitate!
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 items-center">
        <div className="mb-4 mt-28 font-medium text-black/40 bg-anti-math flex items-center gap-1">
          <span className="text-2xl">©</span> 2023 ZeceLaEN.ro
        </div>
      </div>
    </main>
  );
}
