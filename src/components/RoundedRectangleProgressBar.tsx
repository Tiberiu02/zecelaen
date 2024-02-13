import React from "react";

export function RoundedRectangleProgressBar({
  width,
  height,
  thickness,
  borderRadius,
  progressGreen,
  progressRed,
}: {
  width: number;
  height: number;
  thickness: number;
  borderRadius: number;
  progressGreen: number;
  progressRed: number;
}) {
  const progressLengthGreen =
    2 *
    (width + height - 4 * borderRadius + Math.PI * borderRadius) *
    (progressGreen / 100);
  const progressLengthRed =
    2 *
    (width + height - 4 * borderRadius + Math.PI * borderRadius) *
    (progressRed / 100);

  // Path for the entire rounded rectangle
  const fullPath = `M ${borderRadius},0
                    H ${width - borderRadius}
                    A ${borderRadius},${borderRadius} 0 0 1 ${width},${borderRadius}
                    V ${height - borderRadius}
                    A ${borderRadius},${borderRadius} 0 0 1 ${
    width - borderRadius
  },${height}
                    H ${borderRadius}
                    A ${borderRadius},${borderRadius} 0 0 1 0,${
    height - borderRadius
  }
                    V ${borderRadius}
                    A ${borderRadius},${borderRadius} 0 0 1 ${borderRadius},0
                    Z`;

  return (
    <svg
      width={width}
      height={height}
      viewBox={`${-thickness / 2} ${-thickness / 2} ${width + thickness} ${
        height + thickness
      }`}
    >
      <path d={fullPath} stroke="#eee" strokeWidth={thickness} fill="none" />
      {progressGreen && (
        <path
          d={fullPath}
          stroke="#5dd35b"
          strokeWidth={thickness}
          fill="none"
          strokeDasharray={`0,${progressLengthRed},${progressLengthGreen},${
            2 * (width + height)
          }`}
          strokeLinecap="round"
        />
      )}
      {progressRed && (
        <path
          d={fullPath}
          stroke="#FF6767"
          strokeWidth={thickness}
          fill="none"
          strokeDasharray={`${progressLengthRed},${2 * (width + height)}`}
          strokeLinecap="round"
        />
      )}
    </svg>
  );
}
