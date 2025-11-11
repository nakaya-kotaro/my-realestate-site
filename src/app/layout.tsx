import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '株式会社 スマートリビング',
  description:
    'スマートリビングは不動産・リフォーム専門サイトです。住まいの売買、リフォーム相談、資産活用までトータルサポートいたします。',
  keywords: ['スマートリビング', '不動産', '中屋', '中屋浩', 'リフォーム', '住宅', '賃貸', '売買'],
  metadataBase: new URL('https://smart-living-jp.netlify.app'),
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      {/* bg-white + text-gray-900 で白背景固定 */}
      <body className="bg-white text-gray-900 flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
