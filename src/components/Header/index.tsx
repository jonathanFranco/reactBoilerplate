import React from "react";
import { Link } from "react-router-dom";
import logo from "src/assets/logo.png";

export const Header = () => {
  return (
    <div className="w-100 h-100 p-5 container mx-auto flex justify-center md:justify-start">
      <Link to={"/"}>
        <img src={logo} alt="logo" width={200} height={50} />
      </Link>
    </div>
  );
};
