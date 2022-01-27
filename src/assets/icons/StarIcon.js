import React from "react";

export default function StarIcon(props) {
  const height = props.height ? props.height : "24";
  const width = props.width ? props.width : "24";
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="#FFFFFF"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 17.27L16.15 19.78C16.91 20.24 17.8399 19.56 17.6399 18.7L16.54 13.98L20.2099 10.8C20.8799 10.22 20.5199 9.12 19.6399 9.04999L14.81 8.64L12.92 4.17999C12.58 3.36999 11.42 3.36999 11.08 4.17999L9.18995 8.62999L4.35995 9.03999C3.47995 9.10999 3.11995 10.21 3.78995 10.79L7.45995 13.97L6.35995 18.69C6.15995 19.55 7.08995 20.23 7.84995 19.77L12 17.27Z" />
    </svg>
  );
}
