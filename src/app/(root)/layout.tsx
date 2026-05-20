import type { Metadata } from "next";
import "../../styles/globals.css";
import { Navbar } from "../../components/Navbar/Navbar";
import { Footer } from "../../components/Footer/Footer";

export const metadata: Metadata = {
  title: "United Finance & Leasing Pvt. Ltd.",
  description: "RBI Registered NBFC offering Business, MSME, Gold, Personal, Two-Wheeler and Mortgage loans.",
  icons: {
    icon: "/favicon.jpg",
    shortcut: "/favicon.jpg",
    apple: "/favicon.jpg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased text-gray-900 bg-white">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
