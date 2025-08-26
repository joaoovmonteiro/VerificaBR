import { useEffect } from 'react';

interface AdSenseBannerProps {
  type: 'horizontal' | 'square';
  slot: string;
}

declare global {
  interface Window {
    adsbygoogle: any[];
  }
}

export default function AdSenseBanner({ type, slot }: AdSenseBannerProps) {
  const containerClass = type === 'horizontal' 
    ? "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
    : "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8";

  useEffect(() => {
    try {
      if (typeof window !== 'undefined' && window.adsbygoogle) {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (err) {
      console.error('AdSense error:', err);
    }
  }, []);

  return (
    <div className={containerClass}>
      <ins className="adsbygoogle"
           style={{ 
             display: 'block',
             width: '100%',
             height: type === 'horizontal' ? '90px' : '280px'
           }}
           data-ad-client="ca-pub-5829621709837839"
           data-ad-slot={slot}
           data-ad-format="auto"
           data-full-width-responsive="true">
      </ins>
    </div>
  );
}