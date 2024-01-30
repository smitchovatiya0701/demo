import Link from "next/link";
import { Redrafts } from "@/assets/images/index";
import Image from "next/image";
const Emailcontent = () => {
  return (
    <div className="font-custom">
      <div className="flex justify-between items-center mb-2">
        <div className="text-[#616161] font-bold text-xs">Suggested Reply</div>
        <div className="rounded-[4px] bg-[#C496FF] py-[3px] px-2 flex justify-center items-center">
          <Image src={Redrafts} className="w-[14px] h-[14px]" />
          <div className="text-white text-xs leading-[18px]">Redraft</div>
        </div>
      </div>
      <div className="  rounded-[4px] border-[1px] border-[#D1D1D1] max-h-[250px] max-w-[280px] w-full py-[10px] px-4">
        <div className="flex flex-col items-start gap-y-[7px]">
          <div className="text-xs font-bold text-[#242424] leading-6">
            <h1>Subject: Meeting on Friday</h1>{" "}
          </div>
          <div className="text-xs  leading-5">
            <spna className='block mb-3'>Hello Diane,</spna> I would love to meet to discuss the litigation matter
            from last Friday. Can we meet this coming Friday to discuss?<span className="block mb-3">I’m
            available at 5167324900.</span>  Thanks<br/> Oliver
          </div>
        </div>
      </div>
      <div className="flex flex-row  gap-x-2 font-custom text-[13px] font-normal leading-5 float-end ">
        <div className="pt-5">
          <Link href="">
            <button className="w-[118px]   text-[#242424]  py-[5px] px-[12px] rounded border border-[#D1D1D1] text-nowrap ">
              Draft New Email
            </button>
          </Link>
        </div>
        <div className="pt-5">
          <Link href="">
            <button className="w-[127px]   text-[#fff]  py-[5px] px-[12px] rounded border border-[#FFFFFF] bg-[#00B7C3] text-nowrap">
              Copy into Outlook
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Emailcontent;









