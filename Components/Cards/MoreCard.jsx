import Link from "next/link";
import React from "react";

function MoreCard({ task4 }) {
  return (
    <div className="w-[65%] sm:w-[32rem] p-4 cursor-pointer transition-all duration-200 ease-in transform sm:hover:scale-105">
      <div className="bg-white rounded-lg overflow-hidden shadow-md h-[35rem]">
        <div className="bg-black text-white text-center py-2">
          <h2 className="text-lg font-[600] text-[16px] font-sans">
            {task4.asset_title}
          </h2>
        </div>
        <div className="p-4">
          <p className="text-gray-800 text-[14px]">
            Description : {task4.asset_description}
          </p>
        </div>
        <hr />
        <div className="flex space-x-4  m-4 h-[2rem] bg-[#F2F2F2]">
          <div className="text-[28px]">&#8963;</div>
          <div className="mt-[3px]">Introduction</div>
        </div>
        <div className="m-4">
          <p className="text-[14px]">
            The 4SA Method , How to bring a idea into progress ?
          </p>
        </div>
        <Link href={task4.asset_content} prefetch={false}>
          <div className="hover:text-blue-200 text-right mr-4 cursor-pointer">
            See More
          </div>
        </Link>
        <div className="flex space-x-4  m-4 h-[2rem] bg-gray-50 border-solid border-2">
          <div className="text-[28px]">&#8963;</div>
          <div className="mt-[3px]">Introduction</div>
        </div>
        <div className="m-4">
          <p className="text-[14px]">
            How are you going to develop your stratergy ? Which method are you
            going to use to develop a stratergy ? What if the project is
            lengthy?
          </p>
        </div>
        <Link href={task4.asset_content} prefetch={false}>
          <div className="hover:text-blue-400 text-right mr-4 cursor-pointer">
            See More
          </div>
        </Link>
        <div className="flex justify-end">
          <div className="flex space-x-4  m-4 h-[2rem] w-[70%] bg-gray-50  border-solid border-2">
            <div className="mt-[3px] ">Introduction</div>
          </div>
        </div>
        <div className="m-4">
          <p className="ml-[5rem] text-[11px] mt-[-26px]">
            You have a concept , How will you put into progress?
          </p>
        </div>
      </div>
    </div>
  );
}

export default MoreCard;
