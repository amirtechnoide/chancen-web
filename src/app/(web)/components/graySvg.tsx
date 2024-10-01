import React from "react";
//svg overlay black circle svg
const GraySvg = ({ className }: { className: string }) => {
  return (
    <div className={`${className}`}>
      <svg
        width="919"
        height="1064"
        viewBox="0 0 919 1064"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="664.335" cy="532.335" r="664.335" fill="#25313B" />
        <circle
          cx="630.42"
          cy="397.34"
          r="518.7"
          fill="white"
          fill-opacity="0.14"
        />
      </svg>
    </div>
  );
};

export default GraySvg;
