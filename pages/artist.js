import Image from "next/image";

import { Layout } from "../components";

const ArtistPage = () => {
  return (
    <Layout currentPage="artist">
      {/* override background */}
      <div className="bg-white">
        <div
          className="relative w-full z-10 min-h-screen"
          style={{
            backgroundImage: `url('/images/neo-tokyo.jpg')`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div className="max-w-4xl mx-auto py-10">
          <div className="w-full mx-auto text-center pb-10">
            <div className="brand-font inline-block text-white text-2xl px-10 md:px-20 py-4 bg-black">
              Jonathan Jay Lee
            </div>
          </div>
          <div className="px-10 lg:px-0 grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-28 py-10">
            <div className="brand-font text-black text-lg flex flex-col space-y-4">
              <p>SAKΞ features unique art from award-winning artist Jonathan Jay Lee.</p>
              <p>
                Lee's past clients include Marvel, Disney Plus, Mercedes, MINI, HSBC, Apple, and the Japan Tourism
                Board, among numerous others.
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
            <div className="brand-font text-black text-lg flex flex-col space-y-4">
              <p>
                Playing on Bunraku brewery's evolution of bringing the centuries-long tradition of enjoying sake to a
                contemporary audience in modern Japan, his work interprets the modern izakaya set against a backdrop of
                Neo-Tokyo, showcasing that sake is for everyone—with SAKΞ bridging the gap between traditional heritage
                and what is yet to come.
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
