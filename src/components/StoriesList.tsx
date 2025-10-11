"use client";

import { useEffect, useRef, useState } from "react";

const storiesData = [
  {
    title: "Polestar",
    subtitle: "Branding, Identity",
    images: [
      "https://images.unsplash.com/photo-1617788138017-80ad40651399?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1614165936126-9bb8c0ced71d?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1621361365424-06f0e1eb5c49?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1610768764270-790fbec18178?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1617886322207-897a493b4f8d?w=400&h=300&fit=crop",
    ],
  },
  {
    title: "Arrival",
    subtitle: "Campaign, Film",
    images: [
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=300&fit=crop",
    ],
  },
  {
    title: "Positive Energy",
    subtitle: "Branding, Identity",
    images: [
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=300&fit=crop",
    ],
  },
  {
    title: "First Round",
    subtitle: "Campaign, Digital",
    images: [
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1504593811423-6dd665756598?w=400&h=300&fit=crop",
    ],
  },
];

export function StoriesList() {
  const [activeIndex, setActiveIndex] = useState(0);
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = rowRefs.current.findIndex(
              (ref) => ref === entry.target,
            );
            if (index !== -1) {
              setActiveIndex(index);
            }
          }
        });
      },
      {
        threshold: 0.5,
        rootMargin: "-20% 0px -20% 0px",
      },
    );

    rowRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-8 py-16">
        {storiesData.map((story, index) => (
          <div
            key={index}
            ref={(el) => {
              rowRefs.current[index] = el;
            }}
            className="mb-32 last:mb-0"
          >
            <div className="flex items-start justify-between mb-8">
              <div>
                <h2 className="text-4xl font-light mb-2">{story.title}</h2>
                <p className="text-gray-500 text-sm">{story.subtitle}</p>
              </div>
            </div>

            <div className="grid grid-cols-5 gap-4">
              {story.images.map((image, imgIndex) => (
                <div
                  key={imgIndex}
                  className={`aspect-[4/3] overflow-hidden rounded-lg transition-all duration-700 ${
                    activeIndex === index
                      ? "opacity-100 scale-100"
                      : "opacity-20 scale-95 grayscale"
                  }`}
                  style={{
                    transitionDelay: `${imgIndex * 100}ms`,
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
        ))}
      </div>
    </div>
  );
}
