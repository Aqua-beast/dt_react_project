import React from "react";

function Sidebar2() {
  let arr = ["N", "o", "t", "i", "c", "e", "B", "o", "a", "r", "d"];
  return (
    <div className="mt-6">
      <div className="h-[15rem] w-[3rem] bg-black right-[3rem] absolute text-white rounded-l-3xl">
        <div className="">
          <img className="m-[0.9rem]" src="/icon.png" alt="" />
          {arr.map((word, index) => (
            <p className="text-[11px] font-extrabold ml-[17px]" key={index}>{word}</p>
          ))}
        </div>
      </div>
      <div className="h-[15rem] w-[3rem] bg-gray-200 right-0 absolute ">
        
      </div>
    </div>
  );
}

export default Sidebar2;
