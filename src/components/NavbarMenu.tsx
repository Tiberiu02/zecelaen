"use client";

import { useState } from "react";
import { CgMenuGridO } from "react-icons/cg";
import { FaDivide } from "react-icons/fa";
import { FaSchool, FaDiscord, FaBookOpen, FaBook } from "react-icons/fa6";

export function NavbarMenu() {
  const [showMenu, setShowMenu] = useState(false);

  return (
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
          <div
            onClick={() => setShowMenu(false)}
            className="absolute z-50 text-gray-500 w-64 text-base top-[100%] right-0 p-0 bg-white border-gray-200 border-[2px] rounded-tr-xl overflow-hidden shadow-lg rounded-xl flex flex-col"
          >
            <a
              className="flex gap-3 p-2 pt-3 px-4 items-center hover:bg-gray-100 bg-white hover:text-black duration-150"
              href="/teste-matematica"
            >
              <FaDivide /> Teste Matematică
            </a>
            <a
              className="flex gap-3 p-2 px-4 items-center hover:bg-gray-100 bg-white hover:text-black duration-150"
              href="https://bacplus.ro/top_licee/2023"
              target="_blank"
            >
              <FaSchool /> Top Licee
            </a>
            <a
              className="flex gap-3 p-2 px-4 items-center hover:bg-gray-100 bg-white hover:text-black duration-150"
              href="/resurse-utile"
            >
              <FaBook /> Resurse Utile
            </a>
            <a
              className="flex gap-3 p-2 px-4 items-center hover:bg-gray-100 bg-white hover:text-black duration-150"
              href="/discord"
            >
              <FaDiscord /> Discord
            </a>
          </div>
        </>
      )}
    </div>
  );
}
