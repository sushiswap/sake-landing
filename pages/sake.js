import Image from "next/image";
import { Layout } from "../components";

const SakePage = () => {
  return (
    <Layout currentPage="sake">
      {/* Overflow for absolute circular graphics */}
      <div className="overflow-x-hidden">
        <div
          className="relative w-full z-10"
          style={{
            backgroundImage: `url('/images/sake-12.jpg')`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            height: "764px",
          }}
        ></div>
        <div className="max-w-2xl mx-auto pb-16">
          <div className="relative w-full" style={{ marginTop: "-550px" }}>
            <div className="bg-golden rounded-full" style={{ width: "680px", height: "680px" }}></div>
          </div>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 gap-20 pb-20">
            <div className="text-white text-lg text-justify flex flex-col space-y-4 pr-14">
              <p>
                SAKE is an extremely rare style of sake: Junmai Daiginjo Muroka Nama Genshu Kimoto (純米大吟醸無濾過
                生原酒生酛).
              </p>
              <p>
                "Junmai Daiginjo" (純米大吟醸) is the highest grade of sake and is considered the pinnacle of the
                brewer's craft. To achieve this level of quality, every grain of rice used in SAKE is polished to half
                of its original size prior to fermentation. This extremely labor-intensive process requires stringent
                quality controls and a costly production process to produce very limited quantities. The resulting style
                is complex and highly-fragrant, with characteristics of white flowers and nashi pear concentrated in
                SAKE's aroma and taste.
              </p>
            </div>
            <div className="text-white text-lg flex flex-col space-y-4">
              <p>SAKΞは非常に珍しい日本酒です。純米大 吟醸無濾過生原酒生酛</p>
              <p>
                「純米大吟醸」は最高級の日本酒で、醸造 所の最高峰と言われています。このレベル
                の品質を達成するために、SAKΞで使用さ れるすべての米粒は、発酵前に元のサイズ
                の半分に研磨されます。この非常に労働集 約的なプロセスでは、非常に限られた量を
                生産するために、厳格な品質管理とコスト のかかる生産プロセスが必要です。複雑で
                香り高いスタイルで、SAKΞの香りと味わ いに白い花と梨梨の特徴が凝縮されてい ます。
              </p>
              <p>
                「むろか生原酒」酒は、ろ過も低温殺菌も希 釈もされていません。 SAKΞは、醸造プロ
                セス全体を通して自然の風味と香りを維持 することにより、自然な色と高いアルコール
                度数を維持します。結果として得られる味 は妥協のないものです：生のクルミ、マジ
                パンのノートと口蓋の後端のさわやかな 苦いノート。
              </p>
            </div>
          </div>
          <div className="z-10 relative">
            <Image src="/images/sake-nature.jpg" width={"930px"} height={"621px"} />
          </div>
          <div className="relative">
            <div
              className="absolute bg-golden rounded-full"
              style={{ width: "680px", height: "680px", right: "-47%", top: "-18rem" }}
            />
          </div>
          <div className="z-10 relative grid grid-cols-2 gap-20 py-20">
            <div className="text-white text-lg text-justify flex flex-col space-y-4 pr-14">
              <p>
                "Muroka Nama Genshu" (無濾過生原酒) sake is unfiltered unpasteurized, and undiluted. By preserving the
                natural flavors and aromas throughout the brewing process, SAKE preserves its natural coloring and high
                alcohol count. The resulting taste is one without compromise: notes of raw walnut, marzipan and a
                refreshing bitter note on the back end of the palate.
              </p>
              <p>
                The traditional "Kimoto" (生酛) brewing method adds multiple weeks to the brewing process to give SAKE a
                creamy texture and limestone undertones with a gentle, salty finish.
              </p>
              <p>
                Bottled as "Shizuku "(雫), this painstaking method allows only free-run sake to drip into into the tank
                via gravity. Because no pressure is applied, SAKE's most delicate and elegant characteristics are
                preserved in the bottle.
              </p>
            </div>
            <div className="text-white text-lg flex flex-col space-y-4">
              <p>
                「むろか生原酒」酒は、ろ過も低温殺菌も希 釈もされていません。 SAKΞは、醸造プロ
                セス全体を通して自然の風味と香りを維持 することにより、自然な色と高いアルコール
                度数を維持します。結果として得られる味 は妥協のないものです：生のクルミ、マジ
                パンのノートと口蓋の後端のさわやかな 苦いノート。
              </p>
              <p>
                伝統的な「キモト」（生酛）醸造法は、醸造プ ロセスに数週間を追加して、SAKΞにクリ
                ーミーなテクスチャーと穏やかで塩辛い仕 上がりの石灰岩のアンダートーンを与えま す。
              </p>
              <p>
                「雫」として瓶詰めされたこの骨の折れる方 法は、重力によってフリーランの酒だけが
                タンクに滴り落ちることを可能にします。圧 力がかからないため、SAKΞの最も繊細で
                エレガントな特徴がボトルに保存されてい ます。
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SakePage;
