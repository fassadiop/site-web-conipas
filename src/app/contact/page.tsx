import Section from "@/components/Section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contacter le Conseil Interprofessionnel de la Pêche Artisanale au Sénégal (CONIPAS) pour toute information, contribution ou partenariat.",
};

export default function ContactPage() {
  return (
    <>
      <Section title="Contact">
        <p className="max-w-4xl text-gray-700 leading-relaxed">
          Le Conseil Interprofessionnel de la Pêche Artisanale au Sénégal (CONIPAS)
          reste ouvert au dialogue avec l’ensemble des acteurs du secteur de la
          pêche artisanale, les institutions publiques, les partenaires techniques
          et financiers, ainsi que le grand public.
        </p>
      </Section>

      <Section title="Nous contacter">
        <div className="max-w-4xl space-y-4 text-gray-700">
          <p>
            Pour toute information, contribution ou demande de collaboration,
            vous pouvez nous contacter via les coordonnées ci-dessous.
          </p>

          <ul className="space-y-2">
            <li>
              <strong>Organisation :</strong> Conseil Interprofessionnel de la
              Pêche Artisanale au Sénégal (CONIPAS)
            </li>
            <li>
              <strong>Email :</strong> contact@conipas.sn
            </li>
            <li>
              <strong>Adresse :</strong> Dakar, Sénégal
            </li>
            <li>
              <strong>Téléphone :</strong> 770000000
            </li>
          </ul>

          <p className="text-sm text-gray-600">
            Un formulaire de contact en ligne sera prochainement mis à
            disposition afin de faciliter les échanges.
          </p>
        </div>
      </Section>
    </>
  );
}
