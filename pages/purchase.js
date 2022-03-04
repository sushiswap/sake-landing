import Image from "next/image";

import { Layout } from "../components";

const ArtistPage = () => {
  return (
    <Layout currentPage="purchase">
      {/* override background */}
      <div className="bg-white">
        <div
          className="relative z-10 block w-full aspect-w-3 aspect-h-2"
          style={{
            backgroundImage: `url('/images/sake-white-box.jpg')`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div className="max-w-4xl py-10 mx-auto">
          <div className="w-full pb-10 mx-auto text-center">
            <div className="inline-block px-6 py-4 text-2xl text-white bg-black brand-font md:px-8">888 BOTTLES</div>
          </div>
          <div className="grid grid-cols-1 gap-16 px-10 py-10 lg:px-0 md:grid-cols-2 md:gap-28">
            <div className="flex flex-col space-y-4 text-lg text-black brand-font">
              <p>On May 20th, the Dutch auction to own 1 of 888 bottles of SAKΞ begins on MISO launchpad.</p>
              <p>
                To receive a bottle of SAKΞ, you must own and redeem at least 1 of 888 SAK3 (SAK3) tokens. Each token
                represents ownership of a bottle, with SAK3 tokens starting at 88,000 $SUSHI and declining in price
                until a bidder accepts the going price, or 7 days pass. You need a whole SAK3 token to order a bottle of
                SAKΞ (e.g. 1.0 SAK3 can be redeemed for a bottle; 0.77 SAK3 cannot).
              </p>
            </div>
            <div className="flex flex-col space-y-4 text-lg text-black">
              <p>
                5月20日、MISO媒体上にて、888本のSAKΞのうちの一本を獲得するためのオランダのオークションが始まります。
              </p>
              <p>
                SAKΞのボトルを手に入れるためには、少なくとも888個のSAK3
                (SAK3)トークンのうち1つを購入する必要があります。各トークンはSAKΞの所有権を意味し、トークンは88,000
                $SUSHIから始まり、入札者が価格を受け入れるか7日間経過するまで価格は下がり続けます。SAKΞをオーダーするためには、完全なSAK3トークンが必要です。（例：1.0トークンは一本注文できますが、0.77トークンではできません）
              </p>
            </div>
          </div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <Image src="/images/sake-apparel.jpg" width={"958px"} height={"474px"} />
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 gap-16 px-10 py-10 lg:px-0 md:grid-cols-2 md:gap-28">
            <div className="flex flex-col space-y-4 text-lg text-black brand-font">
              <p>
                You can redeem one or more SAK3 tokens for a bottle once SAKΞ is finished brewing in late August. When
                you redeem your token, your SAKΞ is bottled by hand and shipped fresh almost anywhere in the world
                courtesy of Sake Samurai Elliot Faber.
              </p>
            </div>
            <div className="flex flex-col space-y-4 text-lg text-black">
              <p>
                8月下旬にSAKΞの醸造が終了次第、SAK3トークンを購入することができます。トークンを購入している頃には、SAKΞは手作業での瓶詰め作業を経て新鮮な状態のまま、酒サムライエリオット・フェイバーの名の下に、世界中へ届けられます。{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <Image src="/images/sake-pattern.jpg" width={"958px"} height={"474px"} />
        </div>
      </div>
    </Layout>
  );
};

export default ArtistPage;
