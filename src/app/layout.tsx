import type { Metadata } from "next";
import {Poppins} from "next/font/google";
import "./globals.css";
import {twMerge} from "tailwind-merge";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ['400', '500', '700'],
});

export const metadata: Metadata = {
  title: "Logisetu",
  description: "Logisetu Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={twMerge(poppins.className, "bg-black text-white antialiased")}
      >
        {children}
      </body>
    </html>
  );
}
