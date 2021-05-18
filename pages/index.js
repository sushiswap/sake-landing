import { useState } from "react";
import Image from "next/image";

import { Layout, MobileMenu, MobileSidebar, Sidebar as DesktopSidebar, YoutubeEmbed } from "../components";

const WelcomePage = () => {
  return (
    <Layout currentPage="welcome">
      <div
        className="relative h-full"
        style={{
          backgroundImage: `radial-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.6)), url('/images/topograph.jpg')`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="max-w-4xl mx-auto pt-0 lg:pt-52 pb-10">
          <div className="w-full -mt-20">
            <YoutubeEmbed embedId="Q3FZkPLxN74" />
          </div>
        </div>
        <div className="brand-font flex flex-col space-y-4 md:space-y-10 px-6 pt-4 pb-44 max-w-3xl mx-auto">
          <div className="mx-auto flex flex-row justify-center w-full">
            <Image src="/images/bottle-black-narrow.png" width={"80px"} height={"160px"} />
            <Image src="/images/bottle-white-narrow.png" width={"80px"} height={"160px"} />
          </div>
          <div className="mx-auto text-center w-full">
            <div className="w-56 md:w-w-80 mx-auto">
              <Image src="/images/sake-logo.png" width={"350px"} height={"103px"} layout={"responsive"} />
            </div>
          </div>
          <div className="mx-auto space-y-4 text-3xl text-white">
            <div className="text-center">A Tokenised Sake Bridging Tradition and Technology With Quality Design</div>
          </div>
          <div className="pt-4 mx-auto space-y-1 md:space-y-2 text-lg text-white text-center">
            <div>Curated by Sake Samurai Elliot Faber</div>
            <div>Produced by Kitanishi Shuzo</div>
            <div>Bottle designed by BIG Architects</div>
            <div>Featuring the art of Jonathan Jay Lee</div>
          </div>
          <div className="pt-2 md:pt-4 mx-auto space-y-2 text-lg text-white text-center">
            <div>
              Only Available For{" "}
              <a
                className="underline text-pinkish cursor-pointer"
                href="https://miso.sushi.com/auctions/0x5cFEb913fe8aE7e5E63E5930F044f36Ba4B882aB"
                target="_blank"
                rel="noopener noreferrer"
              >
                Purchase on MISO
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default WelcomePage;
