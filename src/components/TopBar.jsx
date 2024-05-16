import React from 'react'
import { TiArrowMinimise } from "react-icons/ti"
import { IoClose } from "react-icons/io5";
import { HiMinusSmall } from "react-icons/hi2";

function TopBar() {
  return (
    <div className="bg-blue-950 min-h-5 w-full flex text-white text-sm justify-end">
      <div className="flex justify-end gap-4 pr-4 pt-2 pb-2 ">
      <HiMinusSmall />
      <TiArrowMinimise />
      <IoClose />
      </div>
    </div>
  )
}

export default TopBar