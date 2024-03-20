import React from "react";
import DiscussionCard from "./DiscussionCard";
import data from "../data/discussion.json";
import * as CONTANTS from "@/constants";

const DiscussionForm = () => {
  return (
    <div className="m-3 max-h-screen overflow-y-auto">
      <div className="text-2xl">{CONTANTS.DISCUSSION_FORM}</div>
      {data.map((discussion) => (
        <DiscussionCard key={discussion.id} discussion={discussion} />
      ))}
    </div>
  );
};

export default DiscussionForm;
