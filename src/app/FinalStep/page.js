import React from "react";
import Image from "next/image";
import { Icon } from "../../assets/images/index";
import Link from "next/link";

const FinalStep = () => {
  return (
    <>
        <div className=" flex flex-col items-center gap-y-3 pt-12 font-custom">
          <div className=" w-[78px] h-[78px] flex items-center justify-center mb-5 rounded-full bg-[#BEF1F4;]">
            <Image src={Icon} alt="" className="w-[48.83px] h-[48.83px]" />
          </div>
          <div className="flex flex-col gap-y-2 text-center mb-11">
            <h2 className=" text-base font-bold text-[#000] leading-[22px]  ">
              Final Step:
              <br /> Pin RivetingAI to your dashboard
            </h2>
            <p className="text-xs font-normal px-[23px] text-[#707070]">
              This allows RivetingAI to automatically track your time and
              autodraft emails
            </p>
          </div>
          <div >
            <Link href="/AutoDraft  ">
              <button className="min-w-[241px] text-sm font-bold  text-[#fff] leading-5 py-[5px] px-[12px] rounded border border-[#D1D1D1] bg-[#00B7C3]">
                Get Started
              </button>
            </Link>
          </div>
        </div>
    </>
  );
};

export default FinalStep;
