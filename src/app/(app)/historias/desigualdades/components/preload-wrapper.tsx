"use client";

import { useState, useEffect, type ReactNode } from "react";

interface PreloadWrapperProps {
  children: ReactNode;
  imageSources: string[];
}

export function PreloadWrapper({ children, imageSources }: PreloadWrapperProps) {
  const [loadedCount, setLoadedCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const totalImages = imageSources.length;
  const progress = totalImages > 0 ? (loadedCount / totalImages) * 100 : 0;

  useEffect(() => {
    if (totalImages === 0) {
      setIsLoading(false);
      return;
    }

    let mounted = true;
    let completed = 0;

    const preloadImage = (src: string): Promise<void> => {
      return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => {
          if (mounted) {
            completed++;
            setLoadedCount(completed);
          }
          resolve();
        };
        img.onerror = () => {
          if (mounted) {
            completed++;
            setLoadedCount(completed);
          }
          resolve();
        };
        img.src = src;
      });
    };

    const loadAllImages = async () => {
      await Promise.all(imageSources.map(preloadImage));
      if (mounted) {
        // Small delay to ensure smooth transition
        setTimeout(() => {
          setIsLoading(false);
        }, 300);
      }
    };

    loadAllImages();

    return () => {
      mounted = false;
    };
  }, [imageSources, totalImages]);

  if (isLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
        <div className="text-center space-y-8 px-4 max-w-md w-full">
          <div className="space-y-4">
            <h2 className="text-gray-900 text-2xl font-bold">
              Carregando...
            </h2>
            <p className="text-gray-600 text-sm">
              Aguarde alguns instantes
            </p>
          </div>

          <div className="space-y-3">
            <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
              <div
                className="h-full bg-[#C00026] transition-all duration-300 ease-out rounded-full"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="text-center text-sm text-gray-600">
              <span>{Math.round(progress)}%</span>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2">
            <div className="w-2 h-2 bg-[#C00026] rounded-full animate-bounce [animation-delay:-0.3s]"></div>
            <div className="w-2 h-2 bg-[#C00026] rounded-full animate-bounce [animation-delay:-0.15s]"></div>
            <div className="w-2 h-2 bg-[#C00026] rounded-full animate-bounce"></div>
          </div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
