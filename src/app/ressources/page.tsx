import Section from "@/components/Section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ressources et documents",
  description:
    "Documents institutionnels, rapports, études et textes de référence relatifs à la pêche artisanale et à la gouvernance du secteur.",
};

export default function RessourcesPage() {
  return (
    <>
      <Section title="Ressources et documents">
        <p className="max-w-4xl text-gray-700 leading-relaxed">
          Cette rubrique met à disposition les documents de référence relatifs au
          CONIPAS et au secteur de la pêche artisanale, afin de faciliter l’accès
          à l’information et de renforcer la transparence.
        </p>
      </Section>

      <Section title="Documents institutionnels">
        <p className="max-w-4xl text-gray-700 leading-relaxed">
          Cette section regroupe les documents officiels du CONIPAS, notamment les
          textes fondateurs, notes institutionnelles et documents de référence.
        </p>
      </Section>

      <Section title="Rapports et études">
        <p className="max-w-4xl text-gray-700 leading-relaxed">
          Le CONIPAS met à disposition des rapports, études et analyses relatifs à
          la pêche artisanale, à la gouvernance du secteur et aux dynamiques
          socio-économiques.
        </p>
      </Section>

      <Section title="Textes réglementaires">
        <p className="max-w-4xl text-gray-700 leading-relaxed">
          Cette rubrique propose une sélection de textes réglementaires et cadres
          de référence liés à la pêche artisanale, afin de faciliter leur
          compréhension par les acteurs et le public.
        </p>
      </Section>

      <Section title="Supports d’information">
        <p className="max-w-4xl text-gray-700 leading-relaxed">
          Des guides, notes de sensibilisation et supports pédagogiques sont mis à
          disposition pour accompagner les acteurs de la pêche artisanale et
          informer le grand public.
        </p>
      </Section>
    </>
  );
}
