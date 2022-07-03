import * as React from "react";

const RightArrow = (props) => {
  const { size = 10 } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      style={{width: size}}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m13 7 5 5m0 0-5 5m5-5H6"
      />
    </svg>
  );
};

export default RightArrow;
