import Section from "@/components/Section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Données et observatoire",
  description:
    "Données, indicateurs et observatoire de la pêche artisanale : une gouvernance fondée sur l’analyse et la transparence au service du dialogue.",
};

export default function DonneesPage() {
  return (
    <>
      <Section title="Données et observatoire">
        <p className="max-w-4xl text-gray-700 leading-relaxed">
          Le CONIPAS promeut une gouvernance de la pêche artisanale fondée sur
          l’analyse et la compréhension des données issues du terrain, afin
          d’éclairer le dialogue et les décisions publiques.
        </p>
      </Section>

      <Section title="Un observatoire au service du dialogue">
        <p className="max-w-4xl text-gray-700 leading-relaxed">
          L’observatoire de la pêche artisanale vise à consolider, analyser et
          valoriser des indicateurs synthétiques relatifs au secteur, dans le
          respect des cadres institutionnels et réglementaires existants.
        </p>
      </Section>

      <Section title="Types de données valorisées">
        <ul className="max-w-4xl list-disc list-inside space-y-2 text-gray-700">
          <li>Activité des sites de débarquement</li>
          <li>Tendances de production et de débarquement</li>
          <li>Dynamiques socio-économiques du secteur</li>
          <li>Indicateurs territoriaux et régionaux</li>
        </ul>
      </Section>

      <Section title="Transparence et concertation">
        <p className="max-w-4xl text-gray-700 leading-relaxed">
          Les données mises à disposition contribuent à renforcer la
          transparence, la concertation et l’acceptabilité sociale des
          politiques publiques en matière de pêche artisanale.
        </p>
      </Section>
    </>
  );
}
