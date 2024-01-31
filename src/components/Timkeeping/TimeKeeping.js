import { Action, DownArrow, Export } from "@/assets/images";
import Image from "next/image";
import React, { useState } from "react";
import DataTable from "react-data-table-component";

const TimeKeeping = () => {
  const [actionModal, setActionModal] = useState(false);
  const customStyles = {
    table: {
      style: {
        overflow: "auto",
        maxHeight: "350px",
      },
    },
    headRow: {
      style: {
        display: "none",
      },
    },
    rows: {
      style: {
        // borderColor: "#E0E0E0",
        borderColor: "red",
      },
    },
  };
  const tableData = [
    {
      name: "0001-James, Jones- Matter 2 ...",
      detail: "0.2 h | Draft email on motion to d...",
      time: "11:30am",
    },
    {
      name: "0001-James, Jones- Matter 2 ...",
      detail: "0.2 h | Draft email on motion to d...",
      time: "11:30am",
    },
    {
      name: "0001-James, Jones- Matter 2 ...",
      detail: "0.2 h | Draft email on motion to d...",
      time: "11:30am",
    },
    {
      name: "0001-James, Jones- Matter 2 ...",
      detail: "0.2 h | Draft email on motion to d...",
      time: "11:30am",
    },
    {
      name: "0001-James, Jones- Matter 2 ...",
      detail: "0.2 h | Draft email on motion to d...",
      time: "11:30am",
    },
    {
      name: "0001-James, Jones- Matter 2 ...",
      detail: "0.2 h | Draft email on motion to d...",
      time: "11:30am",
    },
    {
      name: "0001-James, Jones- Matter 2 ...",
      detail: "0.2 h | Draft email on motion to d...",
      time: "11:30am",
    },
    {
      name: "0001-James, Jones- Matter 2 ...",
      detail: "0.2 h | Draft email on motion to d...",
      time: "11:30am",
    },
    {
      name: "0001-James, Jones- Matter 2 ...",
      detail: "0.2 h | Draft email on motion to d...",
      time: "11:30am",
    },
    {
      name: "0001-James, Jones- Matter 2 ...",
      detail: "0.2 h | Draft email on motion to d...",
      time: "11:30am",
    },
    {
      name: "0001-James, Jones- Matter 2 ...",
      detail: "0.2 h | Draft email on motion to d...",
      time: "12:30am",
    },
  ];
  const columns = [
    {
      selector: (row) => (
        <div className="text-white">
          <input
            className="h-4 w-4 cursor-pointer"
            type="checkbox"
          />
        </div>
      ),
      width: "50px",
    },
    {
      selector: (row) => (
        <div className="flex-col justify-start items-start">
          <div className="text-[#242424] truncate text-[13px] leding-[18px] font-bold">
            {row.name}
          </div>
          <div className="text-[#616161] truncate text-[12px] leding-[16px] font-normal">
            {row.detail}
          </div>
        </div>
      ),
    },
    {
      selector: (row) => (
        <>
          <div className="flex flex-col justify-center items-end gap-3">
            <div className="text-[#616161] text-[10px] leding-[16px] font-normal">
              {row.time}
            </div>
            <div
              onClick={() => setActionModal(!actionModal)}
              onBlur={() => setActionModal(false)}
            >
              <Image src={Action} width={18} height={4} alt="not found" />
            </div>
          </div>
          {/* {actionModal && (
            <div className="shadow-light rounded py-1 flex flex-col min-w-[121px]">
              <div className="text-[#424242] text-[14px] leading-[20px] font-normal p-[6px] pr-1">
                Edit
              </div>
              <div className="text-[#424242] text-[14px] leading-[20px] font-normal p-[6px] pr-1">
                View Entry
              </div>
              <div className="text-[#424242] text-[14px] leading-[20px] font-normal p-[6px] pr-1">
                Delete
              </div>
            </div>
          )} */}
        </>
      ),
      width: "70px",
    },
  ];
  return (
    <div className="w-full flex flex-col items-start justify-center gap-2">
      <div className="flex justify-between items-center w-full px-2">
        <div className="text-[#242424] text-[12px] font-bold uppercase">
          timekeeping
        </div>
        <div className="flex justify-center items-center gap-1 bg-[#00B7C3] py-[5px] px-3 rounded">
          <Image src={Export} width={18} height={14} alt="not found" />
          <div className="text-white text-xs leading-[20px] font-normal">
            Export Timesheet
          </div>
        </div>
      </div>
      <div className="flex justify-evenly items-center p-2 w-full border-y-[1px] border-y-[#E0E0E0]">
        <div className="text-[#242424] text-[13px] leading-[20px] font-normal active:font-bold">
          Today
        </div>
        <div className="text-[#242424] text-[13px] leading-[20px] font-normal active:font-bold">
          |
        </div>
        <div className="text-[#242424] text-[13px] leading-[20px] font-normal active:font-bold">
          Yesterday
        </div>
        <div className="text-[#242424] text-[13px] leading-[20px] font-normal active:font-bold">
          |
        </div>
        <div className="flex justify-center items-center gap-1">
          <div className="text-[#242424] text-[13px] leading-[20px] font-normal active:font-bold">
            Select Date
          </div>
          <span>
            <Image src={DownArrow} width={8} height={5} alt="not found" />
          </span>
        </div>
      </div>
      <DataTable
        data={tableData}
        columns={columns}
        customStyles={customStyles}
        id="table-scroll"
      />
      <div className="flex justify-end items-center w-full border-t-[1px] pt-3 mt-2">
        <div className="text-white bg-[#00B7C3] rounded px-3 py-[5px] text-[13px] leading-[20px] font-normal">Export Today’s Timesheet</div>
      </div>
    </div>
  );
};

export default TimeKeeping;
