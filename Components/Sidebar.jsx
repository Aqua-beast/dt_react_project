import React, { useState } from "react";

function Sidebar() {
  const [open, setopen] = useState(false);
  return (
    <div
      className="cursor-pointer"
      onClick={() => {
        setopen(!open);
      }}
    >
      <div className="bg-[#000000] h-[2rem] top-right-rounded">
        <div className={`${open ? "flex" : "hidden"} m-auto  text-white`}>
          Journey board
        </div>
      </div>
      <div
        className={`bg-[#FDFDFD]  duration-1000 ${
          open ? "w-[20rem]" : "w-[6rem]"
        } h-[23rem] border-solid border-black border-2`}
      >
        <div className={`${open?"flex flex-col":"hidden"} justify-center items-center `}>
        <p className="font-[600] mb-4">Explore the world of management</p>
        <ul>
          <li>&#8226; Technical Project Management</li>
          <li>&#8226; Threadbuild</li>
          <li>&#8226; Structure your pointers</li>
          <li>&#8226;4SA Method</li>
        </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
