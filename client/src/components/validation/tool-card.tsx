interface ToolCardProps {
  title: string;
  description: string;
  icon: string;
  bgColor: string;
  iconColor: string;
  onClick: () => void;
  'data-testid'?: string;
}

export default function ToolCard({ title, description, icon, bgColor, iconColor, onClick, ...props }: ToolCardProps) {
  return (
    <div 
      className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 cursor-pointer"
      onClick={onClick}
      {...props}
    >
      <div className={`w-12 h-12 ${bgColor} rounded-lg flex items-center justify-center mb-4`}>
        <i className={`${icon} ${iconColor} text-xl`}></i>
      </div>
      <h4 className="text-lg font-semibold text-slate-900 mb-2">{title}</h4>
      <p className="text-slate-600 text-sm">{description}</p>
    </div>
  );
}
