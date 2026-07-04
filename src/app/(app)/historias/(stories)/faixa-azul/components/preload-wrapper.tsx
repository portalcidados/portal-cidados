"use client";

import { useLayoutEffect, useState, type ReactNode } from "react";
import { StoryLogos } from "../../../components/story-logos";
import {
  brandColor,
  coverVideo,
  introAuthors,
  introTitle,
  logoTintClass,
} from "../constants";

const MAX_LOADING_MS = 15_000;

interface PreloadWrapperProps {
  children: ReactNode;
  imageSources: string[];
  videoSrc?: string;
}

const preloadImage = (src: string): Promise<void> =>
  new Promise((resolve) => {
    const img = new window.Image();
    img.onload = () => resolve();
    img.onerror = () => resolve();
    img.src = src;
  });

const preloadVideo = (src: string): Promise<void> =>
  new Promise((resolve) => {
    const video = document.createElement("video");
    video.oncanplaythrough = () => resolve();
    video.onerror = () => resolve();
    video.src = src;
    video.load();
  });

const waitForWindowLoad = (): Promise<void> =>
  new Promise((resolve) => {
    if (document.readyState === "complete") {
      resolve();
      return;
    }
    window.addEventListener("load", () => resolve(), { once: true });
  });

const timeout = (ms: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, ms));

export function PreloadWrapper({
  children,
  imageSources,
  videoSrc = coverVideo,
}: PreloadWrapperProps) {
  const [isReady, setIsReady] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useLayoutEffect(() => {
    document.body.style.overflow = "hidden";
    let mounted = true;

    const finishLoading = () => {
      if (!mounted) return;
      setFadeOut(true);
      setTimeout(() => {
        if (!mounted) return;
        document.body.style.overflow = "";
        setIsReady(true);
      }, 600);
    };

    Promise.race([
      Promise.all([
        ...imageSources.map(preloadImage),
        preloadVideo(videoSrc),
        waitForWindowLoad(),
      ]),
      timeout(MAX_LOADING_MS),
    ]).then(finishLoading);

    return () => {
      mounted = false;
      document.body.style.overflow = "";
    };
  }, [imageSources, videoSrc]);

  return (
    <div className={isReady ? undefined : "h-screen overflow-hidden"}>
      {children}

      {!isReady && (
        <div
          className={`fixed inset-0 z-999 transition-opacity duration-500 ${
            fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            src={videoSrc}
          />

          <div className="absolute inset-0 bg-[#FFFFFF]/70" />
          <div className="absolute inset-0 backdrop-blur-sm" />

          <div className="absolute top-16 left-0 right-0 z-20 flex flex-col items-center px-6 md:px-12 lg:px-24">
            <div className="mb-6">
              <StoryLogos hoverable={false} imageClassName={logoTintClass} />
            </div>
          </div>

          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6 md:px-8 lg:px-12 text-center max-w-4xl 2xl:max-w-6xl w-full mx-auto">
            <div className="blur-sm">
              <h1
                className="text-center font-inter text-2xl md:text-4xl 2xl:text-5xl pt-20 font-bold leading-tight mb-4"
                style={{ color: brandColor }}
              >
                {introTitle}
              </h1>

              <p
                className="text-center font-inter text-xl font-normal leading-tight mb-6"
                style={{ color: brandColor }}
              >
                {introAuthors}
              </p>
            </div>
          </div>

          <div className="absolute inset-0 z-30 flex items-center justify-center">
            <div className="flex items-center justify-center gap-2">
              <div
                className="w-2 h-2 rounded-full animate-bounce [animation-delay:-0.3s]"
                style={{ backgroundColor: brandColor }}
              />
              <div
                className="w-2 h-2 rounded-full animate-bounce [animation-delay:-0.15s]"
                style={{ backgroundColor: brandColor }}
              />
              <div
                className="w-2 h-2 rounded-full animate-bounce"
                style={{ backgroundColor: brandColor }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
