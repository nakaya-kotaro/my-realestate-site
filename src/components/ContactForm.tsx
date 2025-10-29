"use client";

import { useState } from "react";

export const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return <p className="text-green-600 font-medium">お問い合わせ完了しました。返信が遅れる可能性がありますがご了承ください。</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium">お名前</label>
        <input type="text" required className="w-full border rounded-md p-2" />
      </div>
      <div>
        <label className="block text-sm font-medium">メールアドレス</label>
        <input type="email" required className="w-full border rounded-md p-2" />
      </div>
      <div>
        <label className="block text-sm font-medium">お問い合わせ内容</label>
        <textarea required className="w-full border rounded-md p-2 h-32" />
      </div>
      <button
        type="submit"
        className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
      >
        送信する
      </button>
    </form>
  );
};
