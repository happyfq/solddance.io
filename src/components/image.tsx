'use client';

import { type FC, useEffect, useRef, useState } from 'react';

const Image: FC<{
  src: string;
  altText?: string;
  width: number;
  height: number;
}> = ({ src, altText, width, height }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const lowResImageRef = useRef<HTMLImageElement | null>(null);
  const highResImageRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsLoading(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (lowResImageRef.current) {
      observer.observe(lowResImageRef.current);
    }

    return () => {
      if (lowResImageRef.current) {
        observer.unobserve(lowResImageRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isLoading) {
      if (highResImageRef.current && !highResImageRef.current.complete) {
        const handleLoad = () => {
          setIsLoaded(true);
        };

        highResImageRef.current.addEventListener('load', handleLoad);

        return () => {
          if (highResImageRef.current) {
            highResImageRef.current.removeEventListener('load', handleLoad);
          }
        };
      } else {
        setIsLoaded(true);
      }
    }
  }, [isLoading]);

  return (
    <div className="relative">
      <img
        ref={lowResImageRef}
        className={`${isLoaded ? 'hidden' : 'blur inset-0 animate-pulse'}`}
        src={`/low/${src}`}
        alt={altText ?? 'Placeholder Image'}
        width={width}
        height={height}
      />
      {isLoading && (
        <img
          ref={highResImageRef}
          src={`/high/${src}`}
          alt={altText ?? 'Image'}
          className={`${
            isLoaded ? 'opacity-100' : 'opacity-0'
          } transition-opacity duration-300 ease-in-out`}
          width={isLoaded ? width : 0}
          height={isLoaded ? height : 0}
        />
      )}
    </div>
  );
};

export default Image;
