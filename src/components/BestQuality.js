import React from "react";

export default function BestQuality() {
  return (
    <div>
      <div className="bg-slate-50 flex flex-col text-center items-center h-[400px] justify-center ">
        <div className="container m-auto text-4xl font-bold gap-y-5">
          Hizmetlerimiz
        </div>
        <div className="container flex m-auto justify-evenly gap-x-3">
          <div className="p-4 border-4 border-black rounded-lg">
            <div className="text-xl font-bold ">Kombi Bakım</div>
            <div className="text-lg font-light">
              Kombilerinizi periyodik dönemler içerisinde gelip önemli
              bakımlarını itina ile yapıyoruz.
            </div>
          </div>
          <div className="p-4 border-4 border-black rounded-lg ">
            <div className="text-xl font-bold"> Kombi Arıza</div>
            <div className="text-lg font-light">
              Kombilerinizde oluşan arızaları özenle tamir ediyor, gerekirse
              yedek parça sipariş ediyoruz.{" "}
            </div>
          </div>
          <div className="p-4 border-4 border-black rounded-lg ">
            <div className="text-xl font-bold">Petek Temizliği</div>
            <div className="text-lg font-light">
              Evinizin en önemli elemanı peteklerinizi profesyonel makineler ile
              temizliyoruz.
            </div>
          </div>
          <div className="p-4 border-4 border-black rounded-lg ">
            <div className="text-xl font-bold">Yerden Isıtma</div>
            <div className="text-lg font-light">
              Yerden ısıtmalı sistemleri itina ile temizliyoruz.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
