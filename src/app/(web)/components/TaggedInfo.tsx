// import { ArrowUp } from 'lucide-react'
import React from "react";
import ArrowUp from "./ArrowUp";

const TaggedInfo = ({
  label,
  number,
  className,
}: {
  label: string;
  number: string;
  className: string;
}) => {
  return (
    <div className={`pr-12 pl-2 py-3 ${className}`}>
      {/* svg above image */}

      <div className="absolute w-[60px] h-[60px] top-0 right-0">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 82 81"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.916016 29.6989C0.916016 1.41916 23.8413 -21.5061 52.121 -21.5061L154.531 -21.5061C182.811 -21.5061 205.736 1.41916 205.736 29.6989C205.736 57.9786 182.811 80.9039 154.531 80.9039L52.121 80.9039C23.8413 80.9039 0.916016 57.9786 0.916016 29.6989Z"
            fill="white"
            fillOpacity="0.3"
          />
        </svg>
      </div>

      {/* svg below image */}
      <div className="absolute w-[70px] h-[70px] bottom-[4%]  right-5">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 122 69"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M34.1628 -95.0561L3.71264 2.72224C-4.52777 29.183 10.2427 57.3138 36.7034 65.5542C63.1641 73.7946 91.295 59.0241 99.5354 32.5634L129.986 -65.2149C138.226 -91.6756 123.455 -119.806 96.9948 -128.047C70.5341 -136.287 42.4032 -121.517 34.1628 -95.0561ZM2.73486 2.41774C-5.67373 29.4185 9.39818 58.1234 36.3989 66.532C63.3996 74.9406 92.1046 59.8686 100.513 32.8679L130.963 -64.9104C139.372 -91.9111 124.3 -120.616 97.2993 -129.025C70.2985 -137.433 41.5936 -122.361 33.185 -95.3606L2.73486 2.41774Z"
            fill="white"
            fillOpacity="0.3"
          />
        </svg>
      </div>
      <span className="text-white text-left font-bold">{label}</span>
      <p className="flex gap-4">
        <span className="text-white">{number}</span>
        <ArrowUp />
      </p>
    </div>
  );
};

export default TaggedInfo;
