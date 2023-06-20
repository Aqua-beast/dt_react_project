import React from "react";
import Ytcard from "./Cards/Ytcard";
import ThreadCard from "./Cards/ThreadCard";
import MoreCard from "./Cards/MoreCard";
import Contentcard from "./Cards/Contentcard";

function AssetContainer({ tasks }) {
  console.log(tasks);
  return (
    <div className="flex flex-wrap justify-center">
      <Ytcard task1={tasks[0]} />
      <ThreadCard task2={tasks[1]} />
      <Contentcard task3={tasks[2]} />
      <MoreCard task4={tasks[3]} />
    </div>
  );
}

export default AssetContainer;
