interface AdPlaceholderProps {
  type: 'horizontal' | 'square';
  description: string;
  dimensions: string;
}

export default function AdPlaceholder({ type, description, dimensions }: AdPlaceholderProps) {
  const containerClass = type === 'horizontal' 
    ? "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
    : "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8";
    
  const placeholderClass = type === 'horizontal'
    ? "bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-8 text-center"
    : "bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center";

  return (
    <div className={containerClass}>
      <div className={placeholderClass}>
        <p className="text-gray-500 text-sm">{description}</p>
        <p className="text-gray-400 text-xs mt-1">{dimensions}</p>
      </div>
    </div>
  );
}
