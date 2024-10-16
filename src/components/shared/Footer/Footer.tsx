import React from "react";
import Logo from "../Logo/Logo";

const Footer = () => {
  return (
    <div className="w-full bg-secondary px-20 py-10 text-white">
      <div className="container flex justify-around gap-20 items-center">
        <div className="w-1/4 text-start flex flex-col items-start">
          <Logo />
          <p className="text-sm mt-5">
            Fast Mobile Repair offers quick and reliable solutions for
            smartphone issues. Customers can book repairs for various brands and
            models, from screen replacements to battery fixes, all handled by
            certified technicians.
          </p>
        </div>
        <div className="flex flex-grow pl-20 justify-between">
          <div className="">
            <p>About</p>
            <p>Home</p>
            <p>Secvices</p>
            <p>Contact</p>
          </div>
          <div className="">
            <p>About</p>
            <p>Home</p>
            <p>Secvices</p>
            <p>Contact</p>
          </div>
          <div className="">
            <p>About</p>
            <p>Home</p>
            <p>Secvices</p>
            <p>Contact</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
