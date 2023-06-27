import FullContainer from "@components/global/fullContainer";
import Container from "@components/global/siteContainer";
import React from "react";

export default function StatsSection() {
  return (
    <FullContainer className={"bg-white"}>
      <Container className={"my-12"}>
        <div className="grid grid-cols-3">
          <div className=" col-span-2">
            <h2 className="text-3xl font-medium tracking-tight text-brand-navy sm:text-4xl">
              We approach the workplace as something that adds to our lives and
              adds value to world.
            </h2>
            <p className="mt-6 text-base font-light leading-7 text-brand-navy/90">
              Diam nunc lacus lacus aliquam turpis enim. Eget hac velit est
              euismod lacus. Est non placerat nam arcu. Cras purus nibh cursus
              sit eu in id. Integer vel nibh.
            </p>
          </div>
        </div>
        <div className=" mt-16 flex max-w-2xl flex-col gap-6 lg:mx-0 lg:mt-20 lg:max-w-none lg:flex-row lg:items-end">
          <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-brand-extralight p-8 sm:w-3/4 sm:max-w-md sm:flex-row-reverse sm:items-end lg:w-72 lg:max-w-none lg:flex-none lg:flex-col lg:items-start">
            <p className="flex-none text-3xl font-bold tracking-tight text-brand-navy">
              250k
            </p>
            <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
              <p className="text-lg font-semibold tracking-tight text-brand-navy">
                Users on the platform
              </p>
              <p className="mt-2 text-base leading-7 text-brand-navy/80">
                Vel labore deleniti veniam consequuntur sunt nobis.
              </p>
            </div>
          </div>
          <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-brand-navy p-8 sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-sm lg:flex-auto lg:flex-col lg:items-start lg:gap-y-40">
            <p className="flex-none text-3xl font-bold tracking-tight text-white">
              $8.9 billion
            </p>
            <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
              <p className="text-lg font-semibold tracking-tight text-white">
                We’re proud that our customers have made over $8 billion in
                total revenue.
              </p>
              <p className="mt-2 text-base leading-7 text-white/80">
                Eu duis porta aliquam ornare. Elementum eget magna egestas.
              </p>
            </div>
          </div>
          <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-brand-red p-8 sm:w-11/12 sm:max-w-xl sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-none lg:flex-auto lg:flex-col lg:items-start lg:gap-y-28">
            <p className="flex-none text-3xl font-bold tracking-tight text-white">
              401,093
            </p>
            <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
              <p className="text-lg font-semibold tracking-tight text-white">
                Transactions this year
              </p>
              <p className="mt-2 text-base leading-7 text-white/80">
                Eu duis porta aliquam ornare. Elementum eget magna egestas. Eu
                duis porta aliquam ornare.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </FullContainer>
  );
}
