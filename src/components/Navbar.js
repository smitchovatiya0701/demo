import { Microsoftplugin, close, logo } from "../assets/images/index";
import React from "react";
import Image from "next/image";
const Navbar = ({ isShowPin }) => {
  return (
    <>
      <div className="max-w-[20rem] ml-auto pt-[10px] px-5 gap-x-2">
        <div className="flex flex-row items-center justify-between py-5 ">
          <div className="flex flex-row items-center gap-x-2">
            <div className="p-[6.19px] bg-[#00B7C3] rounded-[5.5px] border-[0.17px] border-[#D1D1D1]">
              <Image src={logo} alt="" className="w-[20.6px] h-[20.6px]" />
            </div>
            <div className="w-[164px]">
              <h2 className="font-custom text-xl font-bold leading-7 pl-5">
                RivetingAI
              </h2>
            </div>
          </div>
          <div className="flex flex-row gap-x-1">
            {isShowPin && (
              <button className="">
                <Image src={Microsoftplugin} alt="" className="w-8" />
              </button>
            )}
            <button className="">
              <Image src={close} alt="" className="w-8" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
