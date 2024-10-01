import type { Metadata } from "next";
import "./globals.css";
import { Montserrat } from "next/font/google";
import chancenlogo from "@/assets/images/Chencen.png";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Chancen Int'l Cameroon",
  description: "Get funding for your school ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href={chancenlogo.src} />
      </head>
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
