"use client";

import dynamic from "next/dynamic";

const Player = dynamic(() => import("@lottiefiles/react-lottie-player").then((mod) => mod.Player), { ssr: false });

export const HeroAnimation = () => {
  return (
    <div className="w-full relative flex items-center justify-center overflow-hidden">
      <Player
        src="/animations/hero-animation.json"
        background="transparent"
        speed={0.7}
        controls={false}
        loop
        autoplay
        className="h-64"
      />
    </div>
  );
};
