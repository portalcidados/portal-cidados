"use client";

import { getStoriesForHome, type Story } from "@/lib/data/stories";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export function StoriesSection() {
  const [currentImageIndexes, setCurrentImageIndexes] = useState<{
    [key: string]: number;
  }>({});
  const [hoveredStoryId, setHoveredStoryId] = useState<string | null>(null);
  const stories = getStoriesForHome();

  // Effect para gerenciar a animação de imagens no hover
  useEffect(() => {
    if (!hoveredStoryId) return;

    const story = stories.find((s) => s.id === hoveredStoryId);
    if (!story || story.images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImageIndexes((prev) => {
        const currentIndex = prev[hoveredStoryId] || 0;
        const nextIndex = (currentIndex + 1) % story.images.length;
        return { ...prev, [hoveredStoryId]: nextIndex };
      });
    }, 500); // Troca a imagem a cada 500ms

    return () => clearInterval(interval);
  }, [hoveredStoryId, stories]);

  const handleStoryMouseEnter = (storyId: string) => {
    setHoveredStoryId(storyId);
    // Inicializa o índice da imagem se ainda não existir
    setCurrentImageIndexes((prev) => ({
      ...prev,
      [storyId]: prev[storyId] || 0,
    }));
  };

  const handleStoryMouseLeave = (storyId: string) => {
    setHoveredStoryId(null);
    // Reseta o índice da imagem para 0 quando o mouse sair
    setCurrentImageIndexes((prev) => ({
      ...prev,
      [storyId]: 0,
    }));
  };

  const getCurrentImage = (story: Story) => {
    const index = currentImageIndexes[story.id] || 0;
    return story.images[index] || story.image;
  };

  return (
    <section className="py-8 pb-16 mx-auto bg-background">
      <div className="mx-auto px-4 md:px-8 lg:px-12">
        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
          {stories.map((story) => (
            <div key={story.id} className="group">
              {story.href ? (
                <Link
                  href={story.href}
                  className="block"
                  onMouseEnter={() => handleStoryMouseEnter(story.id)}
                  onMouseLeave={() => handleStoryMouseLeave(story.id)}
                >
                  {/* Story Card */}
                  <div className="relative overflow-hidden aspect-square w-full">
                    <Image
                      src={getCurrentImage(story)}
                      alt={story.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      draggable={false}
                    />
                  </div>
                </Link>
              ) : (
                /* Story Card without link */
                <div
                  className="relative overflow-hidden aspect-square w-full"
                  onMouseEnter={() => handleStoryMouseEnter(story.id)}
                  onMouseLeave={() => handleStoryMouseLeave(story.id)}
                  role="img"
                  aria-label={story.title}
                >
                  <Image
                    src={getCurrentImage(story)}
                    alt={story.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    draggable={false}
                  />
                </div>
              )}

              {/* Story Info */}
              <div className="mt-4 text-left">
                <h3 className="text-md font-medium text-foreground mb-2 font-gt-ultra-fine leading-tight">
                  {story.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-gt-ultra-fine">
                  {story.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
