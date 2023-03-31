import { Fragment, useEffect, useRef, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import { Bars3Icon, PhoneIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import Logo from "./logo";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NavigationBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav
      className="mx-auto items-center justify-center w-full flex  bg-white  overflow-visible "
      aria-label="Global"
    >
      <div className="max-w-7xl w-full">
        <MainNav
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
        />
      </div>
      <MobileNav
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
    </nav>
  );
}

const MainNav = ({ mobileMenuOpen, setMobileMenuOpen }) => {
  return (
    <div className="flex w-full justify-between space-x-12 items-center bg-brand-nav py-4 px-4 sm:px-12 ">
      <Logo />
      <MainNavigationItems />
      <div></div>
    </div>
  );
};

const MainNavigationItems = () => {
  return (
    <div>
      <Popover.Group className="hidden lg:flex lg:gap-x-6 z-20">
        {NAV_ITEMS.map((item, index) => (
          <MainMenuItem item={item} index={index} key={index} />
        ))}
      </Popover.Group>
      <div className="flex space-x-2 items-center justify-center">
        <button
          type="button"
          className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 lg:hidden "
          onClick={() => setMobileMenuOpen(true)}
        >
          <span className="sr-only">Open main menu</span>
          <Bars3Icon className="h-6 w-6 text-slate-800" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
};

const MobileNav = ({ mobileMenuOpen, setMobileMenuOpen }) => {
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
          <div className="-my-6 divide-y divide-gray-500/10">
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
          hover:text-brand-primary flex items-center space-x-2"
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
              {item.subitems.map((child) => (
                <Link
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
        className="text-md font-bold text-center text-slate-600
          hover:text-brand-primary"
      >
        {item.title}
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
    link: "/",
  },
  {
    title: "Packages",
    link: "/packages",
  },
  {
    title: "About",
    link: "/about-us",
    subitems: [
      {
        title: "Company Profile",
        link: "/about-us/company-profile",
      },
      {
        title: "Terms and Conditions",
        link: "/about-us/terms-and-conditions",
      },
      {
        title: "Our Process",
        link: "/about-us/our-process",
      },
    ],
  },
  {
    title: "Projects",
    link: "/our-projects",
  },
  {
    title: "Services",
    link: "/our-services",
    subitems: [
      {
        title: "Supply and Installation",
        link: "/services/supply-and-installation",
      },
      {
        title: "Service and Repairs",
        link: "/services/services-and-repairs",
      },
      {
        title: "Preventative Maintenance",
        link: "/services/preventative-maintenance",
      },
      {
        title: "Residential",
        link: "/services/residential-air-conditioning-sydney",
      },
      {
        title: "Commercial",
        link: "/services/commercial-air-conditioning-sydney/",
      },
    ],
  },
  {
    title: "Contact",
    link: "/contact-us",
  },
];
