import { LucideIcon } from "lucide-react";

type IconCardProps = {
  title: string;
  icon: LucideIcon;
  children?: React.ReactNode;
};

export default function IconCard({
  title,
  icon: Icon,
  children,
}: IconCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition">
      <div className="flex items-start gap-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-700">
          <Icon className="h-5 w-5" />
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-2 text-gray-900">
            {title}
          </h3>

          {children && (
            <div className="text-gray-700 text-sm leading-relaxed">
              {children}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
