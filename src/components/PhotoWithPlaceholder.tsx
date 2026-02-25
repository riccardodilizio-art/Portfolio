import { useState, type ReactNode } from 'react';

interface PhotoWithPlaceholderProps {
  src: string;
  alt: string;
  className?: string;
  placeholderContent: ReactNode;
}

export function PhotoWithPlaceholder({
  src,
  alt,
  className = '',
  placeholderContent,
}: PhotoWithPlaceholderProps) {
  const [status, setStatus] = useState<'loading' | 'loaded' | 'error'>('loading');

  return (
    <>
      {/* Actual image - hidden until loaded */}
      <img
        src={src}
        alt={alt}
        className={`${className} ${status === 'loaded' ? '' : 'opacity-0 absolute'}`}
        onLoad={() => setStatus('loaded')}
        onError={() => setStatus('error')}
      />

      {/* Placeholder - visible while loading or on error */}
      {status !== 'loaded' && (
        <div className="absolute inset-0 photo-placeholder">
          {placeholderContent}
        </div>
      )}
    </>
  );
}
