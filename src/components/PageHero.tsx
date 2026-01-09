type PageHeroProps = {
  title: string;
  subtitle?: string;
};

export default function PageHero({ title, subtitle }: PageHeroProps) {
  return (
    <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
      <div className="container mx-auto max-w-5xl px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg text-blue-100">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
