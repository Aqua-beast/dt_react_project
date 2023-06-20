import React from "react";

function Navbar() {
  return (
    <div className="bg-[#F0F0F0] w-[145%] sm:w-full flex flex-row justify-between p-4 px-16 left-4 right-4">
      <div className="logo">
        <img
          src="https://deepthought.education/assets/images/logo/logo.svg"
          alt=""
        />
      </div>
      <div className="items flex flex-row space-x-4">
        <div className="bg-[#3683F0] w-[30px] h-[32.37px] rounded-full">
          <img className="p-[6px] px-[5px] pt-[7px]" src="/house.png" alt="" />
        </div>
        <div className="bg-[#3683F0] w-[30px] h-[32.37px] rounded-full">
          <img className="p-[6px] px-[5px] pt-[7px]" src="/tools.png" alt="" />
        </div>
        <div className="">
          <img className="h-[30px]" src="/Vector.png" alt="" />
        </div>
        <div className="">
          <img className="h-[30px]" src="/beauty.png" alt="" />
        </div>
        <div className="">
          <img
            className="text-[#3683F0]"
            width="32"
            height="32"
            src="https://img.icons8.com/windows/32/menu-2.png"
            alt="menu-2"
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
