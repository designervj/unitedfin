import type { Metadata } from "next";
import "../../styles/globals.css";
import { Navbar } from "../../components/Navbar/Navbar";
import { Footer } from "../../components/Footer/Footer";

export const metadata: Metadata = {
  title: "United Fin",
  description: "United Fin Website",
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return (
    <html lang={locale}>
      <body className="font-sans antialiased text-gray-900 bg-white">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
