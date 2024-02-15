import React from "react";
import { NAVBAR_HEIGHT, NavBar } from "@/components/NavBar";
import { Animation } from "@/components/Animation";
import { Button } from "@/components/Button";
import { FaCirclePlay, FaDiscord } from "react-icons/fa6";
import { FaAngleDoubleRight } from "react-icons/fa";
import Link from "next/link";
import { IconRoFlag, IconCheckMarkStack } from "@/components/Icons";
import { RuntimeLoader } from "@rive-app/react-canvas";
import { Footer } from "@/components/Footer";

const riveWASMResource = "https://unpkg.com/@rive-app/canvas@2.7.6/rive.wasm";
RuntimeLoader.setWasmUrl(riveWASMResource);

export default async function Page() {
  const ageTM =
    new Date().getFullYear() - 2003 + (new Date().getMonth() >= 6 ? 1 : 0);

  return (
    <main className="flex flex-col">
      <NavBar showStats={false} />

      <link
        rel="preload"
        href="/animations/fig1.riv"
        as="fetch"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href={riveWASMResource}
        as="fetch"
        crossOrigin="anonymous"
      />

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
              Teste interactive
              <br />
              cu rezolvări video
            </h1>
            <h2 className="text-xl lg:text-3xl font-normal text-black bg-anti-math mt-8 text-center sm:text-left balance-lines">
              Prima platformă educațională gratuită dedicată Evaluării Naționale
            </h2>
            <Link href="/teste-matematica">
              <Button className="px-6 py-2 w-fit font-medium text-lg mt-8 flex gap-2 items-center sm:-ml-1">
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
            <div className="flex items-center gap-5">
              <IconRoFlag className="w-10 h-10 shrink-0" />
              <div className="max-w-sm">
                <b>Subiecte oficiale</b> de la examenele și simulările din anii
                trecuți
              </div>
            </div>

            <div className="flex items-center gap-5">
              <IconCheckMarkStack className="w-10 h-10 shrink-0" />
              <div className="max-w-sm">
                <b>Grile interactive</b> cu care nu vei mai pierde timpul
                verificând baremul
              </div>
            </div>

            <div className="flex items-center gap-5">
              <FaCirclePlay className="text-lg w-10 h-10 shrink-0 text-[#ff6363]" />
              <div className="max-w-sm">
                <b>Rezolvări video</b> pentru fiecare exercițiu, aflate direct
                sub exercițiul respectiv
              </div>
            </div>

            <div className="flex items-center gap-5">
              <FaDiscord className="text-4xl w-10 h-10 shrink-0 text-[#5865F2]" />
              <div className="max-w-sm">
                <b>Server Discord.</b> Nu suntem doar o platformă, ci o
                comunitate!
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-center bg-white px-8 mt-64 gap-4">
        <h1 className="text-3xl text-center font-semibold mb-16">
          Cine suntem?
        </h1>
        <div className="flex flex-col sm:flex-row gap-8 sm:gap-16 max-w-3xl">
          <img
            src="/tiberiu.webp"
            alt="Tiberiu Mușat"
            className="rounded-full w-48 self-center sm:self-start"
          />
          <div className="text-lg">
            Mă numesc <b>Tiberiu Mușat</b>, am {ageTM} de ani, și sunt creatorul
            Zece la EN. Am învățat la Colegiul Național de Informatică Tudor
            Vianu, iar acum studiez știința calculatoarelor în Elveția. În liceu
            am obținut două medalii de argint la Olimpiada Internațională de
            Informatică (Singapore 2021, Tokyo 2018) și mai multe premii la
            concursuri internaționale și naționale de informatică, fizică și
            matematică.
            <br />
            <br />
            Sunt convins că tehnologia poate avea un rol major în procesul
            educațional. Visul meu este să creez cea mai bună platformă
            educațională din lume, în România, modelată special pentru sistemul
            românesc.
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
