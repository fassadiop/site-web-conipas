import Image from "next/image";

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
    <section
      className="
        relative
        w-screen
        h-[70vh]
        min-h-[520px]
        max-h-[820px]
        overflow-hidden
      "
    >
      {/* Image plein HERO */}
      <Image
        src="/hero-conipas.webp"
        alt="Pêche artisanale au Sénégal – CONIPAS"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Contenu centré MAIS image full */}
      <div className="relative z-10 flex h-full items-center">
        <div className="container mx-auto max-w-5xl px-4 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {title}
          </h1>

          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-3xl">
            {subtitle}
          </p>

          <div className="flex gap-4">
            <a
              href="/conipas"
              className="rounded-md bg-blue-700 px-6 py-3 font-semibold hover:bg-blue-800 transition"
            >
              {ctaPrimary}
            </a>

            <a
              href="/actions"
              className="rounded-md border border-white px-6 py-3 font-semibold hover:bg-white hover:text-black transition"
            >
              {ctaSecondary}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
