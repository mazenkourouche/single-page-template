import BodyText from "@components/global/bodyText";
import BrandImage from "@components/global/brandImage";
import FullContainer from "@components/global/fullContainer";
import Container from "@components/global/siteContainer";
import { CheckIcon } from "@heroicons/react/24/outline";
import React from "react";

const AboutSection = () => {
  return (
    <FullContainer className={"bg-brand-extralight"}>
      <Container className={"my-12"}>
        <div className="grid grid-cols-3 gap-8 text-brand-navy">
          <BrandImage
            src={"/images/building-architecture.jpg"}
            className={`w-full h-full col-span-1`}
          />
          <div className="col-span-2 flex flex-col space-y-6">
            <p className="text-5xl font-light ">
              Discover More About Your Trusted Sydney Land Surveyors.
            </p>
            <BodyText
              content={aboutText}
              className={`font-light prose-lg`}
            ></BodyText>
            <div class="flex w-full flex-wrap px-2 prose-lg font-light">
              {features.map((feature) => {
                return (
                  <div
                    key={feature}
                    class="decoration-dashed flex w-1/2 items-center space-x-3 py-2"
                  >
                    <CheckIcon
                      className={`h-6 w-5 flex-none 
                                text-brand-orange
                            `}
                      aria-hidden="true"
                    />
                    <span class="">{feature}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </FullContainer>
  );
};

export default AboutSection;

const aboutText = `Equipped with industry-leading experience, we understand the unique challenges and needs of every project. We utilise advanced technology to offer highly accurate, timely results, meeting and exceeding industry standards.
Our core values centre around commitment to quality, customer-centric approach, and consistent innovation. At SurveyWorx, we believe that our dedication to these principles sets us apart, enabling us to provide unmatched land surveying solutions in Sydney. Experience the difference with us.
We offer a range of surveying services including:`;

const features = [
  "Pre-construction land surveys",
  "Detail surveys",
  "Occupation surveys",
  "Pre-construction land surveys",
  "Detail surveys",
  "Occupation surveys",
];
