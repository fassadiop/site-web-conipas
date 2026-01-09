type HeroProps = {
  title: string;
  subtitle: string;
  ctaPrimary: string;
  ctaSecondary: string;
};

export default function Hero({
  title,
  subtitle,
  ctaPrimary,
  ctaSecondary,
}: HeroProps) {
  return (
    <section className="bg-blue-900 text-white py-24">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
        <p className="mb-8">{subtitle}</p>
        <div className="flex justify-center gap-4">
          <button className="bg-white text-blue-900 px-6 py-2 rounded">
            {ctaPrimary}
          </button>
          <button className="border px-6 py-2 rounded">
            {ctaSecondary}
          </button>
        </div>
      </div>
    </section>
  );
}
