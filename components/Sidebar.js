import React from "react";
import Image from "next/image";
import Link from "next/link";

import Countdown from "react-countdown";

const navigation = [
  { name: "WELCOME", href: "/", id: "welcome" },
  { name: "TOKEN", href: "/token", id: "token" },
  { name: "SAKE", href: "/sake", id: "sake" },
  { name: "BREWERY", href: "/brewery", id: "brewery" },
  { name: "ARCHITECT", href: "/architect", id: "architect" },
  { name: "ARTIST", href: "/artist", id: "artist" },
  { name: "PURCHASE", href: "/purchase", id: "purchase" },
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
          <div className="flex flex-col flex-grow bg-black pt-14 pb-4 overflow-y-auto border-r border-secondary">
            <div className="flex items-center flex-shrink-0 px-11">
              <div className="h-8 w-auto">
                <Image src="/images/logo-bg.png" width={"161px"} height={"58px"} />
              </div>
            </div>
            <Navigation current={current} />
          </div>
        </div>
      </div>
    </>
  );
};

export const Navigation = ({ current }) => {
  return (
    <>
      <nav className="pt-14 flex-1 flex flex-col justify-between overflow-y-auto " aria-label="Sidebar">
        <div className="space-y-2">
          {navigation.map((item) => (
            <div className="flex flex-row items-center">
              <div className={classNames(item.id === current ? "bg-white" : "bg-black", "w-8 h-2 mr-4")} />
              <Link key={item.name} href={item.href}>
                <div
                  className={classNames(
                    item.id === current ? "text-white" : "text-secondary",
                    "brand-font text-xl hover:text-white group flex items-center py-2 leading-6 cursor-pointer"
                  )}
                >
                  {item.name}
                </div>
              </Link>
            </div>
          ))}
          <div className="flex flex-row items-center">
            <div className={"bg-black w-8 h-2 mr-4"} />
            <a
              href="https://miso.sushi.com/auctions/0x5cFEb913fe8aE7e5E63E5930F044f36Ba4B882aB"
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* <div
                className={
                  "flex flex-row text-secondary text-xl hover:text-white group items-center py-2 leading-6 cursor-pointer"
                }
              > */}
              <div className={"flex flex-row text-disabled text-xl group items-center py-2 leading-6"}>
                <div className="pr-4 brand-font">AUCTION</div>
                <span className="inline-flex items-center px-3 py-1 text-sm font-medium bg-darker text-white">
                  <Countdown date={new Date("2021-05-20T00:00:00Z")}>
                    <>
                      <div className="relative">
                        <svg
                          className="absolute animate-ping -ml-0.5 mr-1.5 h-2 w-2 text-green-400"
                          fill="currentColor"
                          viewBox="0 0 8 8"
                        >
                          <circle cx={4} cy={4} r={3} />
                        </svg>
                        <svg className="-ml-0.5 mr-1.5 h-2 w-2 text-green-400" fill="currentColor" viewBox="0 0 8 8">
                          <circle cx={4} cy={4} r={3} />
                        </svg>
                      </div>
                      LIVE
                    </>
                  </Countdown>
                </span>
              </div>
            </a>
          </div>
        </div>
        {/* Bottom Navigation */}
        <div className="mt-6 py-4 brand-font">
          <div className="flex flex-row space-x-2 px-11 pb-4">
            <a href="https://discord.gg/MYFm8nn4QB" target="_blank" rel="noopener noreferrer">
              <Image src="/images/discord-icon.jpg" width={"30px"} height={"30px"} />
            </a>
            <a href="https://twitter.com/0xSAKE" target="_blank" rel="noopener noreferrer">
              <Image src="/images/twitter-icon.jpg" width={"30px"} height={"30px"} />
            </a>
            <a href="https://www.instagram.com/0xsake/" target="_blank" rel="noopener noreferrer">
              <Image src="/images/instagram-icon.jpg" width={"30px"} height={"30px"} />
            </a>
            <a
              href="https://www.youtube.com/channel/UC3OihGA5TFYv-lD_2d7Gd9Q"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src="/images/youtube-icon.jpg" width={"30px"} height={"30px"} />
            </a>
          </div>
          <div className="px-11">
            <div className="text-white">SAKE 2021,</div>
            <div className="text-white">
              Powered by{" "}
              <a className="underline" href="https://sushi.com" target="_blank" rel="noopener noreferrer">
                SUSHI
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
