import Image from "next/image";
import { Layout } from "../components";

const SakePage = () => {
  return (
    <Layout currentPage="sake">
      {/* Overflow for absolute circular graphics */}
      <div className="overflow-x-hidden">
        <div
          className="relative w-full z-10 aspect-w-3 aspect-h-2"
          style={{
            backgroundImage: `url('/images/sake-12.jpg')`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div className="max-w-xl lg:max-w-2xl mx-auto pb-10 md:pb-16">
          <div className="relative flex w-full mx-auto justify-center -mt-96 md:-mt-100">
            <div className="bg-golden rounded-full w-100 h-100 md:w-110 md:h-110"></div>
          </div>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="px-10 lg:px-0 grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-18 pb-20">
            <div className="brand-font text-white text-lg flex flex-col space-y-4 pr-0">
              <p>
                SAKΞ is an extremely rare style of sake: Junmai Daiginjo Muroka Nama Genshu Kimoto Shizuku
                (純米大吟醸無濾過生原酒生酛雫).
              </p>
              <p>
                "Junmai Daiginjo" (純米大吟醸) sake requires extraordinary attention to detail, with constant monitoring
                of temperature, fermentation and enzymatic activity for far longer than a typical sake. To achieve this
                level of quality, every grain of rice used in SAKΞ is polished to at least half of its original size.
                This extremely labor-intensive process requires stringent quality controls and a costly production
                process to produce very limited quantities. The result is concentrated yet nuanced, with a complex and
                highly fragrant style.
              </p>
            </div>
            <div className="text-white text-lg flex flex-col space-y-4">
              <p>SAKΞは非常に珍しい日本酒です。純米大 吟醸無濾過生原酒生酛。</p>
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
              className="hidden md:block absolute bg-golden rounded-full"
              style={{ width: "680px", height: "680px", right: "-47%", top: "-18rem" }}
            />
            <div
              className="block md:hidden absolute bg-golden rounded-full"
              style={{ width: "400px", height: "400px", right: "-20%", top: "-10rem" }}
            />
          </div>
          <div className="z-10 relative px-10 lg:px-0 grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-18 py-20">
            <div className="brand-font text-white text-lg flex flex-col space-y-4 ">
              <p>
                "Muroka Nama Genshu" (無濾過生原酒) sake is unfiltered, unpasteurized, and undiluted. By preserving the
                natural flavors and aromas throughout the brewing process, SAKΞ maintains its natural coloring and
                original alcohol percentage. The resulting taste is one without compromise: notes of raw walnut,
                marzipan and a refreshing bitter note on the back end of the palate.
              </p>
              <p>
                The traditional "Kimoto" (生酛) brewing method adds multiple weeks to the brewing process to give SAKΞ a
                bright, creamy texture with limestone undertones and a gentle-yet-refreshing, slightly salty finish.
              </p>
              <p>
                Bottled as "Shizuku" (雫), this painstaking method allows only free-run sake to drip into the tank via
                gravity. Because no pressure is applied, SAKΞ's most delicate and elegant characteristics are preserved
                in the bottle.
              </p>
              <p>
                Once complete, SAKΞ is stored in a specialized tank that maintains a perfect -5ºc to prevent spoilage.
                These exceptional conditions ensure that every time SAKΞ is bottled, the prized liquid maximizes its
                freshness and natural qualities.
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
