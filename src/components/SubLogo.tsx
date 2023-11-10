import { LCG, PCG } from "random-seedable";
import { CSSProperties } from "react";
import { twMerge } from "tailwind-merge";

function createTrianglePath(
  centerX: number,
  centerY: number,
  radius: number,
  rotationAngle: number
) {
  // Convert rotation angle from degrees to radians
  const rotationInRadians = (rotationAngle * Math.PI) / 180;

  const cornerRadius = radius / 5;

  // Adjust radius to account for the rounded corners
  radius = radius + cornerRadius * 0.9;

  // Function to calculate the corner points of the triangle
  const getTriangleCorners = (
    R: number,
    theta: number,
    cx: number,
    cy: number
  ) => {
    let corners = [];
    for (let i = 0; i < 3; i++) {
      let angle = theta + (i * 2 * Math.PI) / 3;
      corners.push({
        x: cx + R * Math.cos(angle),
        y: cy + R * Math.sin(angle),
      });
    }
    return corners;
  };

  // Calculate the triangle's corner points
  const corners = getTriangleCorners(
    radius,
    rotationInRadians,
    centerX,
    centerY
  );

  // Calculate the control points for the rounded corners
  const controlPoints = corners.map((corner, index) => {
    const nextCorner = corners[(index + 1) % 3];
    const prevCorner = corners[(index + 2) % 3];

    const nextAngle = Math.atan2(
      nextCorner.y - corner.y,
      nextCorner.x - corner.x
    );
    const prevAngle = Math.atan2(
      prevCorner.y - corner.y,
      prevCorner.x - corner.x
    );

    return {
      start: {
        x: corner.x + cornerRadius * Math.sqrt(3) * Math.cos(prevAngle),
        y: corner.y + cornerRadius * Math.sqrt(3) * Math.sin(prevAngle),
      },
      end: {
        x: corner.x + cornerRadius * Math.sqrt(3) * Math.cos(nextAngle),
        y: corner.y + cornerRadius * Math.sqrt(3) * Math.sin(nextAngle),
      },
    };
  });

  // Construct the SVG path
  let path = `M ${controlPoints[0].end.x},${controlPoints[0].end.y} `;
  controlPoints.forEach((point, i) => {
    const nextPoint = controlPoints[(i + 1) % 3].start;
    path += `L ${nextPoint.x},${nextPoint.y} `;
    path += `A ${cornerRadius},${cornerRadius} 0 0 1 ${
      controlPoints[(i + 1) % 3].end.x
    },${controlPoints[(i + 1) % 3].end.y} `;
  });

  return path;
}
function createSquarePath(
  centerX: number,
  centerY: number,
  radius: number,
  rotationAngle: number
) {
  // Convert rotation angle from degrees to radians
  const rotationInRadians = (rotationAngle * Math.PI) / 180;

  const cornerRadius = radius / 5;

  // Function to calculate the corner points of the square
  const getSquareCorners = (
    R: number,
    theta: number,
    cx: number,
    cy: number
  ) => {
    let corners = [];
    for (let i = 0; i < 4; i++) {
      let angle = theta + (i * Math.PI) / 2;
      corners.push({
        x: cx + R * Math.cos(angle),
        y: cy + R * Math.sin(angle),
      });
    }
    return corners;
  };

  // Calculate the square's corner points
  const corners = getSquareCorners(radius, rotationInRadians, centerX, centerY);

  // Calculate the control points for the rounded corners
  const controlPoints = corners.map((corner, index) => {
    const nextCorner = corners[(index + 1) % 4];
    const prevCorner = corners[(index + 3) % 4];

    const nextAngle = Math.atan2(
      nextCorner.y - corner.y,
      nextCorner.x - corner.x
    );
    const prevAngle = Math.atan2(
      prevCorner.y - corner.y,
      prevCorner.x - corner.x
    );

    return {
      start: {
        x: corner.x + cornerRadius * Math.cos(prevAngle),
        y: corner.y + cornerRadius * Math.sin(prevAngle),
      },
      end: {
        x: corner.x + cornerRadius * Math.cos(nextAngle),
        y: corner.y + cornerRadius * Math.sin(nextAngle),
      },
    };
  });

  // Construct the SVG path
  let path = `M ${controlPoints[0].end.x},${controlPoints[0].end.y} `;
  controlPoints.forEach((point, i) => {
    const nextPoint = controlPoints[(i + 1) % 4].start;
    path += `L ${nextPoint.x},${nextPoint.y} `;
    path += `A ${cornerRadius},${cornerRadius} 0 0 1 ${
      controlPoints[(i + 1) % 4].end.x
    },${controlPoints[(i + 1) % 4].end.y} `;
  });

  return path;
}
function createEllipsePath(
  cx: number,
  cy: number,
  radius: number,
  angle: number
) {
  // Convert angle to radians
  const rad = (angle * Math.PI) / 180;

  const rx = radius;
  const ry = radius * 0.6;

  // Rotation matrix
  const cos = Math.cos(rad);
  const sin = Math.sin(rad);

  // Rotate each point
  const rotate = (x: number, y: number) => {
    return {
      x: cx + (x - cx) * cos - (y - cy) * sin,
      y: cy + (x - cx) * sin + (y - cy) * cos,
    };
  };

  // Calculate the start, end, and control points for each arc
  const start1 = rotate(cx - rx, cy);
  const end1 = rotate(cx + rx, cy);
  const start2 = rotate(cx + rx, cy);
  const end2 = rotate(cx - rx, cy);

  // Construct the SVG path
  // Using two arc commands to draw the ellipse
  let path = `M ${start1.x},${start1.y} `;
  path += `A ${rx},${ry} ${angle} 0 1 ${end1.x},${end1.y} `;
  path += `A ${rx},${ry} ${angle} 0 1 ${end2.x},${end2.y}`;

  return path;
}

