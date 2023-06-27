import CTASection from "@components/global/ctaSection";
import FullContainer from "@components/global/fullContainer";
import SectionHeader from "@components/global/sectionHeader";
import Container from "@components/global/siteContainer";
import ArchitectureBackground from "@components/icons/architectureBackground";
import ArchitectureBackground2 from "@components/icons/architectureBackground2";
import { MapIcon, MapPinIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";

const ServicesComponent = () => {
  return (
    <FullContainer>
      <Container>
        <div className="grid grid-cols-2 mt-12">
          <SectionHeader
            caption={"Our Services"}
            title={"View our wide range of services"}
          />

          <CTASection
            content={
              "We offer comprehensive land surveying services to Sydney's residential, commercial and industrial sectors."
            }
            primaryCTA={{ title: "Get a quote", link: "https://" }}
            secondaryCTA={{ title: "Our services", link: "https://" }}
          />
        </div>
        <div className="grid grid-cols-2 gap-6 mt-12">
          {services.map((service) => (
            <ServiceComponent service={service} />
          ))}
        </div>
      </Container>
    </FullContainer>
  );
};

export default ServicesComponent;

const ServiceComponent = ({ service }) => {
  return (
    <div className=" relative overflow-hidden  bg-white text-brand-navy group hover:bg-brand-red transition-colors duration-300 hover:text-brand-extralight rounded-xl ring-brand-light ring-1">
      <ArchitectureBackground2
        className={
          "absolute h-full right-0 top-1/3 z-0 opacity-0 group-hover:opacity-100 transition-all duration-300 text-white"
        }
      />
      <div className=" bg-gradient-to-b from-brand-red  to-transparent w-full absolute h-full top-0 left-0 z-0 opacity-0 group-hover:opacity-100 transition-all duration-200"></div>
      <div className="p-6 flex flex-col space-y-4 z-10 relative">
        <div className="h-12 w-12 bg-gradient-to-b from from-brand-extralight to-transparent rounded-full p-[1.5px] ">
          <div className="w-full h-full bg-white group-hover:bg-brand-red rounded-full transition-colors duration-300 p-2.5">
            <MapPinIcon className="text-brand-navy group-hover:text-brand-extralight transition-colors" />
          </div>
        </div>
        <p className="text-base font-medium">{service.title}</p>
        <p className="prose-base font-light">{service.subtitle}</p>
        <Link href={"https://google.com"} className="text-sm">
          Learn more
        </Link>
      </div>
    </div>
  );
};

const services = [
  {
    icon: MapIcon,
    title: "Architecture",
    subtitle:
      "Lorem ipsum folor sit amet, coinsectetur adipiscing elit. Quis feugiat pharetra quis imperit cursus",
  },
  {
    icon: MapIcon,
    title: "Architecture",
    subtitle:
      "Lorem ipsum folor sit amet, coinsectetur adipiscing elit. Quis feugiat pharetra quis imperit cursus",
  },
  {
    icon: MapIcon,
    title: "Architecture",
    subtitle:
      "Lorem ipsum folor sit amet, coinsectetur adipiscing elit. Quis feugiat pharetra quis imperit cursus",
  },
  {
    icon: MapIcon,
    title: "Architecture",
    subtitle:
      "Lorem ipsum folor sit amet, coinsectetur adipiscing elit. Quis feugiat pharetra quis imperit cursus",
  },
];
