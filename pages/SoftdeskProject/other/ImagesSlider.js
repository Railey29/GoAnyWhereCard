import React from "react";
import Slider from "react-slick";

// Import CSS for react-slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ImagesSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const divStyle = {
    height: "40%",
    width: "30%",
    position: "absolute",
    left: "10%",
    top: "20%",
  };

  const sliderStyle = {
    height: "45%",
    width: "30%",
  };

  const photo = {
    height: "120px",
    width: "120px",
  };
  return (
    <div style={divStyle}>
      <Slider {...settings} style={sliderStyle}>
        <div>
          <img src="/PayGoPayment.jpg" alt="Image 1" style={photo} />
        </div>
        <div>
          <img src="/image2.jpg" alt="Image 2" />
        </div>
        <div>
          <img src="/image3.jpg" alt="Image 3" />
        </div>
      </Slider>
    </div>
  );
}

export default ImagesSlider;
