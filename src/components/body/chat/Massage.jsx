import React from "react";
import data from "./data.js";

function Massage() {
  return <>
  {
    data.map((chat)=>{
      
      return <div className="flex w-full h-10 overflow-hidden" key={chat.id}>
      <div className=" mb-2">
        <div className=" w-[50px]">
          <img
            src={chat.img}
            alt="pic"
            className=" min-h-10 w-10 rounded-full "
          />
        </div>
      </div>
      <div className=" w-10/12">
        <div className="flex ">
          <div className=" text-gray-300 font-semibold text-[13px] w-9/12">
            {chat.name}
          </div>
          <div className="w-1/12 grid place-items-end">
            <div className="text-gray-500 text-xs w-1/12 grid ">21:09</div>
          </div>
        </div>
        <div className="w-10/12  text-gray-400 text-xs text-nowrap overflow-hidden">
          <p>
            {chat.description}
          </p>
        </div>
      </div>
    </div>
    })
  }
  </>;
}

export default Massage;
