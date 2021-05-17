import { useState } from "react";
import { MenuAlt1Icon } from "@heroicons/react/outline";
import Image from "next/image";

import { MobileSidebar, Sidebar as DesktopSidebar, YoutubeEmbed } from "../components";

export default function Example() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="h-screen flex overflow-hidden bg-gray-100">
      <MobileSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <DesktopSidebar />

      <div className="flex-1 overflow-auto focus:outline-none">
        {/* Mobile Menu */}
        <div className="block lg:hidden">
          <div className="relative z-10 flex-shrink-0 flex h-16 bg-black">
            <button
              className="px-4 border-r border-gray-200 text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 lg:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <MenuAlt1Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
        <main className="flex-1 relative pb-8 z-0 overflow-y-auto bg-black">
          <Welcome />
        </main>
      </div>
    </div>
  );
}

export const Welcome = () => {
  return (
    <>
      <div
        className="relative h-full"
        style={{
          backgroundImage: `radial-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.6)), url('/images/topograph.jpg')`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex flex-col space-y-10 pt-12 pb-44 max-w-2xl mx-auto">
          <div className="mx-auto flex flex-row justify-center w-full">
            <Image src="/images/bottle-black-narrow.png" width={"80px"} height={"160px"} />
            <Image src="/images/bottle-white-narrow.png" width={"80px"} height={"160px"} />
          </div>
          <div className="mx-auto text-center w-full">
            <Image src="/images/logo-white.png" width={"350px"} height={"103px"} />
          </div>
          <div className="mx-auto space-y-4 text-4xl text-white">
            <div className="text-center">A Tokenised Sake Bridging Tradition and</div>
            <div className="text-center">Technology With Quality Design</div>
          </div>
          <div className="pt-6 mx-auto space-y-2 text-lg text-white text-center">
            <div>Curated by Sake Samurai Elliot Faber</div>
            <div>Produced by Kitanishi Shuzo</div>
            <div>Bottle designed by BIG Architects</div>
            <div>Featuring the art of Jonathan Jay Lee</div>
          </div>
          <div className="pt-4 mx-auto space-y-2 text-lg text-white text-center">
            <div>Only Available For Purchase on MISO</div>
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto pb-24">
        <div className="w-full -mt-20">
          <YoutubeEmbed embedId="rokGy0huYEA" />
        </div>
      </div>
    </>
  );
};
