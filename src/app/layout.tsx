import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "KRONA™ — Digital Agency & Creative Engineering Studio | Made by idankz",
  description: "A premier design and technology agency demo crafting category-defining digital products, brand identities, and high-performance web experiences. Made by idankz",
  keywords: ["Digital Agency", "Creative Studio", "Next.js", "Web Development", "Brand Identity", "Design Engineering", "idankz"],
  authors: [{ name: "idankz", url: "https://github.com/idankz" }],
  creator: "idankz",
  openGraph: {
    title: "KRONA™ — Digital Agency & Creative Engineering Studio",
    description: "Crafting category-defining digital products and brand systems. Made by idankz",
    url: "https://krona-agency-nextjs.vercel.app",
    siteName: "KRONA Studio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-[#09090b] text-[#f4f4f5] antialiased selection:bg-[#f4f4f5] selection:text-[#09090b] min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
