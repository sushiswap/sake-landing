import { Layout } from "../components";
import Claim from "../components/nft/claim";
import { OPENSEA_NFT_URL } from "../constants";

const NftPage = () => {
  return (
    <Layout currentPage="nft">
      <div>
        <div className="absolute">
          <style jsx>{`
            div:after {
              position: absolute;
              content: "";
              display: block;
              top: 0;
              left: 0;
              height: 100%;
              width: 100%;
              background: linear-gradient(
                to bottom,
                rgba(0, 0, 0, 0) 0%,
                #000000 100%
              );
            }
          `}</style>
          <div>
            <video
              loop
              muted
              autoPlay
              className="relative w-screen"
              src={"/images/sake_nft.mp4"}
              style={{
                background:
                  "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,255) 70%)",
              }}
            />
          </div>
        </div>
        <div className="absolute flex flex-col w-full text-white brand-font">
          <div className="flex flex-col items-center justify-end space-y-6 h-[50vh]">
            <div className="text-3xl">FVCK SAKΞ NFT</div>
            <Claim />
          </div>
          <div className="flex flex-row justify-center space-x-24 p-28">
            <div className="space-y-8">
              <div>{`For SAKΞ NFT, the incredible Vancouver artists FVCKRENDER & BAEGE designed collaboratively. The animated visual celebrates a surreal metaverse where sake becomes a meta physical object floating in a Japanese inspired pavilion. This NFT features iconic imagery from both artists with an iconic bottle designed by BIG Architects.`}</div>
              <div>
                <a
                  className="underline"
                  href={OPENSEA_NFT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on Opensea
                </a>
              </div>
              <div>{`SAKΞ NFT collectors will get access to FVCKRENDERS latest project FVCKAVATAR//  SAKΞ NFT will be utilised to redeem the physical bottle of sake.  We estimate sake redemption to happen end of May 2022  SAKΞ NFT will utilised for governance in the SAKΞ DAO.`}</div>
              <div>{`*SAKE DAO is launching Q2 2022`}</div>
            </div>
            <div className="space-y-6">
              <div>{`SAKΞNFTのために、素晴らしいバンクーバーのアーティストFVCKRENDER＆BAEGEが共同でデザインしました。アニメーションのビジュアルは、日本酒が日本のインスピレーションを得たパビリオンに浮かぶメタ物理オブジェクトになるシュールなメタバースを祝います。このNFTは、BIG Architectsによってデザインされた象徴的なボトルを使用して、両方のアーティストの象徴的な画像を特徴としています。`}</div>
              <div>
                <a
                  className="underline"
                  href={OPENSEA_NFT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Openseaで見る
                </a>
              </div>
              <div>{`SAKΞNFTコレクターは、FVCKRENDERSの最新プロジェクトFVCKAVATAR //にアクセスできます。`}</div>
              <div>{`SAKΞNFTは、物理的な日本酒のボトルを引き換えるために利用されます。日本酒の償還は2022年5月末に行われると見込んでいます`}</div>
              <div>{`SAKΞNFTは、SAKΞDAOのガバナンスに利用されます。`}</div>
              <div>{`* SAKΞDAOは2022年第2四半期に発売されます`}</div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NftPage;
