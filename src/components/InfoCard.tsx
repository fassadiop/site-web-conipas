type InfoCardProps = {
  title: string;
  children?: React.ReactNode;
};

export default function InfoCard({ title, children }: InfoCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition">
      <h3 className="font-semibold text-lg mb-3 text-gray-900">
        {title}
      </h3>

      {children && (
        <div className="text-gray-700 text-sm leading-relaxed">
          {children}
        </div>
      )}
    </div>
  );
}
