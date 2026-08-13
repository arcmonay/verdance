import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { CartProvider } from "@/lib/cart-context";
import "./globals.css";

const sans = Work_Sans({
  variable: "--font-work",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "Verdance — Quiet green home machines",
    template: "%s · Verdance",
  },
  description:
    "Kitchen composters, outdoor tumblers, sensor cans, dehumidifiers, dehydrators, thermostats, and grow lights. Each listing shows a catalog photo of that machine.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${sans.variable} h-full`}>
      <body className={`${sans.className} min-h-full antialiased`}>
        <CartProvider>
          <div className="site">
            <Header />
            <main className="site-main">{children}</main>
            <Footer />
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
