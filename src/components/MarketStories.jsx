import React from "react";
import MarketCard from "./MarketCard";
import * as CONTANTS from "@/constants";
import data from '@/data/marketstories.json';

const MarketStories = () => {
  return (
    <div className="m-3 max-h-screen overflow-y-auto">
      <div className="text-2xl">{CONTANTS.MARKET_STORIES}</div>
      {data.map((story) => (
        <MarketCard key={story.id} story={story} />
      ))}
    </div>
  );
};

export default MarketStories;
