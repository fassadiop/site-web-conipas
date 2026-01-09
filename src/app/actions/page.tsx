import Section from "@/components/Section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Actions et plaidoyer",
  description:
    "Actions, plaidoyers, avis interprofessionnels et contributions du CONIPAS à la gouvernance durable de la pêche artisanale au Sénégal.",
};

export default function ActionsPage() {
  return (
    <>
      <Section title="Actions du CONIPAS">
        <p className="max-w-4xl text-gray-700 leading-relaxed">
          Le CONIPAS mène des actions de concertation, de représentation et de
          plaidoyer visant à défendre les intérêts collectifs des acteurs de la
          pêche artisanale et à contribuer à la gouvernance durable du secteur.
        </p>
      </Section>

      <Section title="Plaidoyer institutionnel">
        <p className="max-w-4xl text-gray-700 leading-relaxed">
          Le plaidoyer du CONIPAS s’appuie sur les réalités du terrain, les données
          disponibles et le dialogue avec les institutions publiques. Il vise à
          influencer les politiques publiques dans l’intérêt de la pêche
          artisanale.
        </p>
      </Section>

      <Section title="Avis et positions">
        <p className="max-w-4xl text-gray-700 leading-relaxed">
          Le CONIPAS formule des avis interprofessionnels sur les questions
          majeures affectant le secteur, notamment la gestion des ressources,
          l’attribution des licences et les mesures de conservation.
        </p>
      </Section>

      <Section title="Concertation nationale">
        <p className="max-w-4xl text-gray-700 leading-relaxed">
          Le CONIPAS participe aux cadres de concertation nationaux et sectoriels
          afin de favoriser une prise de décision concertée, équilibrée et
          socialement acceptable.
        </p>
      </Section>
    </>
  );
}
