import { Fragment, useEffect, useRef, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  HeartIcon,
  PhoneIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { BoltIcon } from "@heroicons/react/24/solid";
import LogoFull from "./logoFull";
import BrandButton from "./brandButton";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NavigationBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const initialNavBgColor = "bg-transparent";
  const scrollNavBgColor = "bg-white";

  const initialNavTextColor = "text-slate-900";
  const scrollNavTextColor = "text-slate-800";

  const initialShadow = "shadow-none";
  const scrollShadow = "shadow-sm";

  const [navBg, setNavBg] = useState(initialNavBgColor);
  const [navText, setNavText] = useState(initialNavTextColor);

  const [shadow, setShadow] = useState("bemychef-logo");

  const [y, setY] = useState(0);

  // Change Nav BG here
  const navScroll = (e) => {
    const window = e.currentTarget;

    if (window.innerWidth < 768) {
      if (window.scrollY > 50) {
        setNavBg(scrollNavBgColor);
        setNavText(scrollNavTextColor);
        setShadow(scrollShadow);
      } else {
        setNavBg(initialNavBgColor);
        setNavText(initialNavTextColor);
        setShadow(initialShadow);
      }
      return;
    }

    const threshold = 20;
    // scrolling up
    if (y > window.scrollY) {
      if (window.scrollY > threshold) {
        setNavBg(scrollNavBgColor);
        setNavText(scrollNavTextColor);
        setShadow(scrollShadow);
      } else {
        setNavBg(initialNavBgColor);
        setNavText(initialNavTextColor);
        ("LOWWWW");
        setShadow(initialShadow);
      }
    }

    // scrolling down
    else if (y < window.scrollY) {
      if (window.scrollY > threshold) {
        setNavBg(scrollNavBgColor);
        setNavText(scrollNavTextColor);

        setShadow(scrollShadow);
      }
    }
    setY(window.scrollY);
  };

  useEffect(() => {
    setY(window.scrollY);
    console.log("Hellooo");
    window.addEventListener("scroll", navScroll);

    return () => {
      window.removeEventListener("scroll", (e) => navScroll(e));
    };
  });

  return (
    <div>
      <nav
        className={`mx-auto items-center justify-center w-full flex fixed ${navBg} ${navText} ${shadow} transition-all z-50 duration-300`}
        aria-label="Global"
      >
        {/* <Banner /> */}
        <div className="max-w-7xl w-full">
          <MainNav
            mobileMenuOpen={mobileMenuOpen}
            setMobileMenuOpen={setMobileMenuOpen}
            navText={navText}
          />
        </div>
        <MobileNav
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
          navText={navText}
        />
      </nav>
    </div>
  );
}

const MainNav = ({ mobileMenuOpen, setMobileMenuOpen, logo, navText }) => {
  return (
    <div className="flex   w-full justify-between items-center  rounded-full py-4 px-4 sm:px-12 uppercase ">
      <div className="col-span-1 flex items-center space-x-12">
        <LogoFull className={"h-12"} />
      </div>
      <MainNavigationItems />
      <BrandButton href={"/"} style={"secondary"}>
        GET QUOTE
      </BrandButton>
      <div className="flex space-x-4 items-center justify-center col-span-1  lg:hidden">
        <button
          type="button"
          className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 "
          onClick={() => setMobileMenuOpen(true)}
        >
          <span className="sr-only">Open main menu</span>
          <Bars3Icon className={`h-6 w-6 ${navText}`} aria-hidden="true" />
        </button>
      </div>
    </div>
  );
};

const MainNavigationItems = () => {
  return (
    <Popover.Group className="hidden lg:flex lg:gap-x-12 text-sm z-20">
      {NAV_ITEMS.map((item, index) => (
        <MainMenuItem item={item} index={index} key={index} />
      ))}
    </Popover.Group>
  );
};

