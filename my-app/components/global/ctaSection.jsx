import React from "react";
import Link from "next/link";
import BrandButton from "./brandButton";

const CTASection = ({ content, primaryCTA, secondaryCTA }) => {
  return (
    <div>
      <p className="text-brand-navy font-light">{content}</p>
      <div className="flex space-x-4 mt-6">
        <BrandButton style={"secondary"} href={primaryCTA.link}>
          {primaryCTA.title}
        </BrandButton>
        <BrandButton href={secondaryCTA.link}>{secondaryCTA.title}</BrandButton>
      </div>
    </div>
  );
};

export default CTASection;
