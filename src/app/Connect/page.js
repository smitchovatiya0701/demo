import React from "react";
import Navbar from "../../components/Navbar";
import Image from "next/image";
import { Outlook, R } from "../../assets/images/index";
import Link from "next/link";
import Header from "@/components/Header";
const Connect = () => {
  return (
    <>
      <Header isShowPin={true}>
        <div className="flex flex-col  items-center  px-5 pt-10 font-custom">
          <div className="flex flex-col gap-y-9 mb-14">
            <div className="flex flex-row justify-center gap-x-3">
              <div>
                <Image src={Outlook} alt="" className="w-[68.48px] h-[68.48px]" />
              </div>
              <h2 className="text-[21.753px] font-normal leading-[32.63px] tracking-[-0.218px] pt-[28px]">
                x
              </h2>
              <div className="rounded-[11.204px] bg-[#00B7C3] px-[12.61px] pt-[12.61px] pb-[8.53px] border-[0.35px] border-[#D1D1D1]">
                <Image
                  src={R}
                  alt=""
                  className="w-[42.01px] h-[42.01px] px-[5.252px] py-[3.151px]"
                />
              </div>
            </div>
            <div className="flex flex-col gap-y-4 text-center">
              <h2 className=" text-base font-bold text-[#000] leading-[22px] px-10 ">
                Connect your Outlook Inbox to RivetingAI
              </h2>
              <p className="text-xs font-normal px-[10px] text-[#707070]">
                This allows RivetingAI to track your billable time and
                autogenerate email responses
              </p>
            </div>
          </div>
          <div >
            <Link href="/Process">
              <button className="w-[241px] text-sm font-bold  text-[#fff] leading-5 py-[5px] px-[12px] rounded border border-[#D1D1D1] bg-[#00B7C3]">
                Connect
              </button>
            </Link>
          </div>
        </div>
      </Header>
    </>
  );
};

export default Connect;
