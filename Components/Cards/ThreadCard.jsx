import React from "react";

function ThreadCard({ task2 }) {
  return (
    <div className="w-[65%] sm:w-[32rem] p-4 cursor-pointer transition-all duration-200 ease-in transform sm:hover:scale-105">
      <div className="bg-white rounded-lg overflow-hidden shadow-md h-[35rem]">
        <div className="bg-black text-white text-center py-2">
          <h2 className="text-lg font-[600] text-[16px] font-sans">
            {task2.asset_title}
          </h2>
        </div>
        <div className="p-4">
          <p className="text-gray-800 text-[14px]">
            Description: {task2.asset_description}
          </p>
        </div>
        <div className="bg-[#FEFFC0] flex flex-row h-[2rem] space-x-20 ">
          <p className="text-[28px]">&#8963;</p>
          <p className="font-[700] text-[20px]">Thread A</p>
        </div>
        <div className="mt-2 flex space-x-4 justify-center">
          <div className="border-solid border-2 w-[14rem] h-[8rem] rounded-lg ">
            <div className="bg-[#F2F2F2]">Sub-thread-1</div>

            <textarea
              className="rounded-t-lg resize-none w-[100%] h-[6rem] text-left border-solid border-t-2"
              type="text"
              placeholder="Enter text here"
            />
          </div>
          <div className="border-solid border-2 w-[14rem] h-[8rem] rounded-lg ">
            <div className="bg-[#F2F2F2]">Sub-thread-1</div>

            <textarea
              className="rounded-t-lg resize-none w-[100%] h-[6rem] text-left border-solid border-t-2"
              type="text"
              placeholder="Enter text here"
            />
          </div>
        </div>
        <div className="flex">
          <div className="ml-[4rem] mt-1 icons flex space-x-3">
            <img src="/1.png" alt="" />
            <img src="2.png" alt="" />
            <img src="3.png" alt="" />
            <img src="4.png" alt="" />
          </div>
          <div className="flex space-x-2 ml-[5rem]">
            <select className="text-[12px] border-solid border-2 ">
              <option value="1">Select Categ</option>
              <option value="1">hII</option>
              <option value="1">nUMBER</option>
              <option value="1">Nope</option>
            </select>
            <select className="text-[12px] border-solid border-2 p-1">
              <option value="1">Select Categ</option>
              <option value="1">hII</option>
              <option value="1">nUMBER</option>
              <option value="1">Nope</option>
            </select>
          </div>
        </div>
        <div className="btn ml-[3rem] mt-[2rem]">
          <button className="bg-blue-600 mb-[1rem] text-white text-[11px] h-[2rem] w-[5rem] rounded-xl ">
            + Sub-thread
          </button>
        </div>
        <div className="border-solid border-2 w-full h-[2rem] rounded-lg ">
          <div className="bg-[#F2F2F2]">Sub-thread-1</div>

          <textarea
            className="rounded-t-lg resize-none w-[100%] h-[6rem] text-left border-solid border-2 "
            type="text"
            placeholder="Enter text here"
          />
        </div>
      </div>
    </div>
  );
}

export default ThreadCard;
