import Image from "next/image";

import { Layout } from "../components";

const TokenPage = () => {
  return (
    <Layout currentPage="token">
      <div className="pb-20">
        <div
          className="relative w-full"
          style={{
            backgroundImage: `url('/images/miso.jpg')`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            height: "460px",
          }}
        >
          <div className="flex flex-col space-y-4 pt-36 max-w-4xl mx-auto text-lg text-white">
            <p>May 20th, 2021</p>
            <p>888 bottles of SAKE</p>
            <p>Only Available for Purchase on MISO</p>
          </div>
        </div>
        <div className="max-w-lg mx-auto pb-16">
          <div className="relative w-full -mt-10">
            <div className="px-10 py-6 bg-white">
              <div className="text-black text-center text-2xl">WORLD’S FIRST TOKENIZED SAKE</div>
            </div>
          </div>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 gap-28">
            <div className="text-white text-lg text-justify flex flex-col space-y-4">
              <p>SAKE is only available for purchase on MISO.</p>
              <p>On May 20th, the Dutch auction to own 1 of 888 bottles of SAKE begins.</p>
              <p>
                Only 888 bottles of SAKE will ever be made. To own a bottle of SAKE, you must purchase at least 1 of 888
                SAKE tokens. You can gift, sell, or redeem a SAKE token to receive your bottle of SAK (almost) anywhere
                in the world.
              </p>
              <p> Brewing begins on May 21, 2021.</p>
            </div>
            <div className="text-white text-lg flex flex-col space-y-4">
              <p>SAKΞはMISOでのみ購入できます。</p>
              <p>5月20日、888本のSAKΞのうち1本を所有するオランダ のオークションが始まります。</p>
              <p>
                SAKΞのボトルを所有するには、$ SUSHIを使用して888 SKE（SAK1）トークンの少なくとも1つに正常に入札する
                必要があります。 SKEトークンは、SAKΞボトルの所有権 を表します。
                トークンを保持したり、ギフトとして贈ったり 、交換して新しいSAKΞのボトルを直接発送したりできま す。
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TokenPage;