function blendMax(color1: string, color2: string) {
  const c1 = color1.replace("#", "");
  const c2 = color2.replace("#", "");

  const r1 = parseInt(c1.substring(0, 2), 16);
  const g1 = parseInt(c1.substring(2, 4), 16);
  const b1 = parseInt(c1.substring(4, 6), 16);

  const r2 = parseInt(c2.substring(0, 2), 16);
  const g2 = parseInt(c2.substring(2, 4), 16);
  const b2 = parseInt(c2.substring(4, 6), 16);

  const r = Math.max(r1, r2);
  const g = Math.max(g1, g2);
  const b = Math.max(b1, b2);

  const rHex = r.toString(16).padStart(2, "0");
  const gHex = g.toString(16).padStart(2, "0");
  const bHex = b.toString(16).padStart(2, "0");

  return `#${rHex}${gHex}${bHex}`;
}

export function SubLogo({
  className = "",
  seed,
}: {
  className?: string;
  seed: number;
}) {
  const random = new PCG(seed);

  for (let i = 0; i < 100; i++) random.float();

  const shapeDistance = 12;
  const shapeAngleRad = random.choice([-45, 45]) * (Math.PI / 180);

  const color = [
    "#F86F6F", // red
    // "#FF9431", // orange
    // "#FFC700", // yellow
    "#56D354", // green
    // "#00C2FF", // cyan
    "#408CFF", // blue
    // "#C67EFF", // purple
    // "#FD8CFF", // pink
  ];

  const ix = random.int() % color.length;
  const logoColors = [
    color[ix],
    color[(ix + 1 + (random.int() % (color.length - 1))) % color.length],
    color[(ix + 1) % color.length],
  ];

  const shape1 = {
    cx: shapeDistance * Math.cos(shapeAngleRad),
    cy: shapeDistance * Math.sin(shapeAngleRad),
    rotation: random.float() * 360,
    radius: 40,
    type: random.choice(["ellipse", "square", "triangle"]),
  };
  const shape2 = {
    cx: -shapeDistance * Math.cos(shapeAngleRad),
    cy: -shapeDistance * Math.sin(shapeAngleRad),
    rotation: random.float() * 360,
    radius: 40,
    type: random.choice(["ellipse", "square", "triangle"]),
  };

  const top = Math.min(shape1.cy - shape1.radius, shape2.cy - shape2.radius);
  const bottom = Math.max(shape1.cy + shape1.radius, shape2.cy + shape2.radius);
  const left = Math.min(shape1.cx - shape1.radius, shape2.cx - shape2.radius);
  const right = Math.max(shape1.cx + shape1.radius, shape2.cx + shape2.radius);

  const cx = (left + right) / 2;
  const cy = (top + bottom) / 2;

  const size = Math.max(right - left, bottom - top);

  const path1 = (
    shape1.type === "triangle"
      ? createTrianglePath
      : shape1.type === "square"
      ? createSquarePath
      : createEllipsePath
  )(shape1.cx, shape1.cy, shape1.radius, shape1.rotation);
  const path2 = (
    shape2.type === "triangle"
      ? createTrianglePath
      : shape2.type === "square"
      ? createSquarePath
      : createEllipsePath
  )(shape2.cx, shape2.cy, shape2.radius, shape2.rotation);

  return (
    <svg
      width={size}
      height={size}
      viewBox={`${cx - size / 2} ${cy - size / 2} ${size} ${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={twMerge(className, "group-hover:rotate-45 duration-150")}
    >
      <defs>
        <clipPath id={`clip-path-${seed}`}>
          <path
            d={path1}
            className={`duration-150 group-hover:[transform:var(--clip-path-transform)]`}
            style={
              {
                "--clip-path-transform": `translate(${shape2.cx}px,${
                  shape2.cy
                }px) rotate(60deg) translate(${-shape2.cx}px,${-shape2.cy}px) translate(${
                  shape1.cx
                }px,${
                  shape1.cy
                }px) rotate(-60deg) translate(${-shape1.cx}px,${-shape1.cy}px)`,
              } as CSSProperties
            }
          />
        </clipPath>
      </defs>

      <path
        d={path2}
        fill={logoColors[1]}
        className="group-hover:-rotate-[60deg] duration-150"
        style={{
          transformOrigin: `${shape2.cx}px ${shape2.cy}px`,
        }}
      />
      <path
        d={path1}
        fill={logoColors[0]}
        className=" group-hover:-rotate-[60deg] duration-150"
        style={{
          transformOrigin: `${shape1.cx}px ${shape1.cy}px`,
        }}
      />
      <path
        d={path2}
        fill={logoColors[1]}
        className="mix-blend-lighten group-hover:-rotate-[60deg] duration-150"
        style={{
          transformOrigin: `${shape2.cx}px ${shape2.cy}px`,
        }}
      />
    </svg>
  );
}
