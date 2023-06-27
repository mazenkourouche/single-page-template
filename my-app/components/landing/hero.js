import BrandButton from "@components/global/brandButton";
import BrandImage from "@components/global/brandImage";
import FullContainer from "@components/global/fullContainer";
import NorthRightArrowIcon from "@components/icons/northRightArrowIcon";
import Container from "@components/global/siteContainer";
import TopContainer from "@components/global/topContainer";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <TopContainer>
      <FullContainer>
        <Container>
          <div className="grid grid-cols-3 w-full gap-8">
            <div className="col-span-2 h-full flex flex-col space-y-8 font-light">
              <div className="text-7xl leading-tight text-brand-navy">
                <p>Leading the Way in Sydney Land Surveying</p>
              </div>
              <div className=" grid grid-cols-2 gap-8">
                <div className="flex flex-col space-y-8">
                  <div className="flex flex-col space-y-10 text-brand-navy">
                    <p>
                      We offer comprehensive land surveying services to Sydney's
                      residential, commercial and industrial sectors.{" "}
                    </p>
                    <div className="flex space-x-5">
                      <BrandButton href="/" style={"primary"}>
                        Get a quote
                      </BrandButton>
                      <BrandButton href="/">Our services</BrandButton>
                    </div>
                  </div>
                  <div className="h-52">
                    <BrandImage
                      src={"/images/building-architecture.jpg"}
                      className={"w-full h-full"}
                    />
                  </div>
                </div>
                <BrandImage
                  src={"/images/building-architecture.jpg"}
                  className={"w-full h-full"}
                />
              </div>
            </div>
            <div className="flex flex-col justify-between h-full">
              <div className="flex-grow ">
                <BrandImage
                  src={"/images/building-architecture.jpg"}
                  className={"w-full h-full"}
                />
              </div>
              <div className="py-6 px-2 w-4/5 flex flex-col space-y-4 text-brand-navy font-normal">
                <p>
                  We deliver only the highest quality results with years of
                  experience.
                </p>
                <Link
                  href={"/"}
                  className="flex space-x-5 items-center text-brand-navy hover:text-brand-red transition-colors"
                >
                  <p>View projects</p>
                  <NorthRightArrowIcon className={" mt-0.5"} />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </FullContainer>
    </TopContainer>
  );
};

export default Hero;

{
  /* */
}
