import React from "react";
import logo from "../images/logo.png";
import arkaplan from "../images/arkaplan.jpg";

export default function HeroAction() {
  return (
    <div className="flex  items-center mx-auto justify-center ">
      <img
        src={arkaplan}
        alt="arkaplan"
        className="h-[400px] w-full object-cover opacity-70"
      />
      <div className="absolute flex justify-evenly w-3/5 items-center">
        <div className="flex-initial w-2/6  ">
          <img src={logo} alt="logo" />
        </div>
        <div className="flex-initial w=3/6 flex-col  items-center text-center justify-between">
          <div>
            <p className="font-bold tracking-tighter text-3xl md:text-5xl lg:text-7xl xl:text-9xl">
              ADA ISI
            </p>
          </div>
          <div>
            <p className="font-bold tracking-tighter text-red-500 text-lg md:text-1xl lg:text-3xl xl:text-5xl ">
              Teknik Servis
            </p>
          </div>
          <div className="flex  text-xl font-semibold justify-evenly">
            <div className="flex-col flex">
              <div className="">Kombi Bakım</div>
              <div>Kombi Arıza</div>
            </div>
            <div className="flex-col flex">
              <div>Petek Temizliği</div>
              <div>Yerden Isıtma</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
