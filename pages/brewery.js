import Image from "next/image";
import { Layout } from "../components";

const BreweryPage = () => {
  return (
    <Layout currentPage="brewery">
      {/* override background */}
      <div className="bg-white">
        <div
          className="relative w-full z-10"
          style={{
            backgroundImage: `url('/images/sake-brewery.jpg')`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            height: "584px",
          }}
        ></div>
        <div className="max-w-4xl mx-auto py-10">
          <div className="w-full mx-auto text-center">
            <div className="inline-block text-white text-2xl px-20 py-4 bg-black">1894</div>
          </div>
          <div className="grid grid-cols-2 gap-20 py-10">
            <div className="text-black text-lg text-justify flex flex-col space-y-4 pr-14">
              <p>With SAKE, Bunraku uses time-honored tradition to create an exceedingly rare and high-quality sake.</p>
              <p>
                Founded in 1894 by Kamekichi Kitanishi, Bunraku's closely guarded recipes and methods of sake production
                focus on sake's sacred trinity of ingredients: rice, water and koji.
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
          className="z-10 relative w-full"
          style={{
            backgroundImage: `url('/images/sake-vintage.jpg')`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            height: "432px",
          }}
        ></div>
        <div className="max-w-4xl mx-auto py-10">
          <div className="grid grid-cols-2 gap-20 py-10">
            <div className="text-black text-lg text-justify flex flex-col space-y-4 pr-14">
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
          className="z-10 relative w-full"
          style={{
            backgroundImage: `url('/images/sake-rare-styles.jpg')`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            height: "764px",
          }}
        ></div>
      </div>
    </Layout>
  );
};

export default BreweryPage;
