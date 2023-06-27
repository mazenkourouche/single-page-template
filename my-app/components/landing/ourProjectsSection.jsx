import BrandImage from "@components/global/brandImage";
import CTASection from "@components/global/ctaSection";
import FullContainer from "@components/global/fullContainer";
import SectionHeader from "@components/global/sectionHeader";
import Container from "@components/global/siteContainer";
import React from "react";

const OurProjectsSection = () => {
  return (
    <FullContainer className={"bg-gray-200"}>
      <Container>
        <div className="grid grid-cols-2">
          <SectionHeader
            caption={"Our projects"}
            title={"View our range of projects"}
            className={"max-w-xl text-brand-navy"}
          />
          <CTASection
            content={
              "We offer comprehensive land surveying services to Sydney's residential, commercial and industrial sectors."
            }
            primaryCTA={{ title: "Get a quote", link: "https://" }}
            secondaryCTA={{ title: "Get a quote", link: "https://" }}
          />
        </div>
        <div class="grid grid-rows-2 grid-flow-col gap-6 mt-12">
          <BrandImage
            src={"/images/building-architecture.jpg"}
            className={"row-span-2 hover:shadow-xl transition-all duration-200"}
          />
          <BrandImage
            src={"/images/building-architecture.jpg"}
            className={"h-44 hover:shadow-xl transition-all duration-200"}
          />
          <BrandImage
            src={"/images/building-architecture.jpg"}
            className={"h-44 hover:shadow-xl transition-all duration-200"}
          />
          <BrandImage
            src={"/images/building-architecture.jpg"}
            className={"row-span-2 hover:shadow-xl transition-all duration-200"}
          />
        </div>
      </Container>
    </FullContainer>
  );
};

export default OurProjectsSection;
