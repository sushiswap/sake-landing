import Image from "next/image";

import { Layout } from "../components";

const ArchitectPage = () => {
  return (
    <Layout currentPage="architect">
      {/* override background */}
      <div className="bg-white pt-10">
        <div
          className="relative w-full z-10 min-h-screen"
          style={{
            backgroundImage: `url('/images/sake-big-bottle.jpg')`,
            backgroundPosition: "center",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div className="max-w-4xl mx-auto py-10">
          <div className="w-full mx-auto text-center pb-10">
            <div className="brand-font inline-block text-white text-2xl px-20 py-4 bg-black">BIG DK</div>
          </div>
          <div className="px-10 lg:px-0 grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-28 py-10">
            <div className="brand-font text-black text-lg flex flex-col space-y-4">
              <p>For SAKE, Bjarke Ingels Group's (BIG) designed both a bottle and a work of art.</p>
              <p>
                A world-renowned group of designers, inventors, and architects, BIG's award-winning work can be seen
                throughout Europe, America, Asia and the Middle East.
              </p>
            </div>
            <div className="text-black text-lg flex flex-col space-y-4">
              <p>SAKΞのために、ビャルケインゲルスグ ループ（BIG）はボトルと芸術作品の両方 をデザインしました。</p>
              <p>
                世界的に有名なデザイナー、発明家、建 築家のグループであるBIGの受賞作品は
                、ヨーロッパ、アメリカ、アジア、中東で見 ることができます。
              </p>
            </div>
          </div>
        </div>
        <div className="z-10 relative max-w-4xl mx-auto">
          <Image src="/images/sake-architect-2.jpg" width={"937px"} height={"525px"} />
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="px-10 lg:px-0 grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-28 py-10">
            <div className="brand-font text-black text-lg flex flex-col space-y-4">
              <p>
                BIG's SAKE bottle fuses the historic art of sake brewing with strong contemporary design. A tactile
                horizontal pattern pays homage to the traditional Japanese wave and rice field terraces. The cork
                carries a fabric label inspired by Japanese head scarfs and dress traditions.
              </p>
            </div>
            <div className="text-black text-lg flex flex-col space-y-4">
              <p>
                BIGのSAKΞボトルは、歴史的な酒造りの 芸術と力強い現代的なデザインを融合 させています。
                触覚的な水平パターンは 、日本の伝統的な波と田んぼのテラスに 敬意を表しています。 コルクには、日本
                のヘッドスカーフとドレスの伝統に触発 された生地のラベルが付いています。
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ArchitectPage;
