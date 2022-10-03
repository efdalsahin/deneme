import React from "react";
import ContactModal from "./modals/ContactModel";

export default function Services() {
  return (
    <div className="bg-slate-50 flex flex-col text-center items-center h-[400px] justify-center gap-8">
      <div className="flex font-semibold ">Hizmetlerimiz</div>

      <div className="flex font-bold text-5xl">
        Size nasıl yardımcı olabiliriz?
      </div>

      <div className="text-gray-700 font-semibold text-lg">
        Rutin bakım ve acil onarım deneyimlerini kaygısız hale getirme konusunda
        uzmanız. Bir sıkıntınız olduğunu düşünüyorsanız hemen arayın ve bilgi
        edinin.
      </div>

      <div className=" text-red-600 font-semibold text-2xl">
        Bütün bakım, onarım, petek temizliği ve yerden ısıtma işlemlerimiz
        Sakarya ve diğer tüm ilçeleri için mevcuttur.
      </div>
      <ContactModal />
    </div>
  );
}
