import Image from "next/image";
import heroImage from "@/assets/hero-conipas.png";

export default function Hero({
  title,
  subtitle,
  ctaPrimary,
  ctaSecondary,
  centered = false,
}: {
  title?: string;
  subtitle?: string;
  ctaPrimary?: string;
  ctaSecondary?: string;
  centered?: boolean;
}) {
  return (
    <section className="relative w-screen h-[70vh] min-h-[520px] overflow-hidden">
      <Image
        src={heroImage}
        alt="Pêche artisanale au Sénégal – CONIPAS"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 flex h-full items-center">
        <div
          className={`container mx-auto max-w-5xl px-4 text-white ${
            centered ? "text-center" : ""
          }`}
        >
          {subtitle && (
            <p className="text-xl md:text-2xl mb-8">
              {subtitle}
            </p>
          )}

          <div className="flex gap-4 justify-center">
            {ctaPrimary && (
              <a className="bg-blue-700 px-6 py-3 rounded-md">
                {ctaPrimary}
              </a>
            )}
            {ctaSecondary && (
              <a className="border px-6 py-3 rounded-md">
                {ctaSecondary}
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
