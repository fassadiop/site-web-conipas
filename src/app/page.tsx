import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Card from "@/components/Card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accueil",
  description:
    "Le Conseil Interprofessionnel de la Pêche Artisanale au Sénégal (CONIPAS) est l’organe national de concertation et de représentation des acteurs de la pêche artisanale.",
};

export default function HomePage() {
  return (
    <>
      <Hero
        title="La voix nationale de la pêche artisanale au Sénégal"
        subtitle="Concertation interprofessionnelle • Gouvernance • Durabilité"
        ctaPrimary="Découvrir le CONIPAS"
        ctaSecondary="Nos actions"
      />

      <Section title="Qui sommes-nous ?">
        <p className="max-w-4xl text-gray-700 leading-relaxed">
          Le Conseil Interprofessionnel de la Pêche Artisanale au Sénégal (CONIPAS)
          est l’organe national de concertation et de représentation des acteurs
          de la pêche artisanale. Il œuvre pour une gouvernance inclusive,
          durable et équitable du secteur, en lien avec l’État, les collectivités
          territoriales et les organisations professionnelles.
        </p>
      </Section>

      <Section title="Notre rôle">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card title="Représentation nationale" />
          <Card title="Concertation interprofessionnelle" />
          <Card title="Contribution aux politiques publiques" />
          <Card title="Durabilité et sécurité alimentaire" />
        </div>
      </Section>
    </>
  );
}
