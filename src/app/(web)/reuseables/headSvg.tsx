import React from "react";
//big round black svg at header
const HeadSvg = ({className}:{className:string}) => {
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
      </svg>
    </div>
  );
};

export default HeadSvg;
