import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import InfoCard from "@/components/InfoCard";

export default function ConipasPage() {
  return (
    <>
      <PageHero
        title="Le CONIPAS"
        subtitle="L’interprofession nationale de la pêche artisanale au Sénégal"
      />

      <Section title="Présentation">
        <p>
          Le Conseil Interprofessionnel de la Pêche Artisanale au Sénégal (CONIPAS)
          est l’organe national de concertation et de représentation des acteurs
          de la pêche artisanale.
        </p>
      </Section>

      <Section title="Vision et missions">
        <div className="grid md:grid-cols-2 gap-6">
          <InfoCard title="Notre vision">
            Une pêche artisanale durable, organisée et pleinement intégrée
            dans les politiques publiques nationales.
          </InfoCard>

          <InfoCard title="Nos missions">
            <ul className="list-disc list-inside space-y-1">
              <li>Représentation nationale</li>
              <li>Concertation interprofessionnelle</li>
              <li>Contribution à la gouvernance</li>
              <li>Sécurité alimentaire</li>
            </ul>
          </InfoCard>
        </div>
      </Section>

      <Section title="Valeurs">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <InfoCard title="Durabilité" />
          <InfoCard title="Équité" />
          <InfoCard title="Transparence" />
          <InfoCard title="Dialogue" />
          <InfoCard title="Responsabilité collective" />
        </div>
      </Section>
    </>
  );
}
