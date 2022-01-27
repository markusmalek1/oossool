import React from "react";

export default function PlayIcon(props) {
  const height = props.height ? props.height : "24";
  const width = props.width ? props.width : "24";
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 80 80"
      fill="#FFFFFF"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="1">
        <path d="M26.6667 22.7333V57.2667C26.6667 59.9 29.5667 61.5 31.8001 60.0667L58.9334 42.8C61.0001 41.5 61.0001 38.5 58.9334 37.1667L31.8001 19.9333C29.5667 18.5 26.6667 20.1 26.6667 22.7333Z" />
      </g>
    </svg>
  );
}
