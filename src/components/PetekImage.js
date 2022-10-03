import React from "react";
import petekimage from "../images/petekgaranti.jpeg";
import video1 from "../videos/petektemizligi.mp4";
import video2 from "../videos/petektemizligi2.mp4";

export default function PetekImage() {
  return (
    <div className="bg-gray-100 ">
      <div className=" py-10 flex items-center justify-evenly ">
        <video controls width="300px">
          <source src={video1} type="video/mp4" />
          Sorry, your browser doesn't support videos.
        </video>

        <img
          className="container mx-auto w-[1200px] object-cover "
          src={petekimage}
          alt="Petek Garanti"
        />
        <video controls width="300px">
          <source src={video2} type="video/mp4" />
          Sorry, your browser doesn't support videos.
        </video>
      </div>
    </div>
  );
}
