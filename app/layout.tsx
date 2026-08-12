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
    default: "Verdance — Quiet machines for a lighter household",
    template: "%s · Verdance",
  },
  description:
    "Kitchen composters, outdoor tumblers, sensor cans, portable dehumidifiers, and a tray dryer. Each listing shows a catalog photo of that machine.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} h-full`}>
      <body className="min-h-full antialiased">
        <CartProvider>
          <div className="plot">
            <div className="plot-body">
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
            <Header />
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
