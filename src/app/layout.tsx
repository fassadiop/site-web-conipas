import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "CONIPAS – Pêche artisanale au Sénégal",
    template: "%s | CONIPAS",
  },
  description:
    "Le Conseil Interprofessionnel de la Pêche Artisanale au Sénégal (CONIPAS) est l’organe national de concertation et de représentation des acteurs de la pêche artisanale.",
  keywords: [
    "CONIPAS",
    "pêche artisanale Sénégal",
    "gouvernance des pêches",
    "sites de débarquement",
    "cogestion pêche",
  ],
  authors: [{ name: "CONIPAS" }],
  creator: "CONIPAS",
  publisher: "CONIPAS",
  metadataBase: new URL("https://www.conipas.sn"), // à ajuster au déploiement
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="bg-white text-gray-800">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
