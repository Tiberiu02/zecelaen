"use client";
import { useRive } from "@rive-app/react-canvas";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

export function RiveAnimation({
  rivSrc,
  stateMachine,
  fallbackImgSrc,
}: {
  rivSrc: string;
  stateMachine: string;
  fallbackImgSrc: string;
}) {
  const [loaded, setLoaded] = useState(false);
  const [state, setState] = useState<"image" | "animation" | "transition">(
    "image"
  );

  const { rive, RiveComponent } = useRive({
    src: rivSrc,
    autoplay: false,
    stateMachines: stateMachine,
    onLoad: (e) => {
      console.log("Rive loaded", rive);
      setLoaded(true);
    },
  });

  useEffect(() => {
    if (loaded && state === "image") {
      console.log("Transitioning to animation");
      setState("transition");
      setTimeout(() => {
        console.log("Playing animation", rive);
        setState("animation");
        rive?.play();
      }, 800);
    }
  }, [loaded, state, rive]);

  return (
    <div className="w-full h-full relative">
      <div
        className={twMerge(
          "w-full h-full",
          state != "animation" && "opacity-0"
        )}
      >
        <RiveComponent />
      </div>
      {(state === "image" || state === "transition") && (
        <img
          src={fallbackImgSrc}
          alt="Animation fallback"
          className={twMerge(
            "w-full inset-0 absolute duration-500 opacity-100 object-contain",
            state != "image" && "opacity-0"
          )}
        />
      )}
    </div>
  );
}
