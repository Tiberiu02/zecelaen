import React from "react";
import { NAVBAR_HEIGHT, NavBar } from "@/components/NavBar";
import { Animation } from "@/components/Animation";
import { Button } from "@/components/Button";
import { BiMath } from "react-icons/bi";
import { FaCaretRight, FaDivide } from "react-icons/fa6";
import { LuTriangle } from "react-icons/lu";
import { PiCaretDoubleRight } from "react-icons/pi";
import { FaAngleDoubleRight } from "react-icons/fa";
import Link from "next/link";

export default async function Page() {
  return (
    <main className="flex flex-col">
      <NavBar showStats={false} />

      <div
        className="flex flex-col sm:flex-row items-center justify-center gap-4 lg:gap-16 p-4 w-full bg-math"
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
      <div className="flex flex-col gap-4 items-center">
        <div className="mb-4 mt-28 font-medium text-black/40 bg-anti-math flex items-center gap-1">
          <span className="text-2xl">©</span> 2023 ZeceLaEN.ro
        </div>
      </div>
    </main>
  );
}
