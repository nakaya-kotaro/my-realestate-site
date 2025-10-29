import { Hero } from '@/components/Hero'

export default function PrivacyPolicyPage() {
  return (
    <div>
      <Hero
      imageSrc="/images/contact.jpg"
      title="お問い合わせ"
    />

      <hr className="border-gray-200 my-8" />

      <div style={{ maxWidth: '800px', margin: '0 auto', lineHeight: 1.8 }}>
        <h2>個人情報の取り扱いについて</h2>
        <p>
          （株）スマートリビング（以下、「当社」といいます）は、
          お客様から取得した個人情報を適切に管理し、以下の目的のみに利用いたします。
        </p>
        <ul>
          <li>お問い合わせへの回答</li>
          <li>サービスの提供および改善</li>
          <li>法令に基づく対応</li>
        </ul>
        <p>
          当社は、お客様の同意なく第三者に個人情報を提供することはありません。
        </p>
      </div>
    </div>
  )
}
