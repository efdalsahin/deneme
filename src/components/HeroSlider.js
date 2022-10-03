import Slider from "react-slick";

import media1 from "../images/media1.jpeg";
import media2 from "../images/media2.jpeg";

import media3 from "../images/media3.jpeg";

import media4 from "../images/media4.jpeg";

import media5 from "../images/media5.jpeg";
import petekgaranti from "../images/petekgaranti.jpeg";

const HeroSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 4500,
    pauseOnHover: true,
    slidesToShow: 5,
    slidesToScroll: 1,
  };

  return (
    <div className="py-4 overflow-hidden bg-gray-200">
      <link
        rel="stylesheet"
        type="text/css"
        charset="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      <div>
        <Slider {...settings}>
          <div>
            <img
              className="h-[400px] w-full object-contain px-5"
              src={media1}
              alt="resim"
            />
          </div>
          <div>
            <img
              className="h-[400px] w-full object-contain px-5"
              src={media2}
              alt="resim"
            />
          </div>
          <div>
            <img
              className="h-[400px] w-full object-contain px-5"
              src={media3}
              alt="resim"
            />
          </div>
          <div>
            <img
              className="h-[400px] w-full object-contain px-5"
              src={media4}
              alt="resim"
            />
          </div>
          <div>
            <img
              className="h-[400px] w-full object-contain px-5"
              src={media5}
              alt="resim"
            />
          </div>
          <div>
            <img
              className="h-[400px] w-full object-contain px-5"
              src={petekgaranti}
              alt="resim"
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default HeroSlider;
