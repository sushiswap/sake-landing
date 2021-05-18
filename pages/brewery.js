import Image from "next/image";
import { Layout } from "../components";

const BreweryPage = () => {
  return (
    <Layout currentPage="brewery">
      {/* override background */}
      <div className="bg-white">
        <div
          className="relative w-full h-72 aspect-w-2 aspect-h-1"
          style={{
            backgroundImage: `url('/images/sake-brewery.jpg')`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div className="max-w-4xl mx-auto py-10">
          <div className="w-full mx-auto text-center">
            <div className="brand-font inline-block text-white text-2xl px-6 md:px-8 py-4 bg-black">1894</div>
          </div>
          <div className="px-10 lg:px-0 grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-28 py-10">
            <div className="brand-font text-black text-lg flex flex-col space-y-4 ">
              <p>
                Kitanishi Shuzo, the makers of Bunraku, use time-honored tradition to make SAKΞ an exceedingly rare and
                high-quality sake.
              </p>
              <p>
                Founded in 1894 by Kamekichi Kitanishi, Bunraku's closely guarded recipes and methods of sake production
                focus on sake’s sacred ingredients: rice, water, koji and carefully selected yeast.
              </p>
            </div>
            <div className="text-black text-lg flex flex-col space-y-4">
              <p>
                文楽の酒蔵として知られる北西酒造は、昔ながらの伝統製法を用いることで、SAKΞをとても珍しく高品質な日本酒として製造します。
              </p>
              <p>
                1894年に北西亀吉氏により創業され、米・水・こうじ・慎重にセレクトされた酵母のみという文楽の製造材料と方法は、今でも受け継がれています。
              </p>
            </div>
          </div>
        </div>
        <div
          className="z-10 relative w-full h-72 md:h-100"
          style={{
            backgroundImage: `url('/images/sake-vintage.jpg')`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div className="max-w-4xl mx-auto py-10">
          <div className="px-10 lg:px-0 grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-28 py-10">
            <div className="brand-font text-black text-lg flex flex-col space-y-4">
              <p>
                Brother and sister Naoyuki and Mayuko run the current generation of Bunraku. With over a century of
                excellence and a willingness to experiment where others aren't, the Bunraku brand is celebrated across
                the world for its consistent quality and exceptional taste.
              </p>
            </div>
            <div className="text-black text-lg flex flex-col space-y-4">
              <p>
                兄妹である直之さんと真由子さんにより、現在の文楽の舵が取られています。100年以上の優れた技術と他社にはない冒険心により、文楽ブランドはその一貫した品質と素晴らしい味わいで全世界から愛されています。
              </p>
            </div>
          </div>
        </div>
        <div
          className="z-10 relative w-full aspect-w-3 aspect-h-2"
          style={{
            backgroundImage: `url('/images/sake-rare-styles.jpg')`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </div>
    </Layout>
  );
};

export default BreweryPage;
