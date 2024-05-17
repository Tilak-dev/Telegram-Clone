import React from 'react'
import { MdAttachFile } from "react-icons/md";
import { CiFaceSmile } from "react-icons/ci";
import { PiMicrophoneThin } from "react-icons/pi";

function TypeChat() {
  return (
    <div className='bg-gray-800 h-12 text-slate-200 flex w-full absolute bottom-0 pt-2'>
      <div className="text-3xl flex w-1/12 font-thin  text-gray-500 justify-center ">
        <MdAttachFile />
      </div>
      <div className="w-9/12 ">
        <textarea rows={"auto"} type="text" placeholder='Write a message...' className=' w-8/12 text-xs bg-inherit font-normal resize-none text-gray-500 focus:outline-none  overflow-hidden ' />
      </div>
      <div className="w-2/12 flex justify-end text-2xl gap-4 pr-3">
      <CiFaceSmile />
      <PiMicrophoneThin />
      </div>
    </div>
  )
}

export default TypeChat