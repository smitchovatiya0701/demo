import React from "react";
import Navbar from "./Navbar";

const Header = ({ children, isShowPin, showButtonInNavbar }) => {
  return (
    <div className="max-w-[25rem] h-[716px] ml-auto shadow-custom">
      <Navbar isShowPin={isShowPin} showButtonInNavbar={showButtonInNavbar} />
      {children}
    </div>
  );
};

export default Header;
