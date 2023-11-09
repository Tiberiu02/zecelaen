import { LCG, XORShift } from "random-seedable";
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

function SubLogo({
  className = "",
  seed,
}: {
  className?: string;
  seed: number;
}) {
  const random = new LCG(seed);

  for (let i = 0; i < 100; i++) random.float();

  const shapeDistance = 12;
  const shapeAngleRad = random.choice([-45, 45]) * (Math.PI / 180);

  const color = [
    "#F86F6F", // red
    "#FF9431", // orange
    "#FFC700", // yellow
    "#56D354", // green
    "#408CFF", // blue
    "#C67EFF", // purple
    // "#FD8CFF", // pink
  ];

  const ix = random.int() % color.length;
  const logoColors = [
    color[ix],
    color[(ix + 2) % color.length],
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
  // console.log(shape1.type, shape2.type);
  console.log(random.choice([1, 2, 3]));

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
      className={className}
    >
      <defs>
        <clipPath id={`clip-path-${seed}`}>
          <path d={path1} />
        </clipPath>
      </defs>

      <path d={path1} fill={logoColors[0]} />
      <path d={path2} fill={logoColors[1]} />
      <path
        d={path2}
        fill={logoColors[2]}
        clipPath={`url(#clip-path-${seed})`}
      />
    </svg>
  );
}

export default function Home() {
  const subs = [
    ["2024", [["Subiect model", "2024"]]],
    [
      "2023",
      [
        ["Evaluarea Națională", "21 iunie 2023"],
        ["Subiect de rezervă", "21 iunie 2023"],
        ["Simulare națională", "21 aprilie 2023"],
        ["Simulare Constanța", "28 februarie 2023"],
        ["Simulare Dolj", "28 februarie 2023"], // ? data
        ["Simulare Ilfov", "30 ianuarie 2023"],
        ["Simulare Brăila", "17 ianuarie 2023"],
        ["Simulare Iași", "17 ianuarie 2023"], // ? data
        ["Simulare Botoșani", "18 ianuarie 2023"],
        ["Simulare Huneadoara", "18 ianuarie 2023"],
        ["Subiect model", "2023"],
      ],
    ],
    [
      "2022",
      [
        ["Evaluarea Națională", "16 iunie 2022"],
        ["Subiect de rezervă", "16 iunie 2022"],
        ["Simulare națională", "5 aprilie 2022"],
        ["Subiect model", "2022"],
        ["Test de antrenament 1", "2022"],
        ["Test de antrenament 2", "2022"],
        ["Test de antrenament 3", "2022"],
        ["Test de antrenament 4", "2022"],
        ["Test de antrenament 5", "2022"],
        ["Test de antrenament 6", "2022"],
      ],
    ],
    [
      "2021",
      [
        ["Evaluarea Națională", "24 iunie 2021"],
        ["Subiect de rezervă", "24 iunie 2021"],
        ["Simulare națională", "3 martie 2021"],
        ["Sesiunea Specială", "6 iulie 2021"],
        ["Subiect model 1", "2021"],
        ["Subiect model 2", "2021"],
        ["Test de antrenament 1", "2021"],
        ["Test de antrenament 2", "2021"],
        ["Test de antrenament 3", "2021"],
        ["Test de antrenament 4", "2021"],
        ["Test de antrenament 5", "2021"],
        ["Test de antrenament 6", "2021"],
        ["Test de antrenament 7", "2021"],
        ["Test de antrenament 8", "2021"],
        ["Test de antrenament 9", "2021"],
        ["Test de antrenament 10", "2021"],
        ["Test de antrenament 11", "2021"],
        ["Test de antrenament 12", "2021"],
        ["Test de antrenament 13", "2021"],
        ["Test de antrenament 14", "2021"],
        ["Test de antrenament 15", "2021"],
      ],
    ],
  ] as const;
  return (
    <main className="bg-math min-h-screen flex flex-col items-center">
      <h1 className="w-full text-lg font-medium text-left text-black mb-0 py-4 flex flex-col items-center bg-white border-[1px] border-t-0 border-gray-200 shadow">
        <div className="w-[60rem] flex">
          <div className="font-bold text-2xl h-0">
            10<sup>N</sup>
          </div>
          <div className="w-full"></div>
          <div className="flex gap-12 font-medium">
            <div className="underline underline-offset-4 [text-decoration-thickness:2px]">
              Subiecte
            </div>
            <div>Top&nbsp;licee</div>
            <div>Contact</div>
          </div>
        </div>
      </h1>
      <h1 className="w-full text-lg font-medium text-left text-black mb-0 py-4 flex flex-col items-center bg-white border-[1px]  border-gray-200 shadow">
        <div className="w-[60rem]">Subiecte Evaluarea Națională Matematică</div>
      </h1>

      <div className="flex flex-col gap-4 items-center">
        {subs.map(([byear, subs]) => (
          <>
            <h1 className="text-xl mt-12 mb-4 font-bold text-left text-black/40 px-3 py-1 bg-white rounded-md border-[1px] border-gray-200 shadow">
              {byear}
            </h1>
            <div className="grid grid-cols-[auto_auto] gap-4">
              {subs.map(([name, year], i) => (
                <div
                  key={i}
                  className={twMerge(
                    "relative overflow-hidden w-[28rem] items-center bg-white rounded-xl border-[1px] border-gray-200 shadow flex flex-row p-8 py-4 gap-8",
                    i == subs.length - 1 &&
                      subs.length % 2 == 1 &&
                      "col-span-2 1mx-auto"
                  )}
                >
                  <SubLogo
                    seed={i + parseInt(byear) * 101}
                    className="w-8 h-8"
                  />
                  <div className="flex mr-auto flex-col justify-between">
                    <div className="text-xl font-medium text-center">
                      {name}
                    </div>
                    <div className="w-fit font-bold text-sm opacity-40">
                      {year}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        ))}
      </div>
      {/* <div className="absolute overflow-hidden bg-white max-w-md w-full items-center rounded-xl border-[1px] border-gray-200 shadow flex flex-row p-8 py-4 gap-8">
        <SubLogo />
        <div className="flex mr-auto flex-col justify-between">
        <div className="text-xl font-medium text-center">Subiect Oficial</div>
          <div className="w-fit font-bold text-xl">2023</div>
        </div>
      </div> */}
    </main>
  );
}