const MobileNav = ({ mobileMenuOpen, setMobileMenuOpen, navText }) => {
  return (
    <Dialog
      as="div"
      className="lg:hidden z-100"
      open={mobileMenuOpen}
      onClose={setMobileMenuOpen}
    >
      <div className="fixed inset-0 z-100" />
      <Dialog.Panel className="fixed inset-y-0 right-0 z-100 w-full overflow-y-auto bg-brand-nav px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 bg-slate-50">
        <div className="flex items-center justify-between">
          <button
            type="button"
            className="-m-2.5 rounded-md p-2.5 text-gray-400"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="sr-only">Close menu</span>
            <XMarkIcon className="h-6 w-6 stroke-2" aria-hidden="true" />
          </button>
        </div>
        <div className="mt-6 flow-root">
          <div className={`-my-6 divide-y divide-gray-500/10 ${navText}`}>
            <div className="space-y-2 py-6">
              {NAV_ITEMS.map((item, index) => (
                <MobileMenuItem
                  item={item}
                  index={index}
                  key={index}
                  onClick={() => {
                    setMobileMenuOpen(false);
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </Dialog.Panel>
    </Dialog>
  );
};

function MainMenuItem({ item, index }) {
  const [isShowing, setIsShowing] = useState(false);
  const router = useRouter();
  if (item.subitems) {
    return (
      <Popover className="relative z-50 text-gray-600">
        <Popover.Button
          as="a"
          href={item.link}
          onMouseEnter={() => setIsShowing(true)}
          onMouseLeave={() => setIsShowing(false)}
          className="text-md font-bold text-center
          hover:text-orange-500 flex items-center space-x-2"
          onClick={() => {
            router.push(item.link);
          }}
        >
          <p>{item.title}</p>
          <ChevronDownIcon
            className="h-5 w-5 flex-none stroke-2"
            aria-hidden="true"
          />
        </Popover.Button>
        <Transition
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
          onMouseEnter={() => setIsShowing(true)}
          onMouseLeave={() => setIsShowing(false)}
          show={isShowing}
        >
          <Popover.Panel className="absolute -left-8 top-full  mt-0 pt-3 w-screen max-w-xs z-20">
            <div className="grid grid-cols-1 bg-white p-2 rounded-lg shadow-md  ring-1 ring-gray-900/5 text-gray-900">
              {item.subitems.map((child, index) => (
                <Link
                  key={index}
                  href={child.link}
                  className="text-left font-semibold hover:font-bold p-2 hover:bg-gray-100 rounded-md"
                >
                  {child.title}
                </Link>
              ))}
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    );
  } else {
    return (
      <Link
        key={index}
        href={item.link ?? ""}
        className="text-md  text-center text-brand-navy 
          hover:text-brand-red transition-all group"
      >
        <p>{item.title}</p>
        <div className="h-0.5 w-full bg-brand-red duration-300 opacity-0 group-hover:opacity-100 transition-all scale-x-0 group-hover:scale-x-100"></div>
      </Link>
    );
  }
}

function MobileMenuItem({ item, index, onClick }) {
  const [isShowing, setIsShowing] = useState(false);

  const buttonRef = useRef();

  function toggleButton() {
    onClick();
  }

  if (item.subitems) {
    return (
      <Disclosure as="div" className="-mx-3 text-slate-600">
        {({ open }) => (
          <>
            <Disclosure.Button
              //   ref={buttonRef}
              className="  flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-gray-50/5"
            >
              {item.title}
              <ChevronDownIcon
                className={classNames(
                  open ? "rotate-180" : "",
                  "h-5 w-5 flex-none"
                )}
                aria-hidden="true"
              />
            </Disclosure.Button>
            <Disclosure.Panel className="mt-2 space-y-2">
              {[...item.subitems].map((child) => (
                <a
                  key={child.title}
                  as="button"
                  href={child.link}
                  onClick={() => {
                    toggleButton();
                  }}
                  className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-slate-600 hover:bg-gray-50/10"
                >
                  {child.title}
                </a>
              ))}
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    );
  } else {
    return (
      <Link
        key={index}
        href={item.link ?? ""}
        className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-slate-600"
        onClick={() => {
          toggleButton();
        }}
      >
        {item.title}
      </Link>
    );
  }
}

const NAV_ITEMS = [
  {
    title: "Home",
    link: "/dashboard",
  },
  {
    title: "About",
    link: "/blog",
  },
  {
    title: "Services",
    link: "/all-recipes",
  },
  {
    title: "Projects",
    link: "/all-recipes",
  },
];
