import { Play } from "@/assets/images";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import ChangeMatter from "./ChangeMatter";

const Reply = () => {
  const [isShowChangeMatter, setIsShowChangeMatter] = useState(false);
  return (
    <>
      <div className="flex flex-col w-full h-full mt-3 gap-2">
        <div className="flex justify-between items-center w-full">
          <div className="text-[#242424] text-xs font-bold uppercase">
            draft reply
          </div>
          <div
            className="flex justify-center items-center gap-1 cursor-pointer"
            onClick={() => setIsShowChangeMatter(!isShowChangeMatter)}
          >
            {/* <Image
    
                    /> */}
            <span className="text-[#00B7C3] text-xs font-bold leading-[18px]">
              Change Client-Matter
            </span>
          </div>
        </div>
        <div className="flex justify-between items-center shadow-replybox w-full rounded-[3px] p-2">
          <div className="flex flex-col items-center">
            <div className="text-xs font-bold text-[#242424] leading-[18px]">
              0001-James, Jones
            </div>
            <div className="text-[#616161] text-xs font-normal leading-[18px]">
              Matter 2133232
            </div>
          </div>
          <div className="flex justify-center items-center rounded-[4px] border-[1px] border-[#D1D1D1] py-[3px] px-2 gap-[3px]">
            <div className="text-[#767676] text-[9.42px] leading-[15px] font-normal max-w-[52px]">
              TIMER{" "}
              <span className="text-[#00AC4F] text-[13.29px] leading-[15px] font-normal">
                00:22:06
              </span>
            </div>
            <div className="flex flex-col items-center gap-[2px]">
              <div className="relative w-[14px] h-[14px] bg-[#00AC4F]">
                <Image
                  src={Play}
                  width={7}
                  height={7}
                  alt="not found"
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                />
              </div>
              <div className="relative w-[14px] h-[14px] bg-[#E91111]">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[6px] h-[6px] bg-white"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end items-center w-full">
          <div className="flex justify-center items-center gap-1">
            <div className="text-xs text-[#242424] font-normal">
              Include time entry
            </div>
            <label class="switch mt-1">
              <input type="checkbox" />
              <span class="slider"></span>
            </label>
          </div>
        </div>
        <div className="text-black text-xs font-normal text-start">
          Time Description
        </div>
        <div className="flex justify-center items-start gap-2 w-full">
          <div className="flex justify-center items-center w-[51px] h-[36px] rounded-[2px] bg-[#f5f5f5]">
            <span className="text-[#00AC4F] text-[13px] leading-[14px] font-bold">
              0.2
            </span>
          </div>
          <textarea className="bg-[#f5f5f5] rounded-[2px] resize-none focus:outline-none p-2 text-xs text-[#242424] min-h-[51px] max-w-[198px] w-[80%]"></textarea>
        </div>
        <div>
          <span className="text-[#00AC4F] text-[11px] leading-[15px] font-normal cursor-pointer">
            Save & Close Entry
          </span>
          <span className="text-black text-[11px] leading-[15px] font-normal mx-2">
            |
          </span>
          <span className="text-[#FF406E] text-[11px] leading-[15px] font-normal cursor-pointer">
            Delete Entry
          </span>
        </div>
        <div className="flex justify-between items-center">
          <div className="text-[#616161] font-bold text-xs">
            Suggested Reply
          </div>
          <div className="rounded-[4px] bg-[#C496FF] py-[3px] px-2 flex justify-center items-center">
            {/* <Image
                /> */}
            <div className="text-white text-xs leading-[18px]">Redraft</div>
          </div>
        </div>
        <div className="rounded-[4px] border-[1px] border-[#D1D1D1] max-h-[250px] max-w-[280px] w-full py-[10px] px-4">
          <div className="text-xs leading-5">
            Hello Diane, I would love to meet to discuss the litigation matter
            from last Friday. Can we meet this coming Friday to discuss? I’m
            available at 5167324900. Thanks Oliver
          </div>
        </div>
        <hr />
        <div className="flex justify-end w-full gap-x-2 font-custom text-[13px] font-normal">
          <Link href="">
            <button className="w-[118px]   text-[#242424] leading-5 py-[5px] px-[12px] rounded border border-[#D1D1D1] text-nowrap ">
              Draft New Email
            </button>
          </Link>
          <Link href="">
            <button className="w-[127px]   text-[#fff] leading-5 py-[5px] px-[12px] rounded border border-[#FFFFFF] bg-[#00B7C3] text-nowrap">
              Copy into Outlook
            </button>
          </Link>
        </div>
      </div>
      <ChangeMatter isShowChangeMatter={isShowChangeMatter} setIsShowChangeMatter={setIsShowChangeMatter} />
    </>
  );
};

export default Reply;
