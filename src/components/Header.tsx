import Link from "next/link";

export const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      {/* 上段：会社名 */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <Link
            href={`/`}
            style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <h1 className="text-3xl font-bold text-gray-800">株式会社　スマートリビング</h1>
        </Link>
      </div>

      {/* 下段：ナビゲーション */}
      <nav className="border-t border-gray-200 bg-gray-50">
        <div className="max-w-6xl mx-auto flex justify-between py-3 px-4">
          <Link
            href="/"
            className="flex-1 text-center text-gray-700 hover:text-blue-600 transition"
          >
            ホーム
          </Link>
          <Link
            href="/company"
            className="flex-1 text-center text-gray-700 hover:text-blue-600 transition"
          >
            会社概要
          </Link>
          <Link
            href="/contact"
            className="flex-1 text-center text-gray-700 hover:text-blue-600 transition"
          >
            お問い合わせ
          </Link>
        </div>
      </nav>
    </header>
  );
};
