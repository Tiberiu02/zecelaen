"use client";
import Rive from "@rive-app/react-canvas";

export function Animation(props: React.ComponentProps<typeof Rive>) {
  return <Rive {...props} />;
}
