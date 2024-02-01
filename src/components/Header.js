"use client"
import React, { useState } from "react";
import Navbar from "./Navbar";

const Header = ({ children, isShowPin, showButtonInNavbar,handleDraftNewEmailClick }) => {
  const [isShowModal, setIsShowModal] = useState(true);
  
  const handleClick = () => {
    setIsShowModal(false);
    console.log(isShowModal)
  };
 


  return (
    <div
      className={`max-w-[25rem] h-screen ml-auto shadow-custom ${
        isShowModal ? "block" : "hidden"
      }`}
    >
      <Navbar
        isShowPin={isShowPin}
        showButtonInNavbar={showButtonInNavbar}
        handleClick={handleClick}
        handleDraftNewEmailClick={handleDraftNewEmailClick}
      />
      {children}
    </div>
  );
};

export default Header;
