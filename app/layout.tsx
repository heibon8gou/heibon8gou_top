import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "HEIBON8GOU | 平凡8号",
  description: "アイデアを形にする、個人の実験室。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${notoSansJP.variable} min-h-screen bg-white text-gray-900 font-sans antialiased selection:bg-lab-accent selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
