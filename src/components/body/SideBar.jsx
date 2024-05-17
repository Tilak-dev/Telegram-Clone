import React from "react";
import { IoMenuOutline } from "react-icons/io5";
import Massage from "./chat/Massage";

function SideBar() {
  return (
    <div className="flex flex-col h-full max-h-screen bg-gray-800 w-2/6 border-r-[1px] border-black pl-3  gap-y-2">
      <div className="flex text-gray-600 gap-4 pt-2 pb-3 w-full">
        <div className="text-gray-600 text-3xl font-light">
          <IoMenuOutline />
        </div>
        <div className="w-10/12">
          <input
            type="text"
            placeholder="Search"
            className=" bg-gray-600 p-2 text-xs rounded-3xl pl-4 w-full"
          />
        </div>
      </div>
      <div className="overflow-scroll overflow-x-hidden scroll-smooth no-scroll">
        <div className="w-full flex  flex-col gap-y-4  h-full ">
          <Massage />
        </div>
      </div>
    </div>
  );
}

export default SideBar;
