import DiscussionForm from "@/components/DiscussionForm";
import MarketStories from "@/components/MarketStories";
import Sidebar from "@/components/Sidebar";
import React from "react";
const MarketStoriesPage = () => {
  return (
    <>
      <div className="flex h-screen overflow-hidden">
        <div className="flex-auto">
          <Sidebar />
        </div>
        <div className="flex-auto w-2/3">
          <MarketStories />
        </div>
        <div className="flex-auto w-1/3">
          <DiscussionForm />
        </div>
      </div>
    </>
  );
}

export default MarketStoriesPage;