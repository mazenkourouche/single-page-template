import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Container from "@components/global/siteContainer";
import FullContainer from "@components/global/fullContainer";
import CompassBrandIcon from "@components/icons/compassBrandIcon";

export default function CalloutCarousel() {
  var settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    // autoplay: true,
    // autoplaySpeed: 0,
    variableWidth: true,
  };

  var callouts = [
    "Fast Turnaround Time",
    "High quality experience",
    "10 years experience",
    "free quote",
  ];
  return (
    <FullContainer>
      <Container className={"relative"}>
        <Slider {...settings} className="bg-transparent">
          {callouts.map(CalloutItem)}
        </Slider>
        <div className="w-full h-full bg-gradient-to-r from-white to-white via-transparent absolute z-10 top-0"></div>
      </Container>
    </FullContainer>
  );
}

const CalloutItem = (text) => {
  return (
    <div className="px-2 ">
      <div className="flex space-x-4 items-center h-full">
        <CompassBrandIcon className="aspect-square text-brand-red h-5 min-h-full"></CompassBrandIcon>
        <p className="px-6 text-brand-navy uppercase text-sm ring-brand-light ring-1 my-1 py-2 rounded-full">
          {text}
        </p>
      </div>

      {/* <p>{text}</p> */}
    </div>
  );
};
