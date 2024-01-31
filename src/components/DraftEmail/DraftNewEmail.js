"use client";
import React from "react";
import { Formik, Form, Field } from "formik";
import { toast, ToastContainer } from "react-toastify";
const DraftNewEmail = () => {
  const initialValues = {
    matterName: "",
    matterNumber: "",
    clientName: "",
  };
  const handleSubmit = (values) => {
    // Handle form submission logic here
    console.log("Form values:", values);
  };
  const handleClick = () => {
    setTimeout(() => {
      // Display success toast
      toast.success("Matter saved successfully", {
        autoClose: true,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        // draggable: true,
        style: {
          width: "230px",
          background: "#BCFFDB ",
          text: "#242424",
          fontWeight: "700",
          lineHeight: " 28px",
        },
      });
    }, 1000);
  };
  return (
    <div className="relative w-full">
      <ToastContainer  />
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className="font-custom flex flex-col gap-y-3">
          <h2 className=" text-xs leading-normal text-[#242424] font-bold">
            ENTER MATTER INFORMATION
          </h2>
          <div className="flex flex-col">
            <label
              htmlFor="matterName"
              className=" text-xs font-normal text-[#616161] mb-2"
            >
              Matter Name:
            </label>
            <Field
              type="text"
              id="matterName"
              name="matterName"
              className=" px-[10px] pt-[5px] pb-[7px] rounded bg-[#F5F5F5] outline-none"
            />
          </div>
          <div className="flex flex-col ">
            <label
              htmlFor="matterNumber"
              className="text-xs font-normal text-[#616161] mb-2"
            >
              Matter Number:
            </label>
            <Field
              type="text"
              id="matterNumber"
              name="matterNumber"
              className=" px-[10px] pt-[5px] pb-[7px] rounded bg-[#F5F5F5] outline-none"
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="clientName"
              className="text-xs font-normal text-[#616161] mb-2"
            >
              Client Name:
            </label>
            <Field
              type="text"
              id="clientName"
              name="clientName"
              className=" px-[10px] pt-[5px] pb-[7px] rounded bg-[#F5F5F5] outline-none"
            />
          </div>
          <div className="text-center mt-5">
            <button
              onClick={handleClick}
              type="submit"
              className="w-[170px] text-sm font-normal  text-[#fff] leading-5 py-[5px] px-[12px] rounded border border-[#D1D1D1] bg-[#00B7C3] "
            >
              Save Matter
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};
export default DraftNewEmail;