import React from "react";
import Image from "next/image";

const MarketCard = ({ story }) => {
  return (
    <div className="m-3 p-5 rounded-lg shadow min-w-56 max-w-lg">
      <div className="flex flex-col w-fit mx-auto">
        <div className="flex-auto w-fit">
          <Image
            src="/img/cardbg.jpeg"
            alt="Market Stories BG"
            width={250}
            height={0}
            style={{ height: "auto" }}
          />
        </div>
        <div className="flex flex-col pt-4 w-fit">
          <div className="flex-auto font-bold inline w-fit">{story.Title}</div>
          <div className="flex-auto text-xs">{story.Content}</div>
        </div>
      </div>
    </div>
  );
};

export default MarketCard;
