import Section from "./Section";

type PageProps = {
  title: string;
  description: string;
};

export default function PageTemplate({ title, description }: PageProps) {
  return (
    <Section title={title}>
      <div className="max-w-4xl space-y-6 text-justify">
        <p className="text-gray-700 leading-relaxed">
          {description}
        </p>

        <p className="text-gray-700 leading-relaxed">
          Cette page sera enrichie progressivement avec des contenus
          institutionnels détaillés, des documents de référence et des données
          officielles relatives au rôle du CONIPAS dans la gouvernance de la
          pêche artisanale au Sénégal.
        </p>
      </div>
    </Section>
  );
}
