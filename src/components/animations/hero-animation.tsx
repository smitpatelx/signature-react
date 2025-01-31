"use client";

import { lazy } from "react";

const Player = lazy(() =>
    import('@lottiefiles/react-lottie-player').then((module) => ({ default: module.Player })));

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
    )
}