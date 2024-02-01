"use client";

import React from "react";
import Navbar from "../../components/Navbar";
import { check, microIcon } from "../../assets/images/index";
import Image from "next/image";

import Link from "next/link";
import Header from "@/components/Header";
const RivetingAI = () => {
  return (
    <Header isShowPin={true}>
      <div className=" flex flex-col  items-center gap-y-5 px-5 pt-16 ">
        <div>
          <Image src={check} alt="" className="max-w-[10rem]" />
        </div>
        <div className="flex flex-col  gap-y-2 pb-5 ">
          <div className=" h-[106px] flex flex-col font-custom text-[#242424] text-center justify-between ">
            <h2 className=" text-base font-bold  leading-[22px] px-[53px] ">
              Welcome to RivetingAI for Lawyers!
            </h2>
            <p className="text-sm font-normal leading-5 px-[55px]">
              Maximize billable hours, cut down on admin work.
            </p>
          </div>
          <ul className=" max-w-[300px] mx-auto font-custom text-sm font-normal leading-5 text-[#242424] list-disc px-5 pt-5 ">
            <li>Automatically bill and log your time</li>
            <li>Automatically draft and respond to emails</li>
          </ul>
        </div>
        <div className="flex flex-col gap-y-2 font-custom">
          <button
            type="button"
            className=" text-sm font-bold  text-[#fff] leading-5 py-[5px] px-[12px] rounded border border-[#D1D1D1] bg-[#00B7C3]"
          >
            <Link href="/MaximizeBillable">
              <Image src={microIcon} alt="" className="w-5 inline-block" />
              Sign in with Microsoft
            </Link>
          </button>
          <button className="text-[13px] font-bold  leading-5 py-[5px] px-[12px] rounded border border-[#D1D1D1] text-[#242424]">
            Create new account
          </button>
          <button className="pt-[9px] text-sm font-normal text-[#115EA3]">
            Learn more about RivetingAI
          </button>
        </div>
      </div>
    </Header>
  );
};

export default RivetingAI;
