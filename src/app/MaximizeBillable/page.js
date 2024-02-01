import React from "react";
import Navbar from "../../components/Navbar";
import { FastForward, R, searchIcon } from "../../assets/images/index";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";

const MaximizeBillable = () => {
  return (
    <>
      <Header isShowPin={true}>
        <div className=" flex flex-col  items-center gap-y-8 px-5  pt-10 font-custom">
          <div className="rounded-[13.833px] bg-[#00B7C3] px-[15.56px] pt-[15.56px] pb-[10.53px] border-[0.432px] border-[#D1D1D1]">
            <Image src={R} alt={""} className=" w-[38.906px] h-[44.094px]" />
          </div>
          <div>
            <h2 className="text-[#000] text-base font-bold leading-[22px] px-10 text-center">
              Maximize Billable Hours with RivetingAI
            </h2>
          </div>
          <div className=" flex flex-col gap-y-6 p-5 text-[#707070] rounded-xl border border-[#707070] mb-10">
            <div className="flex flex-row gap-x-3 ">
              <Image src={searchIcon} alt={""} className="w-6 h-6" />
              <div className="flex flex-col gap-y-1">
                <h3 className="text-sm font-bold ] text-nowrap">
                  Automatically logs billable time
                </h3>
                <p className="text-[10px] font-normal leading-[14px]">
                  RivetingAI automatically tracks your email communications and
                  logs your time to the correct client and matter number
                </p>
              </div>
            </div>
  
            <div className="flex flex-row gap-x-3 ">
              <Image src={FastForward} alt={""} className="w-6 h-6" />
  
              <div className="flex flex-col gap-y-1">
                <h3 className="text-sm font-bold ] text-nowrap">
                  Autodraft email responses
                </h3>
                <p className="text-[10px] font-normal leading-[14px]">
                  RivetingAI automatically drafts responses to your emails to save
                  you time on administrative tasks
                </p>
              </div>
            </div>
          </div>
          <div >
            <Link href="/Connect">
              <button className="min-w-[241px] text-sm font-bold  text-[#fff] leading-5 py-[5px] px-[12px] rounded border border-[#D1D1D1] bg-[#00B7C3]">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </Header>
    </>
  );
};

export default MaximizeBillable;
