// src/app/(site)/layout.tsx

import Hero from "@/components/Hero";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Hero
        centered
        subtitle="Concertation interprofessionnelle • Gouvernance • Durabilité"
        ctaPrimary="Découvrir le CONIPAS"
        ctaSecondary="Nos actions"
      />

      {children}
    </>
  );
}
