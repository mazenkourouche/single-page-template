import { Fragment, useEffect, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartBarIcon,
  ChevronUpIcon,
  CursorArrowRaysIcon,
  DocumentChartBarIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon, ShoppingBagIcon } from "@heroicons/react/20/solid";
import Navbar from "./navbar";
import Footer from "./footer";
import Head from "next/head";
import NavigationBar from "./navbar";
import Link from "next/link";
import Image from "next/image";
import { geologica } from "@utils/fonts";

const solutions = [
  {
    name: "Analytics",
    description:
      "Get a better understanding of where your traffic is coming from.",
    href: "#",
    icon: ChartBarIcon,
  },
  {
    name: "Engagement",
    description: "Speak directly to your customers in a more meaningful way.",
    href: "#",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Security",
    description: "Your customers' data will be safe and secure.",
    href: "#",
    icon: ShieldCheckIcon,
  },
  {
    name: "Integrations",
    description: "Connect with third-party tools that you're already using.",
    href: "#",
    icon: Squares2X2Icon,
  },
  {
    name: "Automations",
    description:
      "Build strategic funnels that will drive your customers to convert",
    href: "#",
    icon: ArrowPathIcon,
  },
  {
    name: "Reports",
    description:
      "Get detailed reports that will help you make more informed decisions ",
    href: "#",
    icon: DocumentChartBarIcon,
  },
];
const resources = [
  {
    name: "Help Center",
    description:
      "Get all of your questions answered in our forums or contact support.",
    href: "#",
  },
  {
    name: "Guides",
    description:
      "Learn how to maximize our platform to get the most out of it.",
    href: "#",
  },
  {
    name: "Events",
    description:
      "See what meet-ups and other events we might be planning near you.",
    href: "#",
  },
  {
    name: "Security",
    description: "Understand how we take your privacy seriously.",
    href: "#",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Layout({ children, title, canonical, description }) {
  const [showingPullout, setShowingPullout] = useState(true);

  return (
    // <div className="flex flex-col h-screen">
    //   <Head>
    //     <title key="title">{title + " - AirXperts"}</title>
    //     <link rel="canonical" href={`https://airxperts.com.au/${canonical}`} />
    //     <meta name="description" content={description} />
    //     <meta property="og:title" content={title + " - AirXperts"} />
    //     <meta property="og:description" content={description} />
    //     {/* <SEO /> */}
    //   </Head>
    //   <header className="relative z-10 ">
    //     <NavigationBar />
    //     {/* Sticky Header and Footer with Tailwind */}
    //   </header>
    //   <main className="relative overflow-y-auto">
    //     <div>{children}</div>
    //     <Footer />
    //   </main>
    // </div>
    <div
      className={`flex flex-col min-h-screen bg-white ${geologica.className}`}
    >
      {/* <SEO seo={seo} /> */}

      {/* <Banner /> */}
      <div className=" fixed z-20 w-full">
        <NavigationBar />
      </div>
      <div className="flex- mx-auto  text-lg w-full h-full  ">{children}</div>
      <div>
        <Footer />
      </div>
      {/* <WaitlistModal isOpen={isOpen} setIsOpen={setIsOpen} /> */}
    </div>
  );
}
