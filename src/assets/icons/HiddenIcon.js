import React from "react";

export default function HiddenIcon(props) {
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
      <path d="M9.29006 8.11999L13.1701 12L9.29006 15.88C8.90006 16.27 8.90006 16.9 9.29006 17.29C9.68006 17.68 10.3101 17.68 10.7001 17.29L15.2901 12.7C15.6801 12.31 15.6801 11.68 15.2901 11.29L10.7001 6.69999C10.3101 6.30999 9.68006 6.30999 9.29006 6.69999C8.91006 7.08999 8.90006 7.72999 9.29006 8.11999Z" />
    </svg>
  );
}
