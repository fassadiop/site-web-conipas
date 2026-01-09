import type { Metadata } from "next";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description:
    "Politique de confidentialité du site du Conseil Interprofessionnel de la Pêche Artisanale au Sénégal (CONIPAS).",
};

export default function ConfidentialitePage() {
  return (
    <>
      <Section title="Politique de confidentialité">
        <div className="max-w-4xl space-y-6 text-gray-700 leading-relaxed">
          <p>
            Le Conseil Interprofessionnel de la Pêche Artisanale au Sénégal
            (CONIPAS) attache une importance particulière à la protection des
            données personnelles et au respect de la vie privée des utilisateurs
            de son site.
          </p>

          <h3 className="font-semibold">Données collectées</h3>
          <p>
            Le site du CONIPAS ne collecte aucune donnée personnelle à des fins
            commerciales. Les données éventuellement transmises via les moyens
            de contact sont utilisées uniquement pour répondre aux demandes
            formulées.
          </p>

          <h3 className="font-semibold">Finalité du traitement</h3>
          <p>
            Les informations communiquées sont utilisées exclusivement dans le
            cadre des échanges institutionnels et ne font l’objet d’aucune
            cession à des tiers.
          </p>

          <h3 className="font-semibold">Conservation des données</h3>
          <p>
            Les données sont conservées pour la durée strictement nécessaire au
            traitement des demandes et conformément aux obligations légales
            applicables.
          </p>

          <h3 className="font-semibold">Droits des utilisateurs</h3>
          <p>
            Conformément aux principes de protection des données, toute personne
            peut demander l’accès, la rectification ou la suppression des
            informations la concernant en contactant le CONIPAS.
          </p>

          <h3 className="font-semibold">Sécurité</h3>
          <p>
            Le CONIPAS met en œuvre des mesures techniques et organisationnelles
            appropriées afin de garantir la sécurité des données et d’éviter tout
            accès non autorisé.
          </p>
        </div>
      </Section>
    </>
  );
}
