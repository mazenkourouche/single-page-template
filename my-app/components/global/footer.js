import Image from "next/image";
import LogoFull from "./logoFull";

const navigation = {
  Menu: [
    { name: "Home", href: "#" },
    { name: "About", href: "#" },
    { name: "Services", href: "#" },
    { name: "Contact Us", href: "#" },
  ],
  Help: [
    { name: "Terms of Use", href: "#" },
    { name: "Privacy Policy", href: "#" },
  ],
  Social: [{ name: "LinkedIn", href: "#" }],
};

export default function Footer() {
  return (
    <footer
      className="bg-brand-extralight text-brand-navy"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-20">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <LogoFull className={"h-9"} />

            <p className="text-sm leading-6 ">
              Leading the Way in Sydney Land Surveying
            </p>
          </div>
          <div className="mt-16 grid grid-cols-3 gap-8 col-span-2 xl:mt-0 ">
            {Object.keys(navigation).map((sectionKey) => {
              return (
                <div>
                  <h3 className="text-sm font-semibold leading-6 ">
                    {sectionKey}
                  </h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {navigation[sectionKey].map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="text-sm leading-6 text-brand-navy/70 hover:text-brand-red"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 ">
            &copy; 2023 SurveyWorx NSW, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
