import Section from "@/components/Section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gouvernance et organisation",
  description:
    "Organisation et gouvernance de la pêche artisanale au Sénégal : rôle de l’État, du CONIPAS et des Conseils Locaux de Pêche Artisanale (CLPA).",
};

export default function GouvernancePage() {
  return (
    <>
      <Section title="Gouvernance de la pêche artisanale">
        <p className="max-w-4xl text-gray-700 leading-relaxed">
          La gouvernance de la pêche artisanale au Sénégal repose sur un dispositif
          participatif associant l’État, les acteurs professionnels et les
          structures locales de cogestion. Ce modèle vise à garantir une gestion
          durable des ressources halieutiques, l’équité entre les acteurs et
          l’acceptabilité sociale des décisions.
        </p>
      </Section>

      <Section title="Rôle de l’État">
        <p className="max-w-4xl text-gray-700 leading-relaxed">
          L’État, à travers l’administration des pêches, assure les fonctions de
          définition des politiques publiques, de réglementation, de contrôle et
          de pilotage stratégique du secteur de la pêche.
        </p>
      </Section>

      <Section title="Rôle du CONIPAS">
        <ul className="max-w-4xl list-disc list-inside space-y-2 text-gray-700">
          <li>Harmonisation des positions des familles professionnelles</li>
          <li>Formulation d’avis et de recommandations interprofessionnels</li>
          <li>Dialogue structuré avec l’État</li>
          <li>Participation aux cadres de concertation nationaux</li>
        </ul>
        <p className="max-w-4xl mt-4 text-gray-700 leading-relaxed">
          Le CONIPAS ne se substitue pas aux prérogatives réglementaires de
          l’administration et agit exclusivement dans un cadre consultatif et
          interprofessionnel.
        </p>
      </Section>

      <Section title="Rôle des CLPA">
        <p className="max-w-4xl text-gray-700 leading-relaxed">
          Les Conseils Locaux de Pêche Artisanale (CLPA) constituent l’échelon de
          gouvernance de proximité. Ils participent à la mise en œuvre locale des
          mesures de gestion, à la médiation entre acteurs et à la remontée
          d’informations issues du terrain.
        </p>
      </Section>

      <Section title="Organisation interne du CONIPAS">
        <ul className="max-w-4xl list-disc list-inside space-y-2 text-gray-700">
          <li>Assemblée générale</li>
          <li>Bureau exécutif</li>
          <li>Commissions techniques thématiques</li>
        </ul>
        <p className="max-w-4xl mt-4 text-gray-700 leading-relaxed">
          Ce fonctionnement garantit une représentation équilibrée des différentes
          composantes de la pêche artisanale et la légitimité des positions portées
          au niveau national.
        </p>
      </Section>
    </>
  );
}
