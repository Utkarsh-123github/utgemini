import type { Metadata } from "next";
import {Inter} from "next/font/google";
import "./globals.css";

const inter = Inter({subsets:["latin"]});

export const metadata: Metadata = {
  title: "UtkarshGPT",
  description: "An AI chatbot that can help you with your queries.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark no-scrollbar">
      <body
        className={inter.className}
      >
        {children}
      </body>
    </html>
  );
}
