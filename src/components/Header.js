import React, { useState } from "react";
import Navbar from "./Navbar";

const Header = ({ children, isShowPin, showButtonInNavbar }) => {
  const [isShowModal, setIsShowModal] = useState(true);
  const handleClick = () => {
    setIsShowModal(!isShowModal);
  };
  return (
    <div
      className={`max-w-[25rem] h-[716px] ml-auto shadow-custom ${
        isShowModal ? "block" : "none"
      }`}
    >
      <Navbar
        isShowPin={isShowPin}
        showButtonInNavbar={showButtonInNavbar}
        handleClick={handleClick}
      />
      {children}
    </div>
  );
};

export default Header;
