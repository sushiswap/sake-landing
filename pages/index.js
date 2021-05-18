import { useState } from "react";
import Image from "next/image";

import { Layout, MobileMenu, MobileSidebar, Sidebar as DesktopSidebar, YoutubeEmbed } from "../components";

const WelcomePage = () => {
  return (
    <Layout currentPage="welcome">
      <div className="pb-20">
        <div className="p-0 lg:p-20">
          <div
            className="relative w-full aspect-w-2 aspect-h-1"
            style={{
              backgroundImage: `url('/images/sake-box.jpg')`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </div>
        <div className="hidden md:block">
          <div className="flex justify-center py-10 lg:pt-4 lg:pb-20">
            <Image src="/images/three-stripes.png" width={"156px"} height={"156px"} />
          </div>
        </div>
        <div className="block md:hidden">
          <div className="flex justify-center py-10 lg:pt-4 lg:pb-20">
            <Image src="/images/three-stripes.png" width={"80px"} height={"80px"} />
          </div>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="px-10 lg:px-0 grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-28">
            <div className="brand-font text-white text-base md:text-lg text-justify flex flex-col space-y-4">
              <p>
                SAKΞ is the first of its kind: a tokenized sake bridging tradition and technology with quality design.
              </p>
              <p>
                OThe pinnacle of the brewers' craft and technological innovation, every bottle of SAKΞ is a work of art.
                With the highest attention to the details of production, from planting rice seeds to hand-bottling to
                order, SAKΞ is curated by Sake Samurai Elliot Faber and produced by Kitanishi Shuzo, makers of Bunraku,
                with a bottle designed by BIG Architects and featuring the art of Jonathan Jay Lee.
              </p>
              <p>Only 888 bottles of SAKΞ will ever be made.</p>
              <p>Bidding opens on May 20th, 2021. The rice seeds for SAKΞ will be planted one week later.</p>
            </div>
            <div className="text-white text-base md:text-lg flex flex-col space-y-4">
              <p>SAKΞはその種の最初のものです：高品質のデザイン で伝統と技術を橋渡しするトークン化された日本酒。</p>
              <p>
                醸造所の工芸品と技術革新の頂点、SAKΞの芸術作品 のすべてのボトル。 最高級の日本酒が特徴のSAKΞは 、Sake
                Samurai Elliot Faberがキュレーションし、北西 修造がプロデュースし、BIG Architectsがデザインし、 Jonathan
                JayLeeのアートをフィーチャーしたボトルを 使用しています。
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default WelcomePage;
