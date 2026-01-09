type SectionProps = {
  title: string;
  children: React.ReactNode;
  muted?: boolean; // fond gris optionnel
};

export default function Section({
  title,
  children,
  muted = false,
}: SectionProps) {
  return (
    <section className={`${muted ? "bg-gray-50" : ""} py-16`}>
      <div className="container mx-auto max-w-5xl px-4">
        <h2 className="text-2xl font-semibold mb-6 text-gray-900">
          {title}
        </h2>
        <div className="text-gray-700 leading-relaxed space-y-4">
          {children}
        </div>
      </div>
    </section>
  );
}
