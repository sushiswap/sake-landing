import Image from "next/image";

import { Layout } from "../components";

const ArtistPage = () => {
  return (
    <Layout currentPage="artist">
      {/* override background */}
      <div className="bg-white md:p-10">
        <div
          className="relative w-full z-10 min-h-screen"
          style={{
            backgroundImage: `url('/images/marketplace.jpg')`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div className="max-w-4xl mx-auto py-10">
          <div className="w-full mx-auto text-center pb-10">
            <div className="inline-block text-white text-2xl px-20 py-4 bg-black">Jonathan Jay Lee</div>
          </div>
          <div className="px-10 lg:px-0 grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-28 py-10">
            <div className="text-black text-lg text-justify flex flex-col space-y-4 pr-0 md:pr-14">
              <p>SAKE features unique art from award-winning artist Jonathan Jay Lee.</p>
              <p>
                Lee's past clients include Marvel, Disney Plus, Apple, and many more. His accolades are too numerous to
                include.
              </p>
            </div>
            <div className="text-black text-lg flex flex-col space-y-4">
              <p>
                SAKΞは、受賞歴のあるアーティスト、ジョナサン・ ジェイ・リーのユニークなアートをフィーチャーして います。
              </p>
              <p>
                Leeの過去のクライアントには、Marvel、Disney Plus、Appleなどがあります。 彼の称賛は数が多す
                ぎて含めることができません。
              </p>
            </div>
          </div>
        </div>
        <div className="z-10 relative max-w-4xl mx-auto">
          <Image src="/images/sake-sketch.jpg" width={"958px"} height={"557px"} />
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="px-10 lg:px-0 grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-28 py-10">
            <div className="text-black text-lg text-justify flex flex-col space-y-4 pr-0 md:pr-14">
              <p>
                Set against Neo Tokyo, Lee's work features both youthful hipsters and traditional salarymen enjoying
                SAKE, showcasing that sake is for everyone—with SAKE bridging the gap between tradition and tomorrow.
              </p>
            </div>
            <div className="text-black text-lg flex flex-col space-y-4">
              <p>
                ネオ東京を舞台にしたリーの作品は、若々しいヒッ プスターと伝統的なサラリーマンの両方がSAKΞを
                楽しんでいることを特徴としており、SAKΞが伝統と 明日のギャップを埋めることで、日本酒はすべての
                人のためのものであることを示しています。
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ArtistPage;
