import Head from "next/head";
import { Fragment, useState, useRef, useEffect } from "react";
import { Dialog, Menu, Transition } from "@headlessui/react";
import {
  Bars3BottomLeftIcon,
  BellIcon,
  CalendarIcon,
  ChartBarIcon,
  FolderIcon,
  HeartIcon,
  HomeIcon,
  InboxIcon,
  UsersIcon,
  XMarkIcon,
  QuestionMarkCircleIcon,
  UserCircleIcon,
  CreditCardIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/outline";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { useRouter } from "next/router";

import { getAuth, onAuthStateChanged } from "firebase/auth";
import { initFirebase } from "../../firebase/firebaseApp";
import { Notification } from "@components/index";
import Image from "next/image";

const navigation = [
  { name: "Dashboard", key: "dashboard", href: "/dashboard", icon: HomeIcon },
  { name: "Templates", key: "templates", href: "/templates", icon: FolderIcon },
  { name: "Projects", key: "projects", href: "/projects", icon: InboxIcon },
  { name: "Saved", key: "saved", href: "/saved", icon: HeartIcon },
];

const userNavigation = [
  [
    { name: "Profile", href: "/account/profile", icon: UserCircleIcon },
    { name: "Plans & Billing", href: "/account/billing", icon: HomeIcon },
  ],
  [
    { name: "Help", href: "/account/help", icon: QuestionMarkCircleIcon },
    { name: "Logout", href: "/logout", icon: ArrowRightOnRectangleIcon },
  ],
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Layout({ title, children, icon, navItem }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const firebaseApp = initFirebase();
  const router = useRouter();

  const auth = getAuth();

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // if (!isLoggedIn) {
  //   return <div className="bg-white w-screen h-screen"></div>;
  // }

  const [userEmail, setUserEmail] = useState(" ");

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        // ...
        // console.log(uid);
        setUserEmail(user.email);
        setIsLoggedIn(true);
        console.log("1");
      } else {
        // router.push("login");
        return;
        // User is signed out
        // ...
      }
    });
  }, []);

  return (
    <>
      <div className="min-h-screen ">
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-40 md:hidden"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-gray-800 pt-5 pb-4">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-0 right-0 -mr-12 pt-2">
                      <button
                        type="button"
                        className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="flex flex-shrink-0 items-center px-4">
                    <img
                      className="h-8 w-auto"
                      src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                      alt="Your Company"
                    />
                  </div>
                  <div className="mt-5 h-0 flex-1 overflow-y-auto">
                    <nav className="space-y-1 px-2">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.key == navItem
                              ? "bg-indigo-500 text-white"
                              : "text-gray-300 hover:bg-gray-700 hover:text-white",
                            "group flex items-center px-2 py-2 text-base font-medium rounded-md"
                          )}
                        >
                          <item.icon
                            className={classNames(
                              item.key == navItem
                                ? "text-gray-300"
                                : "text-gray-400 group-hover:text-gray-300",
                              "mr-4 flex-shrink-0 h-6 w-6"
                            )}
                            aria-hidden="true"
                          />
                          {item.name}
                        </a>
                      ))}
                    </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
              <div className="w-14 flex-shrink-0" aria-hidden="true"></div>
            </div>
          </Dialog>
        </Transition.Root>

        <div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
          <div className="flex min-h-0 flex-1 flex-col bg-white">
            <div className="flex h-16 flex-shrink-0 items-center  px-4">
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                alt="Your Company"
              />
            </div>
            <div className="flex flex-1 flex-col overflow-y-auto">
              <nav className="flex-1 space-y-2 px-4 py-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.key == navItem
                        ? "bg-indigo-50 text-indigo-600"
                        : "text-slate-700 hover:bg-indigo-600 hover:text-white",
                      "group flex items-center px-4 py-2 text-sm font-medium rounded-md"
                    )}
                  >
                    <item.icon
                      className={classNames(
                        item.key == navItem
                          ? "text-indigo-600"
                          : "text-slate-700 group-hover:text-gray-300",
                        "mr-3 flex-shrink-0 h-5 w-5"
                      )}
                      aria-hidden="true"
                    />
                    {item.name}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:pl-64 h-screen">
          <div className="sticky top-0 z-10 flex h-20 flex-shrink-0 bg-white shadow">
            <button
              type="button"
              className="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <Bars3BottomLeftIcon className="h-6 w-6" aria-hidden="true" />
            </button>
            <div className="flex flex-1 justify-between px-6">
              <div className="flex items-center space-x-3">
                <div
                  className={`h-8 aspect-square rounded-full p-2 bg-[#F6F5FA] ${
                    icon == "" ? "hidden" : "block"
                  }`}
                >
                  <div className="h-full relative overflow-hidden">
                    <Image
                      src={icon}
                      alt="Author Image"
                      fill
                      style={{ objectFit: "contain", color: "black" }}
                    />
                  </div>
                </div>
                <div className="flex items-center text-slate-800 text-xl font-semibold">
                  {title}
                </div>
              </div>

              <div className="ml-4 flex items-center md:ml-6">
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="flex max-w-xs items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                      <span className="sr-only">Open user menu</span>
                      <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center">
                        <p className="text-lg text-indigo-600 font-semibold">
                          {userEmail[0].toUpperCase()}
                        </p>
                      </div>
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right divide-y divide-gray-100 rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item key={"email"}>
                        <p className="block px-4 py-2 text-xs text-gray-600">
                          {userEmail}
                        </p>
                      </Menu.Item>
                      {userNavigation.map((items) => (
                        <div>
                          {items.map((item) => (
                            <Menu.Item key={item.name}>
                              {({ active }) => (
                                <a
                                  href={item.href}
                                  className={classNames(
                                    active ? "bg-gray-100" : "",
                                    "px-4 py-2 text-sm text-gray-600 flex items-center"
                                  )}
                                >
                                  <item.icon
                                    className={classNames(
                                      item.current
                                        ? "text-gray-500"
                                        : "text-gray-400 group-hover:text-gray-500",
                                      "mr-3 flex-shrink-0 h-4 w-4 font-medium"
                                    )}
                                    aria-hidden="true"
                                  />
                                  {item.name}
                                </a>
                              )}
                            </Menu.Item>
                          ))}
                        </div>
                      ))}
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <main className="flex-1 flex flex-col overflow-y-auto bg-gray-50">
            <div className="w-full min-h-full overflow-auto flex flex-1 justify-center relative">
              {children}
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

// className="py-12 px-20"
