import { Play } from "@/assets/images";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Modal from "react-modal";

const EntryDetail = ({ isShowEntry, setIsShowEntry }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsOpen(false);
    setIsShowEntry(false);
    document.body.style.overflow = "unset";
  };
  useEffect(() => {
    if (isShowEntry) {
      openModal();
    }
    if (!isShowEntry) {
      closeModal();
    }
  }, [isShowEntry]);
  return (
    <Modal
      ariaHideApp={false}
      className={"bg-white h-[414px] w-[313px] rounded-[4px]"}
      onRequestClose={closeModal}
      isOpen={modalIsOpen}
      style={{
        overlay: {
          backgroundColor: "rgba(0,0,0,0.8)",
          zIndex: 100,
          right:0,
          top:0,
          left:'auto',
          bottom:'auto',
          width:'25rem',
          height:'716px'
        },
        content: {
          backgroundColor: "rgba(255, 255, 255)",
          outline: "none",
          position: "absolute",
          top: "20%",
          right: "10%",
          padding: "25px 15px",
        },
      }}
    >
      <div className="text-[#0F0F0F] text-[16px] leading-[15px] font-bold text-center">
        Still Working on This?
      </div>
      <div className="text-[#0E0E0E] text-[13px] leading-[15px] font-normal text-center mt-2">
        Your timer is still going for:
      </div>
      <div className="shadow-replybox w-full rounded-[3px] p-4 mt-8 flex flex-col">
        <div className="flex justify-between items-center">
          <div className="flex flex-col items-start">
            <div className="text-xs font-bold text-[#242424] leading-[18px]">
              0001-James, Jones
            </div>
            <div className="text-[#616161] text-xs font-normal leading-[18px]">
              Matter 2133232
            </div>
          </div>
          <div className="flex justify-center items-center rounded-[4px] border-[1px] border-[#D1D1D1] py-[3px] px-2 gap-[3px]">
            <div className="text-[#767676] text-[9.42px] leading-[15px] font-normal max-w-[60px]">
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

        <div className="mt-5">
          <div className="text-black text-xs font-normal text-start">
            Time Description
          </div>
          <div className="flex justify-center items-start gap-2 w-full mt-2">
            <div className="flex justify-center items-center w-[51px] h-[36px] rounded-[2px] bg-[#f5f5f5]">
              <span className="text-[#00AC4F] text-[13px] leading-[14px] font-bold">
                0.2
              </span>
            </div>
            <textarea className="bg-[#f5f5f5] rounded-[2px] resize-none focus:outline-none p-2 text-xs text-[#242424] min-h-[51px] max-w-[198px] w-[80%]"></textarea>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-1 mt-5">
        <div className="bg-[#00B7C3] text-white rounded py-[5px] px-3 text-[13px] leading-[20px] font-normal min-w-[203px] text-center">
          Save & Close Entry
        </div>
        <div className="bg-white text-[#767676] border-[1px] border-[#767676] py-[5px] px-3 rounded text-[13px] leading-[20px] font-normal min-w-[203px] text-center">
          Save & Continue Timing
        </div>
        <div className="text-[#EB0505] text-[13px] leading-[20px] font-normal mt-2">
          Delete Entry
        </div>
      </div>
    </Modal>
  );
};

export default EntryDetail;
