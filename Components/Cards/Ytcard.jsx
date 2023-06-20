import React from "react";

function Ytcard({ task1 }) {
  return (
    <div className="w-[65%] sm:w-[32rem] p-4 cursor-pointer transition-all duration-200 ease-in transform sm:hover:scale-105">
      <div className="bg-white rounded-lg overflow-hidden shadow-md h-[35rem]">
        <div className="bg-black text-white text-center py-2">
          <h2 className="text-lg font-[600] text-[16px] font-sans">
            {task1.asset_title}
          </h2>
        </div>
        <div className="p-4">
          <p className="text-gray-800 text-[14px]">
            Description:{task1.asset_description}
          </p>
        </div>
        <div className="embed-responsive aspect-w-16 aspect-h-9">
          <iframe
            className="w-[32rem] h-[20rem] rounded-lg"
            src={task1.asset_content}
            title="YouTube video"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Ytcard;
