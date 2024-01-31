import { Plus, Search } from "@/assets/images";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import SearchAll from "./SearchAll";

const ChangeMatter = ({
  isShowChangeMatter,
  setIsShowChangeMatter,
  setIsShowEntry,
}) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(1);
  const openModal = () => {
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsOpen(false);
    setIsShowChangeMatter(false);
    document.body.style.overflow = "unset";
  };
  useEffect(() => {
    if (isShowChangeMatter) {
      openModal();
    }
    if (!isShowChangeMatter) {
      closeModal();
    }
  }, [isShowChangeMatter]);
  return (
    <Modal
      ariaHideApp={false}
      className={"bg-white h-[480px] w-[313px] rounded-[4px]"}
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
          width:'20rem',
          height:'716px'
        },
        content: {
          backgroundColor: "rgba(255, 255, 255)",
          outline: "none",
          position: "absolute",
          top: "15%",
          right: "3px",
          padding: "15px",
        },
      }}
    >
      <div className="flex justify-between items-center">
        <div className="text-black text-[14px] leading-[15px] font-bold">
          Change Client-Matter
        </div>
        <div
          className="flex justify-center items-center rounded-sm bg-[#00B7C3] px-1 py-[2px] cursor-pointer"
          onClick={() => {
            setIsShowEntry(true);
            closeModal();
          }}
        >
          <Image src={Plus} height={16} width={16} alt="not found" />
          <div className="text-xs leading-[18.94px] text-white">New Matter</div>
        </div>
      </div>
      <div className="flex justify-between items-center rounded-b-[4px] border-b-2 border-b-[#0F6CBD] bg-[#F5F5F5] px-[10px] py-2 mt-4">
        <input
          type="text"
          className="outline-none focus:outline-none bg-[#F5F5F5] text-[14px] leading-[20px]"
          placeholder="Type to search"
        />
        <Image src={Search} width={20} height={20} alt="not found" />
      </div>
      <div className="flex justify-start items-center gap-3 mt-3">
        <div
          className="flex flex-col gap-y-[2px] cursor-pointer min-h-6"
          onClick={() => setActiveTab(1)}
        >
          <div
            className={`${
              activeTab === 1 ? "font-bold" : "font-normal"
            } text-[14px] leading-[20px]`}
          >
            Search all
          </div>
          <div
            className={`${
              activeTab === 1
                ? "block h-[2px] bg-[#0F6CBD] rounded-sm"
                : "hidden"
            }`}
          ></div>
        </div>
        <div
          className="flex flex-col gap-y-[2px] cursor-pointer min-h-6"
          onClick={() => setActiveTab(2)}
        >
          <div
            className={`${
              activeTab === 2 ? "font-bold" : "font-normal"
            } text-[14px] leading-[20px]`}
          >
            Recent
          </div>
          <div
            className={`${
              activeTab === 2
                ? "block h-[2px] bg-[#0F6CBD] rounded-sm"
                : "hidden"
            }`}
          ></div>
        </div>
      </div>
      {activeTab === 1 ? <SearchAll /> : <div>div2</div>}
    </Modal>
  );
};

export default ChangeMatter;
