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
            <div className="brand-font inline-block text-white text-2xl px-20 py-4 bg-black">1894</div>
          </div>
          <div className="px-10 lg:px-0 grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-28 py-10">
            <div className="brand-font text-black text-lg flex flex-col space-y-4 ">
              <p>
                Kitanishi Shuzo, the makers of Bunraku, uses time-honored tradition to make SAKΞ an exceedingly rare and
                high-quality sake.
              </p>
              <p>
                Founded in 1894 by Kamekichi Kitanishi, Bunraku's closely guarded recipes and methods of sake production
                focus on sake’s sacred ingredients: rice, water, koji and carefully selected yeast.
              </p>
            </div>
            <div className="text-black text-lg flex flex-col space-y-4">
              <p>文楽はSAKΞを使って、昔ながらの伝統を活か して、非常に希少で高品質な日本酒を作り上げ ています。</p>
              <p>
                1894年に北西亀吉によって設立された文楽の 厳重なレシピと日本酒の製造方法は、米、水、
                麹などの日本酒の神聖な三位一体に焦点を当 てています。
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
                兄妹の直雪と真由子が現世代の文楽を経営し ている。 1世紀以上の卓越性と、他の人にはない
                実験への意欲を備えた文楽ブランドは、その一 貫した品質と卓越した味で世界中で高く評価さ れています。
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
