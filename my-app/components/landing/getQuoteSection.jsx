import BrandImage from "@components/global/brandImage";
import FullContainer from "@components/global/fullContainer";
import InputField from "@components/global/inputField";
import SectionHeader from "@components/global/sectionHeader";
import SelectionBox from "@components/global/selectionBox";
import Container from "@components/global/siteContainer";
import NorthRightArrowIcon from "@components/icons/northRightArrowIcon";
import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";

const GetQuoteSection = () => {
  return (
    <FullContainer className={"bg-brand-navy relative overflow-hidden"}>
      <BrandImage
        src={"/images/surveyWorxLogo-X-gradient.png"}
        className={" right-0 -top-12 h-full aspect-[0.79] z-10 rounded-none"}
        objectFit={"contain"}
        position={"absolute"}
      />
      <Container className={`flex flex-col space-y-12 my-8 `}>
        <SectionHeader
          title={"Free Proposal"}
          caption={"Get a quote"}
          className={"text-brand-extralight"}
        />
        <div className="grid grid-cols-3 gap-4">
          <FullNameInput />
          <PhoneInput />
          <EmailAddressInput />
          <ServiceTypeInput />
          <SubmitButton />
        </div>
      </Container>
    </FullContainer>
  );
};

export default GetQuoteSection;

const FullNameInput = () => {
  return (
    <InputField
      htmlFor={"phone"}
      srLabel={"Phone"}
      type="email"
      name="email"
      id="email"
      placeholder="Full Name"
    />
  );
};

const PhoneInput = () => {
  return (
    <InputField
      htmlFor={"phone"}
      srLabel={"Phone"}
      type="email"
      name="email"
      id="email"
      placeholder="Phone Number"
    />
  );
};

const EmailAddressInput = () => {
  return (
    <InputField
      htmlFor={"phone"}
      srLabel={"Phone"}
      type="email"
      name="email"
      id="email"
      placeholder="Email Address"
    />
  );
};

const ServiceTypeInput = () => {
  const [selected, setSelected] = useState(null);
  return (
    <SelectionBox
      list={ServiceList}
      placeholder={"Service Type"}
      className={"w-full"}
    />
    // <div>
    //   <label htmlFor="email" className="sr-only">
    //     Email
    //   </label>
    //   <input
    //     type="email"
    //     name="email"
    //     id="email"
    //     className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    //     placeholder="Service Type"
    //   />
    // </div>
  );
};

const SubmitButton = () => {
  return (
    <button className="flex justify-between items-center bg-brand-red text-white rounded-md px-3 sm:text-sm ">
      <p>Get Quote</p>
      <NorthRightArrowIcon className="h-4" />
    </button>
  );
};

const ServiceList = [
  { name: "Dropkick" },
  { name: "Zebbal" },
  { name: "Haywan" },
];
