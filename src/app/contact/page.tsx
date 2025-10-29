'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Hero } from '@/components/Hero'

export default function ContactPage() {
  const router = useRouter()

  const [lastName, setLastName] = useState('')
  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')
  const [agreed, setAgreed] = useState(false)
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!agreed) {
      alert('個人情報の取り扱いに同意してください。')
      return
    }

    const formData = new FormData(e.currentTarget)
    formData.append('message', message)

    try {
      const res = await fetch('https://formspree.io/f/xovpvqqn', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      })

      if (res.ok) {
        alert('送信が完了しました。ありがとうございます！')
        router.push('/')
      } else {
        alert('送信に失敗しました。もう一度お試しください。')
      }
    } catch (error) {
      console.error(error)
      alert('送信エラーが発生しました。')
    }
  }

  return (
    <div className="bg-white text-gray-900">
      {/* Heroセクション */}
      <Hero
        imageSrc="/images/contact.jpg"
        title="お問い合わせ"
      />

      <hr className="border-gray-200 my-8" />

      {/* お問い合わせフォーム */}
      <section className="max-w-2xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-2 text-center">お問い合わせフォーム</h2>
        <p className="text-sm text-left mb-6">
          <span className="text-red-500">※</span>
          <span className="text-gray-500">すべて入力必須項目になります</span>
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* 氏・名 */}
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium mb-1">氏</label>
              <input
                type="text"
                name="last_name"
                required
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="例：山田"
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div className="flex-1">
              <label className="block text-sm font-medium mb-1">名</label>
              <input
                type="text"
                name="first_name"
                required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="例：太郎"
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
          </div>

          {/* メールアドレス */}
          <div>
            <label className="block text-sm font-medium mb-1">メールアドレス</label>
            <input
              type="email"
              name="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* お問い合わせ内容（可変長テキスト） */}
          <div>
            <label className="block text-sm font-medium mb-1">お問い合わせ内容</label>
            <textarea
              name="message"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="お問い合わせ内容をご記入ください"
              rows={6}
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 outline-none resize-y"
            />
          </div>

          {/* 同意チェック */}
          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
            />
            <span>
              <a
                href="/privacy-policy"
                target="_blank"
                className="text-blue-600 underline"
              >
                個人情報の取り扱い
              </a>
              に同意します
            </span>
          </label>

          {/* 送信ボタン */}
          <div className="text-center">
            <button
              type="submit"
              disabled={!agreed}
              className={`px-6 py-2 rounded-md text-white transition ${
                agreed ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-400 cursor-not-allowed'
              }`}
            >
              送信
            </button>
          </div>
        </form>
      </section>
    </div>
  )
}
