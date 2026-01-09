export default function Card({ title }: { title: string }) {
  return (
    <div className="border rounded-lg p-6 shadow-sm">
      <h3 className="font-semibold">{title}</h3>
      <p className="text-sm text-gray-600 mt-2">
        Description institutionnelle à enrichir.
      </p>
    </div>
  );
}
