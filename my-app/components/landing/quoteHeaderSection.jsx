import BrandImage from "@components/global/brandImage";
import FullContainer from "@components/global/fullContainer";
import Container from "@components/global/siteContainer";
import NorthRightArrowIcon from "@components/icons/northRightArrowIcon";
import Link from "next/link";
import React from "react";

const QuoteHeaderSection = () => {
  return (
    <FullContainer className="py-8 bg-brand-red relative">
      <Container className={"flex justify-between items-center "}>
        <BrandImage
          src={"/images/surveyWorx-faded.png"}
          position={"absolute"}
          className={"w-full h-full top-0 left-0 hover:shadow-none"}
        ></BrandImage>
        <p className=" text-3xl font-light max-w-4xl leading-normal">
          Where precision meets possibility - Unlock your surveying solutions
          with SurveyWorx.
        </p>
        <button className="button text-brand-red bg-brand-extralight flex justify-center items-center p-3 aspect-square rounded-full">
          <NorthRightArrowIcon className={` h-5 w-5 ml-1`} />
        </button>
      </Container>
    </FullContainer>
  );
};

export default QuoteHeaderSection;
