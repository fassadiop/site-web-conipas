import type { Metadata } from "next";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "Mentions légales",
  description:
    "Mentions légales du site officiel du Conseil Interprofessionnel de la Pêche Artisanale au Sénégal (CONIPAS).",
};

export default function MentionsLegalesPage() {
  return (
    <>
      <Section title="Mentions légales">
        <div className="max-w-4xl space-y-6 text-gray-700 leading-relaxed">
          <p>
            Le présent site est le site officiel du Conseil Interprofessionnel de
            la Pêche Artisanale au Sénégal (CONIPAS).
          </p>

          <h3 className="font-semibold">Éditeur du site</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>
              <strong>Organisation :</strong> Conseil Interprofessionnel de la
              Pêche Artisanale au Sénégal (CONIPAS)
            </li>
            <li>
              <strong>Siège :</strong> Dakar, Sénégal
            </li>
            <li>
              <strong>Email :</strong> contact@conipas.sn
            </li>
          </ul>

          <h3 className="font-semibold">Responsabilité éditoriale</h3>
          <p>
            Le CONIPAS est responsable du contenu publié sur ce site. Les
            informations diffusées ont pour objectif d’informer le public sur
            les missions, les actions et le rôle institutionnel de
            l’interprofession.
          </p>

          <h3 className="font-semibold">Hébergement</h3>
          <p>
            Le site est hébergé sur une infrastructure technique conforme aux
            standards de sécurité et de disponibilité. Les informations relatives
            à l’hébergeur seront précisées lors de la mise en ligne définitive.
          </p>

          <h3 className="font-semibold">Propriété intellectuelle</h3>
          <p>
            L’ensemble des contenus présents sur ce site (textes, documents,
            éléments graphiques) est protégé par le droit applicable. Toute
            reproduction ou utilisation non autorisée est interdite sans accord
            préalable du CONIPAS.
          </p>

          <h3 className="font-semibold">Responsabilité</h3>
          <p>
            Le CONIPAS s’efforce de fournir des informations exactes et mises à
            jour. Toutefois, il ne saurait être tenu responsable d’erreurs ou
            d’omissions, ni de l’utilisation faite des informations diffusées sur
            ce site.
          </p>
        </div>
      </Section>
    </>
  );
}
