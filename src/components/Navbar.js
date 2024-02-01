import { Microsoftplugin, Plus, close, logo } from "../assets/images/index";
import React from "react";
import Image from "next/image";
const Navbar = ({ isShowPin, showButtonInNavbar,handleClick,handleDraftNewEmailClick }) => {
  
  return (
    <>
      <div className="pt-[10px] px-5 gap-x-2 font-custom">
        <div className="flex flex-row items-center justify-between py-5 ">
          <div className="flex flex-row items-center gap-x-4">
            <div className="p-[6.19px] bg-[#00B7C3] rounded-[5.5px] border-[0.17px] border-[#D1D1D1]">
              <Image src={logo} alt="" className="w-[20.6px] h-[20.6px]" />
            </div>
            <h2 className=" text-xl font-bold leading-7">
              RivetingAI
            </h2>
          </div>
          <div className="flex flex-row gap-x-1">
            {isShowPin && (
              <button 
             
              >
                <Image src={Microsoftplugin} alt="" className="w-8" />
              </button>
            )}
            {showButtonInNavbar &&   (
              <button  
              onClick={() =>handleDraftNewEmailClick()}
              className="text-[11.639px] text-[#FFFFFF] font-normal leading-[17.732px] py-[4px] pl-[2px] pr-[6px] rounded-[1.913px] bg-[#00B7C3]">
                <Image src={Plus} alt="" className="w-5 inline-block" />
                New Matter
              </button>
            )}
            <button onClick={()=>handleClick()}>
              <Image src={close} alt="" className="w-8" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
