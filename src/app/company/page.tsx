import { Hero } from "@/components/Hero";

export default function CompanyPage() {
  return (
    <div className="bg-white text-gray-900">
      {/* Heroセクション */}
      <Hero
        imageSrc="/images/company.jpg"
        title="会社概要"
      />

      <hr className="border-gray-200 my-8" />

      {/* 会社概要情報 */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-6">会社概要</h2>
        <table className="w-full text-left border-t border-b border-gray-200">
          <tbody>
            <tr>
              <th className="py-2 w-1/3 font-medium">会社名</th>
              <td className="py-2">株式会社 スマートリビング</td>
            </tr>
            <tr>
              <th className="py-2 font-medium">所在地</th>
              <td className="py-2">
                〒252-0324<br />
                神奈川県相模原市南区相武台一丁目12-15エトワール相武台212
              </td>
            </tr>
            <tr>
              <th className="py-2 font-medium">代表取締役</th>
              <td className="py-2">中屋 浩</td>
            </tr>
            <tr>
              <th className="py-2 font-medium">電話番号</th>
              <td className="py-2">046-252-1400</td>
            </tr>
            <tr>
              <th className="py-2 font-medium">設立</th>
              <td className="py-2">平成20年4月</td>
            </tr>
            <tr>
              <th className="py-2 font-medium">事業内容</th>
              <td className="py-2">不動産の売買・仲介・賃貸・管理</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Googleマップ埋め込み */}
      <section className="max-w-4xl mx-auto px-4 pb-12">
        <h2 className="text-2xl font-bold mb-6">アクセスマップ</h2>
        <div className="w-full h-80 md:h-96 mb-4">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3248.1093625634207!2d139.40394737598888!3d35.501573939821895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018ff807ca4045b%3A0x5a3a4b631f62a70b!2z44Ko44OI44Ov44O844Or55u45q2m5Y-w!5e0!3m2!1sja!2sjp!4v1761747602746!5m2!1sja!2sjp"
          width="100%"
          height="100%"
          style={{ border:0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <p className="text-1xl text-left text-gray-700">
          小田急小田原線「相武台前駅」徒歩4分
        </p>
      </section>
    </div>
  );
}
