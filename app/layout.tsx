import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { CartProvider } from "@/lib/cart-context";
import "./globals.css";

const display = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["SOFT", "opsz"],
});

const body = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Verdance — Quiet green home machines",
    template: "%s · Verdance",
  },
  description:
    "Botanical field-guide storefront for kitchen composters, outdoor tumblers, sensor cans, dehumidifiers, dehydrators, thermostats, and grow lights. Each listing shows the machine.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} h-full`}>
      <body className="min-h-full antialiased">
        <CartProvider>
          <div className="ledger">
            <Header />
            <main className="ledger-main">{children}</main>
            <Footer />
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
