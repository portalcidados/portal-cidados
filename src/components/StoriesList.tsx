"use client";

import { useEffect, useRef, useState } from "react";

const storiesData = [
  {
    id: 1,
    title: "Polestar",
    subtitle: "Branding, Identity",
    images: [
      "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=400",
      "https://images.unsplash.com/photo-1606016159991-7edf7d72cfe8?w=400",
      "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=400",
      "https://images.unsplash.com/photo-1606016159991-7edf7d72cfe8?w=400",
      "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=400",
    ],
  },
  {
    id: 2,
    title: "Arrival",
    subtitle: "Campaign, Film",
    images: [
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400",
    ],
  },
  {
    id: 3,
    title: "Positive Energy",
    subtitle: "Branding, Identity",
    images: [
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400",
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400",
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400",
    ],
  },
  {
    id: 4,
    title: "First Round",
    subtitle: "Campaign, Video",
    images: [
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
      "https://images.unsplash.com/photo-1504593811423-6dd665756598?w=400",
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400",
    ],
  },
];

export function StoriesList() {
  const [activeRows, setActiveRows] = useState(new Set([0]));
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);
  const intersectingRowsRef = useRef(new Map<number, number>());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Atualiza o mapa de rows que estão intersectando
        entries.forEach((entry) => {
          const index = rowRefs.current.findIndex(
            (ref) => ref === entry.target,
          );
          if (index !== -1) {
            if (entry.isIntersecting) {
              intersectingRowsRef.current.set(index, entry.intersectionRatio);
            } else {
              intersectingRowsRef.current.delete(index);
            }
          }
        });

        // Encontra a row com maior intersection ratio (mais visível)
        let maxRatio = 0;
        let mostVisibleIndex = 0;

        intersectingRowsRef.current.forEach((ratio, index) => {
          if (ratio > maxRatio) {
            maxRatio = ratio;
            mostVisibleIndex = index;
          }
        });

        // Ativa apenas a row mais visível
        if (intersectingRowsRef.current.size > 0) {
          setActiveRows(new Set([mostVisibleIndex]));
        }
      },
      {
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
        rootMargin: "-10% 0px -10% 0px",
      },
    );

    // Observa todas as rows com um único observer
    rowRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-white py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto space-y-24">
        {storiesData.map((story, rowIndex) => (
          <div
            key={story.id}
            ref={(el) => {
              rowRefs.current[rowIndex] = el;
            }}
            className="border-t border-gray-200 pt-8"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
              <div className="md:w-1/4">
                <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-2">
                  {story.title}
                </h2>
                <p className="text-sm text-gray-500">{story.subtitle}</p>
              </div>

              <div className="md:w-3/4 flex gap-4 overflow-x-auto pb-4">
                {story.images.map((image, imgIndex) => (
                  <div
                    key={imgIndex}
                    className={`flex-shrink-0 w-48 h-48 md:w-64 md:h-64 rounded-lg overflow-hidden transition-all duration-700 ${
                      activeRows.has(rowIndex)
                        ? "opacity-100 scale-100 grayscale-0"
                        : "opacity-40 scale-95 grayscale"
                    }`}
                    style={{
                      transitionDelay: activeRows.has(rowIndex)
                        ? `${imgIndex * 100}ms`
                        : "0ms",
                    }}
                  >
                    <img
                      src={image}
                      alt={`${story.title} ${imgIndex + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
