import React from "react";
import { IoIosSearch } from "react-icons/io";
import { MdLocalPhone } from "react-icons/md";
import { MdMoreVert } from "react-icons/md";
import { LuPanelRight } from "react-icons/lu";

function TopChatBar() {
  return (
    <div className=" bg-gray-800 h-12 text-slate-200 flex w-full pt-1 pl-1 overflow-hidden">
      <div className="pl-2 w-3/4">
        <b className=" font-medium text-sm">Tilak </b>
        <div className="text-gray-500 text-xs ">last seen recently</div>
      </div>
      <div className=" text-xl flex w-1/4 gap-5 pt-2 text-gray-500 justify-end pr-2">
        <IoIosSearch />
        <MdLocalPhone />
        <LuPanelRight />
        <MdMoreVert />
      </div>
    </div>
  );
}

export default TopChatBar;
