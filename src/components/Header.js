import React from "react";
import logo from "../images/logo.png";
import ContactModal from "./modals/ContactModel";

export default function Header() {
  return (
    <div className="">
      <div className="container flex justify-between mx-auto ">
        <div className="flex items-center text-3xl gap-x-4">
          <img className="object-cover w-20" src={logo} alt="logo" />
          <div className="font-bold tracking-wide text-black">ADA ISI</div>
        </div>
        <div className="flex items-center">
          <ContactModal />
        </div>
      </div>
      <hr className="bg-black h-[2px] shadow-lg shadow-black" />
    </div>
  );
}
