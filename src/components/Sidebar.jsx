"use client";

import React, {  useState } from "react";
import Image from "next/image";
import Link from "next/link";
import * as CONSTANTS from "@/constants";

import { usePathname } from "next/navigation";
import useDeviceSize from "@/useDeviceSize";

const Sidebar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  
  const [width, height] = useDeviceSize();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={
        width < CONSTANTS.MOBILEVIEW_WIDTH ? "flex absolute" : "flex"
      }
    >
      <div
        className={isOpen ? "flex-auto w-80 bg-blue-800 h-screen" : "hidden"}
      >
        <div className="flex flex-col">
          <div className="flex p-4 border-b-2">
            <div className="flex justify-center">
              <Image
                src="/img/avatar.png"
                alt="Picture of the author"
                width={50}
                height={50}
                className="mr-2"
              />
            </div>
            <div className="flex justify-center items-center">
              <span className="text-slate-200">Hello, User</span>
            </div>
          </div>

          <div className="flex flex-col">
            <div>
              {CONSTANTS.SIDEBAR_MENU.map((item) => (
                <Link
                  className={
                    pathname === item.href
                      ? "flex justify-between items-center p-2 bg-blue-900 hover:bg-blue-700"
                      : "flex justify-between items-center p-2 hover:bg-blue-700"
                  }
                  href={item.href}
                  key={item.href}
                >
                  <span className="text-slate-200">{item.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex-none w-4 h-screen">
        <div className="flex items-center h-screen">
          <div
            onClick={() => toggleSidebar()}
            className="flex h-24 bg-blue-800 w-full items-center hover:bg-blue-700"
          >
            <span className="text-slate-200 select-none text-center">
              {isOpen ? "<" : ">"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
