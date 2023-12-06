"use client";

import { useState } from "react";
import { CgMenuGridO } from "react-icons/cg";
import { FaDivide, FaInfoCircle } from "react-icons/fa";
import { FaStar, FaFire, FaSchool, FaDiscord } from "react-icons/fa6";

export function NavBar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="w-screen select-none text-lg font-medium text-left text-black mb-0 h-16 flex flex-col justify-center items-center bg-white border-[1px] border-t-0 border-gray-200 shadow">
      <div className="w-[60rem] flex items-center">
        <a className="font-bold text-2xl" href="/">
          10<sup>N</sup>
        </a>
        <div className="w-full"></div>
        <div className="flex gap-2 mr-8 items-center text-red-700 font-semibold">
          <FaFire className="text-lg text-red-500 mb-[1px]" />7
        </div>
        <div className="flex gap-2 items-center text-yellow-600 font-semibold">
          <FaStar className="text-xl text-yellow-400 mb-[1px]" />
          12
        </div>
        <div className="w-full"></div>

        <div className="relative">
          <CgMenuGridO
            className="text-3xl shrink-0 opacity-40 hover:opacity-100 cursor-pointer duration-150"
            onClick={() => setShowMenu(!showMenu)}
          />
          {showMenu && (
            <>
              <div
                className="fixed inset-0 z-40"
                onClick={() => setShowMenu(false)}
              ></div>
              <div className="absolute z-50 text-gray-500 w-64 text-base top-[100%] right-0 p-0 bg-white border-gray-200 border-[2px] rounded-tr-xl overflow-hidden shadow-lg rounded-xl flex flex-col">
                <a
                  className="flex gap-3 p-2 pt-3 px-4 items-center hover:bg-gray-100 bg-white hover:text-black duration-150"
                  href="/"
                >
                  <FaDivide /> Teste Matematică
                </a>
                <a
                  className="flex gap-3 p-2 px-4 items-center hover:bg-gray-100 bg-white hover:text-black duration-150"
                  href="https://bacplus.ro"
                  target="_blank"
                >
                  <FaSchool /> Top Licee
                </a>
                <a
                  className="flex gap-3 p-2 px-4 items-center hover:bg-gray-100 bg-white hover:text-black duration-150"
                  href="/discord"
                >
                  <FaDiscord /> Discord
                </a>
                <a
                  className="flex gap-3 p-2 px-4 pb-3 items-center hover:bg-gray-100 bg-white hover:text-black duration-150"
                  href="/despre"
                >
                  <FaInfoCircle /> Despre Proiect
                </a>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
