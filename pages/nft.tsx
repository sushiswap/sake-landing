import { Layout } from "../components";
import Claim from "../components/nft/claim";
import { OPENSEA_NFT_URL } from "../constants";

const OpenseaIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20 10C20 15.5225 15.5225 20 10 20C4.47746 20 0 15.5225 0 10C0 4.47746 4.47746 0 10 0C15.5237 0 20 4.47746 20 10Z"
      fill="white"
    />
    <path
      d="M4.9336 10.336L4.97674 10.2682L7.57814 6.19866C7.61616 6.13908 7.70554 6.14524 7.7343 6.20996C8.1689 7.18394 8.5439 8.39526 8.36822 9.14938C8.29322 9.45966 8.08774 9.87986 7.85656 10.2682C7.82678 10.3247 7.7939 10.3802 7.75896 10.4336C7.74252 10.4583 7.71478 10.4727 7.68498 10.4727H5.00962C4.9377 10.4727 4.89558 10.3946 4.9336 10.336Z"
      fill="black"
    />
    <path
      d="M16.5288 11.0922V11.7364C16.5288 11.7734 16.5062 11.8062 16.4734 11.8206C16.272 11.9069 15.5826 12.2234 15.296 12.622C14.5644 13.6402 14.0055 15.096 12.7562 15.096H7.54415C5.69689 15.096 4.19995 13.5939 4.19995 11.7405V11.6809C4.19995 11.6316 4.24001 11.5915 4.28933 11.5915H7.19485C7.25237 11.5915 7.29449 11.6449 7.28937 11.7014C7.26881 11.8905 7.30375 12.0836 7.39313 12.2593C7.56573 12.6097 7.92327 12.8285 8.30957 12.8285H9.74795V11.7056H8.32601C8.25307 11.7056 8.20993 11.6213 8.25205 11.5617C8.26745 11.5381 8.28493 11.5134 8.30341 11.4857C8.43801 11.2946 8.63013 10.9977 8.82123 10.6597C8.95171 10.4316 9.07807 10.1881 9.17979 9.94356C9.20035 9.89938 9.21677 9.85416 9.23321 9.80998C9.26095 9.7319 9.28973 9.65896 9.31027 9.58602C9.33083 9.52436 9.34725 9.45964 9.36369 9.39902C9.41199 9.19148 9.43253 8.97162 9.43253 8.74354C9.43253 8.65416 9.42843 8.56066 9.42021 8.47128C9.41609 8.37368 9.40377 8.27606 9.39143 8.17846C9.38321 8.09216 9.36781 8.00688 9.35137 7.9175C9.33083 7.78702 9.30205 7.65758 9.26917 7.52708L9.25787 7.47778C9.23321 7.38838 9.21267 7.30312 9.18391 7.21374C9.10273 6.93324 9.00925 6.65996 8.91061 6.40414C8.87465 6.30242 8.83355 6.20482 8.79245 6.10722C8.73185 5.9603 8.67019 5.82674 8.61369 5.70036C8.58493 5.64282 8.56027 5.59042 8.53561 5.537C8.50787 5.47638 8.47911 5.41576 8.45033 5.35824C8.42979 5.31406 8.40615 5.27296 8.38971 5.23186L8.21403 4.9072C8.18937 4.86302 8.23047 4.81062 8.27875 4.82398L9.37809 5.12192H9.38117C9.38321 5.12192 9.38425 5.12296 9.38527 5.12296L9.53013 5.16302L9.68939 5.20824L9.74795 5.22466V4.57124C9.74795 4.25582 10.0007 4 10.313 4C10.4692 4 10.611 4.0637 10.7127 4.16746C10.8144 4.27124 10.8781 4.41302 10.8781 4.57124V5.54112L10.9952 5.57398C11.0045 5.57708 11.0137 5.58118 11.0219 5.58734C11.0507 5.60892 11.0918 5.64076 11.1442 5.67982C11.1853 5.71268 11.2295 5.75276 11.2829 5.79386C11.3887 5.87912 11.5151 5.98906 11.6538 6.11544C11.6908 6.14728 11.7267 6.18016 11.7596 6.21304C11.9384 6.37948 12.1387 6.57468 12.3298 6.79044C12.3833 6.85106 12.4357 6.9127 12.4891 6.97742C12.5425 7.04318 12.599 7.1079 12.6483 7.17264C12.7131 7.25894 12.7829 7.34832 12.8435 7.44182C12.8723 7.486 12.9052 7.5312 12.9329 7.57538C13.011 7.69352 13.0798 7.8158 13.1456 7.93806C13.1733 7.99456 13.2021 8.0562 13.2268 8.11682C13.2997 8.28018 13.3572 8.44662 13.3942 8.61306C13.4055 8.64902 13.4137 8.68806 13.4179 8.723V8.73122C13.4302 8.78052 13.4343 8.83292 13.4384 8.88634C13.4548 9.0569 13.4466 9.22744 13.4096 9.39902C13.3942 9.47198 13.3737 9.5408 13.349 9.61376C13.3244 9.68362 13.2997 9.75656 13.2679 9.8254C13.2062 9.9682 13.1333 10.111 13.047 10.2446C13.0192 10.2939 12.9863 10.3463 12.9535 10.3956C12.9175 10.448 12.8805 10.4973 12.8476 10.5456C12.8024 10.6073 12.7542 10.672 12.7048 10.7295C12.6607 10.7901 12.6155 10.8508 12.5661 10.9042C12.4973 10.9853 12.4315 11.0624 12.3627 11.1364C12.3216 11.1847 12.2774 11.234 12.2322 11.2782C12.1881 11.3275 12.1428 11.3716 12.1017 11.4127C12.0329 11.4816 11.9754 11.535 11.9271 11.5792L11.8141 11.683C11.7976 11.6973 11.7761 11.7056 11.7535 11.7056H10.8781V12.8285H11.9795C12.2261 12.8285 12.4603 12.7412 12.6494 12.5809C12.7141 12.5244 12.9966 12.2799 13.3305 11.911C13.3418 11.8987 13.3562 11.8895 13.3727 11.8854L16.4148 11.0059C16.4713 10.9895 16.5288 11.0326 16.5288 11.0922Z"
      fill="black"
    />
  </svg>
);

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
                  className="flex flex-row items-center space-x-2 underline"
                  href={OPENSEA_NFT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div>View on Opensea</div>
                  <OpenseaIcon />
                </a>
              </div>
              <div>{`SAKΞ NFT collectors will get access to FVCKRENDERS latest project FVCKAVATAR//`}</div>
              <div>{`SAKΞ NFT will be utilised to redeem the physical bottle of sake.  We estimate sake redemption to happen end of May 2022.`}</div>
              <div>{`SAKΞ NFT will utilised for governance in the SAKΞ DAO.`}</div>
              <div>{`*SAKE DAO is launching Q2 2022`}</div>
            </div>
            <div className="space-y-6">
              <div>{`SAKΞNFTのために、素晴らしいバンクーバーのアーティストFVCKRENDER＆BAEGEが共同でデザインしました。アニメーションのビジュアルは、日本酒が日本のインスピレーションを得たパビリオンに浮かぶメタ物理オブジェクトになるシュールなメタバースを祝います。このNFTは、BIG Architectsによってデザインされた象徴的なボトルを使用して、両方のアーティストの象徴的な画像を特徴としています。`}</div>
              <div>
                <a
                  className="flex flex-row items-center space-x-2 underline"
                  href={OPENSEA_NFT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div>Openseaで見る</div>
                  <OpenseaIcon />
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
