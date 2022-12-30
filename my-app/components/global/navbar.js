import { Fragment, useState, useEffect, useRef } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import {
  ShoppingCartIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { useCart } from "react-use-cart";

export default function Navbar({ items }) {
  const initialNavBgColor = "bg-transparent";
  const scrollNavBgColor = "bg-white";

  const [navBg, setNavBg] = useState(initialNavBgColor);

  const [y, setY] = useState(0);

  // Change Nav BG here
  const navScroll = (e) => {
    const window = e.currentTarget;

    if (window.innerWidth < 768) {
      if (window.scrollY > 50) {
        setNavBg(scrollNavBgColor);
      } else {
        setNavBg(initialNavBgColor);
      }
      return;
    }

    const threshold = 1;
    // scrolling up
    if (y > window.scrollY) {
      if (window.scrollY > threshold) {
        setNavBg(scrollNavBgColor);
      } else {
        setNavBg(initialNavBgColor);
      }
    }

    // scrolling down
    else if (y < window.scrollY) {
      if (window.scrollY > threshold) {
        setNavBg(scrollNavBgColor);
      }
    }
    setY(window.scrollY);
  };

  useEffect(() => {
    setY(window.scrollY);
    window.addEventListener("scroll", navScroll);

    return () => {
      window.removeEventListener("scroll", (e) => navScroll(e));
    };
  });

  return (
    // Change Nav BG here
    <Popover className={`w-full z-50 fixed ${navBg}`}>
      <div className="mx-auto px-4 sm:px-6 2xl:px-20 ">
        <div className="flex items-center justify-between py-6 md:space-x-10 border-b">
          <Logo />

          <MainNavItems items={items} />
          <div className="flex space-x-6">
            <MagnifyingGlassIcon className="w-5 h-5 text-gray-500" />
            <ShoppingCartButton />
            <div className="flex space-x-2 md:hidden">
              <HamburgerMenuButton />
            </div>
          </div>
          <MobileMenuPopover items={items} />
        </div>
      </div>
    </Popover>
  );
}

const HamburgerMenuButton = () => {
  return (
    <div className="-my-2 -mr-2 ">
      <Popover.Button className="inline-flex items-center justify-center rounded-md  p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-primary">
        <span className="sr-only">Open menu</span>
        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
      </Popover.Button>
    </div>
  );
};

const Logo = () => {
  return (
    <Link href="/">
      <div
        className="h-8 aspect-square sm:h-10 xl:h-14 relative z-30 first-letter 
      bg-red-300 sm:bg-orange-300 md:bg-gray-300 lg:bg-green-300 xl:bg-purple-300 2xl:bg-blue-300"
      >
        <Image
          src="/images/logo-site.png"
          alt="Logo"
          fill
          style={{ objectFit: "contain" }}
        />
      </div>
    </Link>
  );
};

const MainNavItems = ({ items }) => {
  return (
    <div className="hidden items-center justify-center md:flex md:flex-1 lg:w-0 space-x-8">
      {items.map((item, index) => (
        <a
          key={index}
          href={item.link}
          className="text-md font-medium text-center text-black hover:text-gray-900"
        >
          {item.title}
        </a>
      ))}
    </div>
  );
};

const MobileMenuPopover = ({ items }) => {
  return (
    <Transition
      as={Fragment}
      enter="duration-200 ease-out"
      enterFrom="opacity-0 scale-95"
      enterTo="opacity-100 scale-100"
      leave="duration-100 ease-in"
      leaveFrom="opacity-100 scale-100"
      leaveTo="opacity-0 scale-95"
    >
      <Popover.Panel
        focus
        className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden z-50"
      >
        <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
          <div className="px-5 pt-5 pb-6">
            <MobileMenuHeader />
            <MobileMenuItems items={items} />
          </div>
        </div>
      </Popover.Panel>
    </Transition>
  );
};

const MobileMenuHeader = () => {
  return (
    <div className="flex items-center justify-between">
      <Logo />
      <div className="-mr-2">
        <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-primary">
          <span className="sr-only">Close menu</span>
          <XMarkIcon className="h-6 w-6" aria-hidden="true" />
        </Popover.Button>
      </div>
    </div>
  );
};

const MobileMenuItems = ({ items }) => {
  return (
    <div className="mt-6">
      <nav className="grid gap-y-8">
        {items.map((item, index) => (
          <Popover.Button as={Link} href={item.link} key={index}>
            <span className="ml-3 text-base font-medium text-gray-900">
              {item.title}
            </span>
          </Popover.Button>
        ))}
      </nav>
    </div>
  );
};

const ShoppingCartButton = () => {
  const [totalCartItems, setTotalCartItems] = useState(0);
  const { totalUniqueItems, isEmpty } = useCart();

  useEffect(() => {
    // Update the document title using the browser API
    console.log(totalUniqueItems);
    setTotalCartItems(totalUniqueItems);
  }, [totalUniqueItems]);

  return (
    <Link href={"/cart"}>
      <button
        type="button"
        className="inline-flex relative items-center text-sm font-medium text-center text-white focus:ring-4 focus:outline-none focus:ring-blue-300"
      >
        <ShoppingCartIcon className="w-5 h-5 text-gray-500 " />
        <span className="sr-only">Notifications</span>
        <div className="inline-flex absolute -top-1.5 -right-2 justify-center items-center w-4 h-4 text-[8px] text-white bg-black rounded-full">
          {totalCartItems}
        </div>
      </button>
    </Link>
  );
};
