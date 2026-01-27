import Section from "@/components/Section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Actualités et communiqués",
  description:
    "Actualités, communiqués officiels, prises de position et événements du CONIPAS relatifs à la pêche artisanale au Sénégal.",
};

export default function ActualitesPage() {
  return (
    <>
      <Section title="Actualités et communiqués">
        <p className="max-w-4xl text-gray-700 leading-relaxed">
          Cette rubrique présente les communiqués officiels, les prises de
          position et les informations récentes relatives aux activités du
          CONIPAS et au secteur de la pêche artisanale.
        </p>
      </Section>

      <Section title="Communiqués officiels">
        <p className="max-w-4xl text-gray-700 leading-relaxed">
          Les communiqués officiels du CONIPAS expriment les positions et
          recommandations de l’interprofession sur les enjeux majeurs du
          secteur, dans un esprit de dialogue et de responsabilité.
        </p>
      </Section>

      <Section title="Actualités du secteur">
        <p className="max-w-4xl text-gray-700 leading-relaxed">
          Cette section relaie les informations clés concernant les politiques
          publiques, les initiatives et les évolutions importantes de la pêche
          artisanale au Sénégal.
        </p>
      </Section>

      <Section title="Événements et rencontres">
        <p className="max-w-4xl text-gray-700 leading-relaxed">
          Le CONIPAS participe et organise des rencontres, ateliers et cadres de
          concertation visant à renforcer la gouvernance participative et le
          dialogue entre les acteurs du secteur.
        </p>
      </Section>
    </>
  );
}
