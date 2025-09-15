import { Link } from "wouter";

interface ToolCardProps {
  title: string;
  description: string;
  icon: string;
  bgColor: string;
  iconColor: string;
  href: string;
  'data-testid'?: string;
}

export default function ToolCard({ title, description, icon, bgColor, iconColor, href, ...props }: ToolCardProps) {
  return (
    <Link href={href}>
      <div 
        className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 cursor-pointer border border-slate-200 hover:border-slate-300"
        {...props}
      >
        <div className={`w-16 h-16 ${bgColor} rounded-2xl flex items-center justify-center mb-6 mx-auto`}>
          <i className={`${icon} ${iconColor} text-2xl`}></i>
        </div>
        <h4 className="text-xl font-semibold text-slate-900 mb-3 text-center">{title}</h4>
        <p className="text-slate-600 text-sm text-center leading-relaxed">{description}</p>
        <div className="mt-6 text-center">
          <span className="inline-flex items-center px-4 py-2 bg-slate-50 rounded-lg text-sm text-slate-700 font-medium">
            Usar Validador
            <i className="fas fa-arrow-right ml-2 text-xs"></i>
          </span>
        </div>
      </div>
    </Link>
  );
}
