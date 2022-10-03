import React from "react";

export default function Footer() {
  return (
    <footer class="bg-gray-200 text-center lg:text-left">
      <div class="text-gray-700 text-center p-4">
        © 2021 Copyright:
        <a class="text-gray-800" href="https://tailwind-elements.com/">
          ADA ISI KOMBİ BAKIM VE ONARIM
        </a>
      </div>
      <hr className="h-[2px] bg-black" />
      <div className="flex justify-end">
        <a
          className="transition-colors hover:text-red-500"
          to="chart"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/muhammet-efdal-%C5%9Fahin-aa19101b7/?trk=public_profile_browsemap_profile-result-card_result-card_full-click&originalSubdomain=tr"
        >
          Created By: Muhammet Efdal ŞAHİN
        </a>
      </div>
    </footer>
  );
}
