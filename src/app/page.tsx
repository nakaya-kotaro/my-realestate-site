import { Hero } from "@/components/Hero";

export default function HomePage() {
  return (
    <div className="bg-white text-gray-900">
      {/* トップページ用の画像とタイトル */}
      <Hero
        imageSrc="/images/home.jpg"
        title="理想の住まいを、あなたに。"
      />
      <hr className="border-gray-200 my-8" />

      {/* Hero下の企業理念・会社紹介セクション */}
      <section className="max-w-6xl mx-auto px-4 py-20 space-y-20">
        {/* 会社の強み */}
        <div className="bg-white shadow-2xl rounded-3xl p-10 md:p-16">
          <h2 className="text-4xl font-extrabold mb-10 text-center text-gray-900 relative inline-block">
            会社の強み
          </h2>

          <p className="text-xl md:text-2xl leading-relaxed mb-12 font-semibold text-gray-700 text-center">
            「お客様に寄り添う、丁寧な不動産取引」
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition">
              <h3 className="text-lg font-semibold mb-3 text-blue-600">代表直対応</h3>
              <p className="text-gray-700">代表自らが直接お客様とやり取りすることで、スピーディかつ柔軟な対応が可能です。</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition">
              <h3 className="text-lg font-semibold mb-3 text-blue-600">個別対応</h3>
              <p className="text-gray-700">仲介手数料や契約内容についても、お客様のニーズに合わせた柔軟な提案が可能です。</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition">
              <h3 className="text-lg font-semibold mb-3 text-blue-600">市場知識</h3>
              <p className="text-gray-700">地域の中古不動産市場に精通しており、適正価格での売買や売却戦略のアドバイスが得意です。</p>
            </div>
          </div>
        </div>

        {/* 事業内容 */}
        <div className="bg-gray-50 shadow-lg rounded-3xl p-10 md:p-16">
          <h2 className="text-4xl font-extrabold mb-12 text-center text-gray-900 relative inline-block">
            事業内容
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800 border-l-4 border-green-500 pl-4">中古不動産の売買仲介</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>中古マンション・戸建て・土地の購入・売却サポート</li>
                <li>物件査定、購入相談、契約手続きの代行</li>
                <li>市場価格に基づく適正価格の提案</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800 border-l-4 border-green-500 pl-4">その他サービス</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>リフォーム・リノベーションの相談</li>
                <li>資金計画やローン相談</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
