import DiscussionForm from "@/components/DiscussionForm";
import MarketStories from "@/components/MarketStories";
import Sidebar from "@/components/Sidebar";
import React from "react";
const MarketStories = () => {
  return (
    <>
      <div className="flex h-screen overflow-hidden">
        <div className="flex-auto">
          <Sidebar />
        </div>
        <div className="flex-auto w-3/4">
          <MarketStories />
        </div>
        <div className="flex-auto w-1/4">
          <DiscussionForm />
        </div>
      </div>
    </>
  );
}

export default MarketStories;