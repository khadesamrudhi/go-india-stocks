'use client';

import DiscussionForm from "@/components/DiscussionForm";
import MarketStories from "@/components/MarketStories";
import Sidebar from "@/components/Sidebar";
import React from "react";
import * as CONSTANTS from '@/constants';

import MobileLoader from "@/components/MobileLoader";
import useDeviceSize from "@/useDeviceSize";

const Home = () => {
  const [width, height] = useDeviceSize();

  return (
    <>
      <div className="flex h-screen overflow-hidden">
        <div className="flex-initial">
          <Sidebar />
        </div>
        {width < CONSTANTS.MOBILEVIEW_WIDTH ? (
          <>
            <MobileLoader />
          </>
        ) : (
          <>
            <div className="flex-auto w-2/3">
              <DiscussionForm />
            </div>
            <div className="flex-auto w-1/3">
              <MarketStories />
            </div>
          </>
        )}
      </div >
    </>
  );
}

export default Home;