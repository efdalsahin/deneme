import React from "react";

import kombi from "../images/TR.D2CND028A1A.02-daikin-premix-ndj-tam-yogusmali-28-kw-kombi-637231586963615264 (1).jpg";

export default function NeedUs() {
  return (
    <div>
      <div className="flex justify-center h-auto items-center ">
        <div className="flex">
          <div className="flex items-center">
            <div className=" w-[500px]  text-center">
              <div className="text-gray-700 font-semibold text-4xl">
                Petekleriniz tam gücünü gösteremiyor mu? Ya da uzun zamandır
                temizliği yapılmadı mı? Belki de kombinizden garip sesler
                geliyor. Unutmayın evinizin kalbi kombinizdir.
              </div>
            </div>
          </div>
          <div className="  ">
            <div>
              <img src={kombi} alt="kombi" className="" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col text-center items-center justify-center ">
        <div className="font-bold text-3xl">Yardıma ihtiyacınız mı var?</div>
        <div className="font-bold text-3xl text-red-500 ">
          Hemen arayın: 0551 097 7479
        </div>
        <div className="font-bold text-3xl text-red-500 ">
          Hemen arayın: 0543 495 5586
        </div>
      </div>
    </div>
  );
}
