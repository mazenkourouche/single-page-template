import FullContainer from "@components/global/fullContainer";
import SectionHeader from "@components/global/sectionHeader";
import Container from "@components/global/siteContainer";
import NorthRightArrowIcon from "@components/icons/northRightArrowIcon";
import React from "react";
import { useRef } from "react";
import Slider from "react-slick";

const TestimonialsSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,

    slidesToShow: 1,
    slidesToScroll: 1,

    arrows: false,
    autoplay: true,
    autoplaySpeed: 0,
  };

  function next() {
    sliderRef.current.slickNext();
  }
  function previous() {
    sliderRef.current.slickPrev();
  }

  const sliderRef = useRef(null);
  return (
    <FullContainer className=" bg-brand-navy">
      <Container className={"grid grid-cols-3 gap-8"}>
        <div className=" col-span-1">
          <SectionHeader
            caption={"Testimonials"}
            title={"What our clients have to say"}
            className={"text-brand-extralight"}
          />
        </div>
        <div className="col-span-2 text-brand-extralight">
          <Slider ref={(c) => (sliderRef.current = c)} {...settings}>
            <div key={1}>
              <TestimonialItem />
            </div>
            <div key={2}>
              <TestimonialItem />
            </div>
            <div key={3}>
              <TestimonialItem />
            </div>
          </Slider>
          <div className="flex justify-end space-x-2 mt-8">
            <button
              className="button text-brand-red bg-brand-extralight flex justify-center items-center p-3 aspect-square rounded-full"
              onClick={previous}
            >
              <NorthRightArrowIcon className={`rotate-180 h-5 w-5 mr-1`} />
            </button>
            <button
              className="button text-brand-extralight bg-brand-red flex justify-center items-center p-3 aspect-square rounded-full"
              onClick={next}
            >
              <NorthRightArrowIcon className={` h-5 w-5 ml-1`} />
            </button>
          </div>
        </div>
      </Container>
    </FullContainer>
  );
};

export default TestimonialsSection;

const TestimonialItem = () => {
  return (
    <figure className="mx-auto max-w-2xl">
      <p className="sr-only">5 out of 5 stars</p>

      <blockquote className="text-base font-light leading-7  ">
        <p>
          “Qui dolor enim consectetur do et non ex amet culpa sint in ea non
          dolore. Enim minim magna anim id minim eu cillum sunt dolore aliquip.
          Amet elit laborum culpa irure incididunt adipisicing culpa amet
          officia exercitation. Eu non aute velit id velit Lorem elit anim
          pariatur.”
        </p>
      </blockquote>
      <figcaption className="mt-10 flex items-center gap-x-6">
        <img
          className="h-12 w-12 rounded-full bg-gray-50"
          src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=1024&h=1024&q=80"
          alt=""
        />
        <div className="text-sm leading-6">
          <div className="font-semibold text-brand-extralight text-base">
            Judith Black
          </div>
          <div className="mt-0.5 text-brand-extralight font-light text-sm">
            CEO of Workcation
          </div>
        </div>
      </figcaption>
    </figure>
  );
};
