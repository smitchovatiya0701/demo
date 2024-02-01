"use client";
import React, { useState } from "react";
import Header from "@/components/Header";
import Reply from "@/components/Reply/Reply";
import EmailForm from "@/components/DraftEmail/EmailForm";
import TimeKeeping from "@/components/Timkeeping/TimeKeeping";
import DraftNewEmail from "@/components/DraftEmail/DraftNewEmail";
const AutoDraft = ({}) => {
  const [sectionStates, setSectionStates] = useState({
    draft: true,
    reply: false,
    timekeeping: false,
  });
  const [activeTab, setActiveTab] = useState(1);
  const [showForm, setShowForm] = useState(true);
  const [showEmailContent, setShowEmailContent] = useState(false);
  const sectionsData = [
    { index: 1, key: "draft", label: "Draft Email" },
    { index: 2, key: "reply", label: "Reply" },
    { index: 3, key: "timekeeping", label: "Timekeeping" },
  ];
  const handleDraftNewEmailClick = () => {
    setShowForm(!showForm);
  };
  const handleClick = (index) => {
    setActiveTab(index);
    setSectionStates((prev) => {
      const newState = { ...prev };
      sectionsData.forEach((section, idx) => {
        newState[section.key] = idx === index - 1;
      });
      return newState;
    });
    setShowEmailContent(index === 2 || index === 3);
  };
  return (
    <>
      <Header
        showButtonInNavbar={showEmailContent}
        handleDraftNewEmailClick={handleDraftNewEmailClick}
      >
        <div className="flex flex-col items-center px-5  font-custom gap-y-5">
          <div className="flex flex-row  gap-x-4 font-normal cursor-pointer">
            {sectionsData.map((section, idx) => (
              <div
                key={section.key}
                onClick={() => handleClick(idx + 1)}
                className={`flex flex-col gap-y-1 pt-[6px] `}
              >
                <h2
                  className={`text-[14px] ${
                    sectionStates[section.key] && "font-bold"
                  }`}
                >
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
          {activeTab === 1 &&
            (showForm ? (
              <EmailForm setShowEmailContent={setShowEmailContent} />
            ) : (
              <DraftNewEmail />
            ))}
          {activeTab === 2 && (showForm ? <Reply /> : <DraftNewEmail />)}
          {activeTab === 3 && (showForm ? <TimeKeeping /> : <DraftNewEmail />)}
        </div>
      </Header>
    </>
  );
};
export default AutoDraft;
