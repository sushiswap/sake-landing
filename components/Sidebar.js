import React from "react";
import Image from "next/image";
import Link from "next/link";

const navigation = [
  { name: "WELCOME", href: "/", id: "welcome" },
  { name: "TOKEN", href: "/token", id: "token" },
  { name: "SAKE", href: "/sake", id: "sake" },
  { name: "BREWERY", href: "/brewery", id: "brewery" },
  { name: "ARCHITECT", href: "/architect", id: "architect" },
  { name: "ARTIST", href: "/artist", id: "artist" },
  { name: "PURCHASE", href: "/purchase", id: "purchase" },
];

const secondaryNavigation = [
  { name: "JP", href: "#" },
  { name: "CN", href: "#" },
  { name: "ENG", href: "#" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Sidebar = ({ current }) => {
  return (
    <>
      {/* Static sidebar for desktop */}
      <div className="hidden lg:flex lg:flex-shrink-0">
        <div className="flex flex-col w-72">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex flex-col flex-grow bg-black pt-14 pb-4 overflow-y-auto border-r border-secondary">
            <div className="flex items-center flex-shrink-0 px-11">
              <div className="h-8 w-auto">
                <Image src="/images/logo-bg.png" width={"161px"} height={"58px"} />
              </div>
            </div>
            <nav className="pt-14 flex-1 flex flex-col divide-y divide-gray-800 overflow-y-auto" aria-label="Sidebar">
              <div className="space-y-2">
                {navigation.map((item) => (
                  <div className="flex flex-row items-center">
                    <div className={classNames(item.id === current ? "bg-white" : "bg-black", "w-8 h-2 mr-4")} />
                    <Link key={item.name} href={item.href}>
                      <div
                        className={classNames(
                          item.id === current ? "text-white" : "text-secondary",
                          "text-xl hover:text-white group flex items-center py-2 leading-6 cursor-pointer"
                        )}
                      >
                        {item.name}
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6">
                <div className="px-11 space-x-4 flex flex-row">
                  {secondaryNavigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="group flex items-center text-base leading-6 font-medium rounded-md text-gray-100 hover:text-white hover:bg-gray-600"
                    >
                      {/* <item.icon className="mr-4 h-6 w-6 text-gray-200" aria-hidden="true" /> */}
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
