import { React, useState } from "react";
import { Layout } from "@components/index";
import Image from "next/image";
import Link from "next/link";
import tools from "../utils/tools";

const tabs = [
  { name: "All", href: "#", current: true, key: "all" },
  { name: "Social Media", href: "#", current: false, key: "social-media" },
  { name: "Ads", href: "#", current: false, key: "ads" },
  { name: "Ecommerce", href: "#", current: false, key: "e-commerce" },
  { name: "Email", href: "#", current: false, key: "email" },
  { name: "Branding", href: "#", current: false, key: "branding" },
  { name: "Ideation", href: "#", current: false, key: "ideation" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Dashboard = () => {
  const [selectedTab, setSelectedTab] = useState("all");

  const contentItems = () => {
    if (selectedTab == "all") {
      return Object.values(CONTENT_TYPES).flat(1);
    } else {
      return CONTENT_TYPES[selectedTab];
    }
  };
  return (
    <Layout title={"Dashboard"} icon={""} navItem={"dashboard"}>
      <div className="py-12 px-20">
        <div className="mx-auto mb-6">
          <h1 className="text-2xl font-semibold text-gray-900">
            {"What are you making today?"}
          </h1>
        </div>
        <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        <div className="grid grid-cols-4 gap-4 mt-6">
          {contentItems().map((contentItem) => (
            <Link
              href={`/tools/${contentItem.key}`}
              className="bg-white rounded-md p-6 flex flex-col items-start hover:ring-1 hover:ring-gray-200 active:ring-2 space-y-3"
            >
              <div className="h-10 aspect-square rounded-full p-2 bg-[#F6F5FA]">
                <div className="h-full relative overflow-hidden">
                  <Image
                    src={contentItem.icon}
                    alt="Author Image"
                    fill
                    style={{ objectFit: "contain", color: "black" }}
                  />
                </div>
              </div>
              <div className="flex flex-col space-y-1 text-left">
                <p className="text-black text-sm font-medium">
                  {contentItem.title}
                </p>
                <p className="text-gray-400 text-xs">
                  {contentItem.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;

function Tabs({ selectedTab, setSelectedTab }) {
  function selectTab(key) {
    setSelectedTab(key);
  }

  return (
    <div>
      <div className="sm:hidden">
        <label htmlFor="tabs" className="sr-only">
          Select a tab
        </label>
        {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
        <select
          id="tabs"
          name="tabs"
          className="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
          defaultValue={selectedTab}
        >
          {tabs.map((tab) => (
            <option key={tab.key}>{tab.name}</option>
          ))}
        </select>
      </div>
      <div className="hidden sm:block">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex flex-wrap w-fit" aria-label="Tabs">
            {tabs.map((tab) => (
              <div key={tab} className="mr-8">
                <button
                  key={tab.key}
                  href="#"
                  onClick={() => {
                    selectTab(tab.key);
                  }}
                  className={classNames(
                    tab.key == selectedTab
                      ? "border-indigo-500 text-indigo-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-200",
                    "whitespace-nowrap flex py-4 px-1 border-b-2 font-medium text-sm w-fit text-left"
                  )}
                  aria-current={tab.key == selectedTab ? "page" : undefined}
                >
                  {tab.name}
                  {/* {tab.key ? ( */}
                  <span
                    className={classNames(
                      tab.key == selectedTab
                        ? "bg-indigo-100 text-indigo-600"
                        : "bg-gray-100 text-gray-900",
                      "hidden ml-3 py-0.5 px-2.5 rounded-full text-xs font-medium md:inline-block"
                    )}
                  >
                    {CONTENT_TYPES[tab.key]
                      ? CONTENT_TYPES[tab.key].length
                      : Object.keys(tools).length}
                    {/* TODO Add all */}
                  </span>
                  {/* ) : null} */}
                </button>
              </div>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}

const CONTENT_TYPES = {
  "social-media": Object.values(tools).filter(
    (i) => i.category == "social-media"
  ),
  ads: [],
  "e-commerce": [],
  email: [],
  branding: [],
  ideation: [],
};
