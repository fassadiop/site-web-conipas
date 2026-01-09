import Section from "@/components/Section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "La pêche artisanale au Sénégal",
  description:
    "Présentation de la pêche artisanale au Sénégal, de son importance socio-économique, de ses enjeux, de la chaîne de valeur et du rôle des communautés.",
};

export default function PecheArtisanalePage() {
  return (
    <>
      <Section title="La pêche artisanale au Sénégal">
        <p className="max-w-4xl text-gray-700 leading-relaxed">
          La pêche artisanale constitue un pilier fondamental de l’économie
          sénégalaise. Elle contribue de manière significative à la sécurité
          alimentaire, à l’emploi et au développement des zones côtières et
          riveraines.
        </p>
      </Section>

      <Section title="Une chaîne de valeur essentielle">
        <p className="max-w-4xl text-gray-700 leading-relaxed">
          La pêche artisanale repose sur une chaîne de valeur intégrée comprenant
          la capture, le débarquement, la transformation, la commercialisation et
          la distribution des produits halieutiques. Cette chaîne mobilise de
          nombreux acteurs et génère des emplois directs et indirects.
        </p>
      </Section>

      <Section title="Enjeux et défis">
        <ul className="max-w-4xl list-disc list-inside space-y-2 text-gray-700">
          <li>Pression croissante sur les ressources halieutiques</li>
          <li>Concurrence avec la pêche industrielle</li>
          <li>Effets du changement climatique</li>
          <li>Conditions de travail et de sécurité</li>
          <li>Organisation et structuration des filières</li>
        </ul>
      </Section>

      <Section title="Le rôle des femmes">
        <p className="max-w-4xl text-gray-700 leading-relaxed">
          Les femmes occupent une place centrale dans la pêche artisanale,
          notamment dans la transformation et la commercialisation des produits
          halieutiques. Leur contribution est essentielle à la sécurité
          alimentaire, à la création de valeur et à la résilience des
          communautés.
        </p>
      </Section>

      <Section title="Cogestion et durabilité">
        <p className="max-w-4xl text-gray-700 leading-relaxed">
          La cogestion constitue un levier essentiel pour assurer la durabilité
          de la pêche artisanale. Elle repose sur l’implication conjointe de
          l’État, des acteurs professionnels et des structures locales afin de
          préserver les ressources halieutiques et garantir l’avenir du secteur.
        </p>
      </Section>
    </>
  );
}
