import React, { useEffect, useState } from "react";

export default function CircleProgress({ progress, radius }) {
  const [offset, setOffset] = useState(0);
  const circumference = 2 * Math.PI * radius;
  useEffect(() => {
    const progressOffset = (circumference * (100 - progress)) / 100;
    // console.log(progressOffset)
    setOffset(progressOffset);
  }, [progress, radius]);
  const diameter = 5 * 2;

  return (
    <>
      <svg className="w-12 h-12 mx-2">
        <circle
          className="text-gray-300"
          strokeWidth="5"
          stroke="currentcolor"
          fill="transparent"
          r={radius}
          cx={radius + 5}
          cy={radius + 5}
        />
        <circle
          className="text-red-500"
          strokeWidth="5"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          stroke="currentcolor"
          fill="transparent"
          r={radius}
          cx={radius + 5}
          cy={radius + 5}
          transform={`rotate(-90 ${radius + 5} ${radius + 5})`}
        />
      </svg>
    </>
  );
}
