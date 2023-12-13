import React from "react";

export function IconRoFlag({ className }: { className?: string }) {
  return (
    <svg
      width="90"
      height="66"
      viewBox="0 0 90 66"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M0 15C0 6.71573 6.71573 0 15 0H30V66H15C6.71573 66 0 59.2843 0 51V15Z"
        fill="#408CFF"
      />
      <path d="M30 0H60V66H30V0Z" fill="#FFD600" />
      <path
        d="M60 0H75C83.2843 0 90 6.71573 90 15V51C90 59.2843 83.2843 66 75 66H60V0Z"
        fill="#FF6363"
      />
    </svg>
  );
}
export function IconCheckMarkStack({ className }: { className?: string }) {
  return (
    <svg
      width="82"
      height="84"
      viewBox="0 0 82 84"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="27.5" cy="27.5" r="27.5" fill="#B7F4B5" />
      <circle cx="37.5" cy="38.5" r="31.5" fill="#5FE25C" />
      <circle cx="47.5" cy="49.5" r="34.5" fill="white" />
      <path
        d="M47.5 84C56.65 84 65.4252 80.3652 71.8952 73.8952C78.3652 67.4252 82 58.65 82 49.5C82 40.35 78.3652 31.5748 71.8952 25.1048C65.4252 18.6348 56.65 15 47.5 15C38.35 15 29.5748 18.6348 23.1048 25.1048C16.6348 31.5748 13 40.35 13 49.5C13 58.65 16.6348 67.4252 23.1048 73.8952C29.5748 80.3652 38.35 84 47.5 84ZM62.7285 43.166L45.4785 60.416C44.2117 61.6828 42.1633 61.6828 40.91 60.416L32.285 51.791C31.0182 50.5242 31.0182 48.4758 32.285 47.2225C33.5518 45.9691 35.6002 45.9557 36.8535 47.2225L43.1875 53.5564L58.1465 38.584C59.4133 37.3172 61.4617 37.3172 62.715 38.584C63.9684 39.8508 63.9818 41.8992 62.715 43.1525L62.7285 43.166Z"
        fill="#19CE15"
      />
    </svg>
  );
}
