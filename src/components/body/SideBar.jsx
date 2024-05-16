import React from "react";
import { IoMenuOutline } from "react-icons/io5";
import Massage from "./chat/Massage";

function SideBar() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-800 w-2/6 border-r-[1px] border-black pl-3  gap-y-2">
      <div className="flex text-gray-600 gap-4 pt-2 w-full">
        <div className="text-gray-600 text-3xl font-light">
          <IoMenuOutline />
        </div>
        <div>
          <input
            type="text"
            placeholder="Search"
            className=" bg-gray-600 p-2 text-xs rounded-3xl pl-4 w-[340px]"
          />
        </div>
      </div>
      <div className="w-full flex flex-col gap-y-3">
        <Massage />
      </div>
    </div>
  );
}

export default SideBar;
