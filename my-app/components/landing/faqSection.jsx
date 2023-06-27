import React from "react";

import { Disclosure } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";
import FullContainer from "@components/global/fullContainer";
import Container from "@components/global/siteContainer";
import SectionHeader from "@components/global/sectionHeader";
import NorthRightArrowIcon from "@components/icons/northRightArrowIcon";
import NorthRightArrowWideIcon from "@components/icons/northRightArrowWideIcon";

const faqs = [
  {
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
];

export default function FaqSection() {
  return (
    <FullContainer className=" bg-brand-extralight">
      <Container className={"grid grid-cols-3 gap-8"}>
        <div className=" col-span-1">
          <SectionHeader
            caption={"FAQ"}
            title={"Our answers to your questions"}
          />
        </div>
        <div className=" divide-y divide-gray-900/10 col-span-2">
          <dl className="space-y-5 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-5">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900 group">
                        <span className="text-base font-medium leading-7">
                          {faq.question}
                        </span>
                        <span className="ml-6 flex h-7 items-center">
                          <NorthRightArrowWideIcon
                            className={`h-6 w-6 transition-all duration-200 group-hover:text-brand-red ${
                              open ? "rotate-0" : "rotate-180"
                            }`}
                            aria-hidden="true"
                          />
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base leading-7 text-gray-600">
                        {faq.answer}
                      </p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </Container>
    </FullContainer>
  );
}
