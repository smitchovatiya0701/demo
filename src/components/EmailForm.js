"use client";
import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import Link from "next/link";
import Spinners from "./Spinners";
import Emailcontent from "./EmailContent";
const EmailForm = () => {
  const initialValues = {
    recipientName: "",
    recipientRole: "",
    emailTone: "",
    summarizeEmail: "",
  };
  const emailToneOptions = [
    { value: "formal", label: "Formal" },
    { value: "informal", label: "Informal" },
    // Add more options as needed
  ];
  const [showSpinner, setShowSpinner] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(true);
  const handleSubmit = async (values) => {
    // Set the submitting state to true
    setIsSubmitting(false);
    // Simulate a delay (you can replace this with your actual API call)
    await new Promise((resolve) => setTimeout(resolve, 1000));
    // Handle the form submission logic here (e.g., make API call)
    console.log("Form values:", values);
    // Reset the form and set the submitting state to false
    setIsSubmitting(false);
    // Handle the form submission logic here
    console.log("Form values:", values);
    setShowSpinner(false);
  };
  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className=" font-custom  flex flex-col gap-y-3">
          <h2 className=" text-xs text-[#242424] font-bold">
            AUTO-DRAFT YOUR EMAIL
          </h2>
          <div className="flex flex-row gap-x-3">
            <div>
              <label
                htmlFor="recipientName"
                className="text-xs font-normal text-[#616161] mb-2"
              >
                Recipient Name:
              </label>
              <Field
                type="text"
                id="recipientName"
                name="recipientName"
                className="w-[132px] px-[10px] pt-[5px] pb-[7px] rounded bg-[#F5F5F5] outline-none"
              />
            </div>
            <div>
              <label
                htmlFor="recipientRole"
                className="text-xs font-normal text-[#616161] mb-2"
              >
                Recipient’s Role:
              </label>
              <Field
                type="text"
                id="recipientRole"
                name="recipientRole"
                placeholder="e.g.,client,opposing counsel"
                className="w-[132px] px-[10px] pt-[5px] pb-[7px] font-custom placeholder:text-[9px] rounded bg-[#F5F5F5] outline-none   placeholder:text-[#A4A4A4] font-normal"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="emailTone"
              className="text-xs font-normal text-[#616161] block mb-2"
            >
              Email Tone:
            </label>
            <Field
              as="select"
              id="emailTone"
              name="emailTone"
              className="w-full text-[12px] leading-5 h-[32px]  px-[12px] pt-[5px] pb-[7px] rounded bg-[#F5F5F5] outline-none"
            >
              <option value="" disabled className="  ">
                Select
              </option>
              {emailToneOptions.map((option) => (
                <option key={option.value} value={option.value} className="  ">
                  {option.label}
                </option>
              ))}
            </Field>
          </div>
          <div>
            <label
              htmlFor="summarizeEmail"
              className="text-xs font-normal text-[#616161] block mb-2"
            >
              Summarize Email:
            </label>
            <Field
              as="textarea"
              id="summarizeEmail"
              name="summarizeEmail"
              className={`w-full  ${
                showSpinner ? "h-[84px]" : "h-[51px]"
              } text-[10px] px-[10px]  rounded bg-[#F5F5F5] outline-none  resize-none`}
            />
          </div>
          <div className=" ">
            {isSubmitting ? (
              <div className="text-center">
                {" "}
                <button
                  type="submit"
                  className={
                    "w-[170px] text-sm font-bold  text-[#fff] leading-5 py-[5px] px-[12px] rounded border border-[#D1D1D1] bg-[#00B7C3] "
                  }
                >
                  Draft Email
                </button>
              </div>
            ) : showSpinner ? (
              <Spinners />
            ) : (
              <div className="">
                <Emailcontent />
              </div>
            )}
          </div>
        </Form>
      </Formik>
    </div>
  );
};
export default EmailForm;