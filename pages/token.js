import { Layout } from "../components";

const TokenPage = () => {
  return (
    <Layout currentPage="token">
      <div className="pb-20">
        <div
          className="hidden sm:block relative w-full aspect-w-5 aspect-h-2"
          style={{
            backgroundImage: `url('/images/miso.jpg')`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="brand-font px-10 lg:px-0 pt-14 md:pt-36 flex flex-col space-y-4  max-w-4xl mx-auto text-xl text-white">
            <p>May 20th, 2021</p>
            <p>888 bottles of SAKE</p>
            <p>
              Only Available for <a className="underline text-pinkish cursor-pointer">Purchase on MISO</a>
            </p>
          </div>
        </div>
        <div
          className="block sm:hidden relative w-full aspect-w-2 aspect-h-2"
          style={{
            backgroundImage: `url('/images/miso.jpg')`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="brand-font px-10 lg:px-0 pt-14 md:pt-36 flex flex-col space-y-4  max-w-4xl mx-auto text-xl text-white">
            <p>May 20th, 2021</p>
            <p>888 bottles of SAKE</p>
            <p>
              Only Available for <a className="underline text-pinkish cursor-pointer">Purchase on MISO</a>
            </p>
          </div>
        </div>
        <div className="px-10 md:max-w-lg mx-auto pb-10 md:pb-16">
          <div className="relative w-full -mt-10">
            <div className="px-6 md:px-10 py-6 bg-white">
              <div className="brand-font text-black text-center text-sm md:text-xl">WORLD’S FIRST TOKENIZED SAKE</div>
            </div>
          </div>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="px-10 lg:px-0 grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-28">
            <div className="brand-font text-white text-base md:text-lg text-justify flex flex-col space-y-4">
              <p>SAKE is only available for purchase on MISO.</p>
              <p>On May 20th, the Dutch auction to own 1 of 888 bottles of SAKE begins.</p>
              <p>
                Only 888 bottles of SAKE will ever be made. To own a bottle of SAKE, you must purchase at least 1 of 888
                SAKE tokens. You can gift, sell, or redeem a SAKE token to receive your bottle of SAK (almost) anywhere
                in the world.
              </p>
              <p> Brewing begins on May 21, 2021.</p>
            </div>
            <div className="text-white text-base md:text-lg flex flex-col space-y-4">
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
