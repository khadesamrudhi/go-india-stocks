import React from "react";

import DiscussionForm from "@/components/DiscussionForm";
import MarketStories from "@/components/MarketStories";
import Link from "next/link";
import { usePathname } from "next/navigation";

import * as CONSTANTS from "@/constants";

const MobileLoader = () => {
  const pathname = usePathname();
  return (
    <>
      <div className="flex flex-col">
        <div className="flex w-screen">
          {CONSTANTS.SIDEBAR_MENU.map((item) => (
            <Link
              href={item.href}
              key={item.href}
              className={
                pathname === item.href
                  ? "flex justify-between items-center text-center w-full h-10 border-b-4 border-red-700 bg-blue-900 hover:bg-blue-700"
                  : "flex justify-between items-center text-center w-full h-10 bg-blue-800 hover:bg-blue-700"
              }
            >
              <span className="flex-auto text-slate-200">{item.name}</span>
            </Link>
          ))}
        </div>
        {pathname === "/" ? <DiscussionForm /> : <MarketStories />}
      </div>
    </>
  );
};

export default MobileLoader;
