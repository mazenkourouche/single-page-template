import AccountLayout from "@components/account/accountLayout";
import React from "react";
const includedFeatures = [
  "Private forum access",
  "Member resources",
  "Entry to annual conference",
  "Official member t-shirt",
];
import { CheckCircleIcon } from "@heroicons/react/20/solid";

const Billing = () => {
  return (
    <AccountLayout selected={"billing"} title={"Billing"}>
      <div className="relative flex flex-col space-y-6 mt-6">
        <div className="flex flex-col space-y-1">
          <p className="text-gray-600 text-xs">
            You are currently on the{" "}
            <span className="font-semibold text-gray-700 subscription">
              Free
            </span>
          </p>
          <p className="text-gray-600 text-xs">
            Your plan will renew on 20/2/2023
          </p>
        </div>
        <div className="w-3/4">
          <h4 className="sr-only">Usage status</h4>
          <div className="flex justify-between items-end">
            <p className="text-sm font-medium text-gray-900">Words generated</p>
            <p className="text-xs text-gray-400">10/1000</p>
          </div>

          <div className="mt-3" aria-hidden="true">
            <div className="overflow-hidden rounded-full bg-gray-200">
              <div
                className="h-2 rounded-full bg-indigo-600"
                style={{ width: "37.5%" }}
              />
            </div>
            <div className="mt-2 text-sm font-medium text-gray-600">
              <div className="text-indigo-600 text-xs">
                Usage resets in 10 days
              </div>
            </div>
          </div>
        </div>
        <div className="relative mx-auto max-w-7xl rounded-xl  shadow-lg ">
          <div className="mx-auto max-w-lg  lg:flex lg:max-w-none p-8">
            <div className="flex-1 bg-white p-8">
              <h3 className="text-2xl font-bold bg-clip-text bg-gradient-to-r to-pink-500 from-indigo-500 text-transparent sm:text-3xl sm:tracking-tight">
                Writer Pro
              </h3>
              <p className="mt-6 text-base text-gray-500">
                Lorem ipsum dolor sit amet consect etur adipisicing elit. Itaque
                amet indis perferendis blanditiis repellendus etur quidem
                assumenda.
              </p>
            </div>
            <div className="  text-center lg:flex lg:flex-shrink-0 lg:flex-col lg:justify-center">
              <div className=" bg-gray-50 p-4 rounded-md">
                <div className="flex items-center">
                  <h4 className="flex-shrink-0  pr-4 text-base font-semibold text-indigo-600">
                    What's included
                  </h4>
                  <div className="flex-1 border-t-2 border-gray-200" />
                </div>
                <ul
                  role="list"
                  className="mt-8 space-y-5 lg:grid lg:grid-cols-1 lg:gap-x-8 lg:gap-y-5 lg:space-y-0"
                >
                  {includedFeatures.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start lg:col-span-1"
                    >
                      <div className="flex-shrink-0">
                        <CheckCircleIcon
                          className="h-5 w-5 text-indigo-500"
                          aria-hidden="true"
                        />
                      </div>
                      <p className="ml-3 text-sm text-gray-700">{feature}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 p-6 px-12">
            <p className="text-md font-medium leading-6 text-gray-900">
              Find the right plan for you
            </p>

            <div className=" flex justify-between items-end">
              <div className=" flex items-center justify-center text-3xl font-bold tracking-tight text-slate-900">
                <span>$349</span>
                <span className="ml-3 text-xl font-medium tracking-normal text-gray-500">
                  USD
                </span>
              </div>
              <div className="">
                <a
                  href="#"
                  className="flex items-center justify-center rounded-md border border-transparent bg-slate-800 px-5 py-3 text-base font-medium text-white hover:bg-gray-900"
                >
                  Upgrade
                </a>
              </div>
            </div>
            <p className=" text-gray-400 text-xs mt-2">Cancel anytime</p>
          </div>
        </div>
      </div>
    </AccountLayout>
  );
};

export default Billing;
