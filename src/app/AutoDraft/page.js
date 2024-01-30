"use client";
import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Header from "@/components/Header";
import Reply from "@/components/Reply";
import EmailForm from "@/components/EmailForm";
const AutoDraft = () => {
  const [sectionStates, setSectionStates] = useState({
    draft: true,
    reply: false,
    timekeeping: false,
  });
  const [activeTab, setActiveTab] = useState(1);
  const sectionsData = [
    { index: 1, key: "draft", label: "Draft Email" },
    { index: 2, key: "reply", label: "Reply" },
    { index: 3, key: "timekeeping", label: "Timekeeping" },
  ];
  const handleClick = (index) => {
    setActiveTab(index);
    setSectionStates((prev) => {
      const newState = { ...prev };
      sectionsData.forEach((section, idx) => {
        newState[section.key] = idx === index - 1;
      });
      return newState;
    });
  };
  return (
    <>
      <Header>
        <div className="flex flex-col items-center px-5  font-custom gap-y-5">
          <div className="flex flex-row  gap-x-4 font-normal cursor-pointer">
            {sectionsData.map((section, idx) => (
              <div
                key={section.key}
                onClick={() => handleClick(idx + 1)}
                className={`flex flex-col gap-y-1 pt-[6px] `}
              >
                <h2 className={`text-[14px] ${sectionStates[section.key] && "font-bold"}`}>
                  {section.label}
                </h2>
                <div
                  className={` ${
                    sectionStates[section.key] && `h-[3px] rounded-[1.5px]`
                  }`}
                  style={{ background: "#00B7C3" }}
                ></div>
              </div>
            ))}
          </div>
          {activeTab === 1 ? (
            <EmailForm/>
          ) : activeTab === 2 ? (
            <Reply />
          ) : (
            <div>div3</div>
          )}
        </div>
      </Header>
    </>
  );
};
export default AutoDraft;
