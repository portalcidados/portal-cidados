"use client";

import { useEffect, useState } from "react";

interface LoadingScreenProps {
  imageSources: string[];
  onLoadComplete: () => void;
}

export function LoadingScreen({ imageSources, onLoadComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [loadedCount, setLoadedCount] = useState(0);

  useEffect(() => {
    if (imageSources.length === 0) {
      onLoadComplete();
      return;
    }

    let loaded = 0;
    const totalImages = imageSources.length;

    const imagePromises = imageSources.map((src) => {
      return new Promise<void>((resolve) => {
        const img = new Image();

        img.onload = () => {
          loaded++;
          setLoadedCount(loaded);
          setProgress(Math.round((loaded / totalImages) * 100));
          resolve();
        };

        img.onerror = () => {
          // Even if image fails to load, we count it as loaded to prevent infinite loading
          loaded++;
          setLoadedCount(loaded);
          setProgress(Math.round((loaded / totalImages) * 100));
          resolve();
        };

        img.src = src;
      });
    });

    Promise.all(imagePromises).then(() => {
      // Small delay to show 100% before hiding
      setTimeout(() => {
        onLoadComplete();
      }, 300);
    });
  }, [imageSources, onLoadComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-6 px-6">
        <div className="w-full max-w-md">
          <div className="mb-4 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Carregando história...
            </h2>
          </div>

          {/* Progress bar */}
          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#E50505] transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Percentage */}
          <div className="mt-2 text-center">
            <span className="text-lg font-semibold text-gray-900">{progress}%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
