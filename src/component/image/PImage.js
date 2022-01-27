import React from "react";
import { Image } from "antd";

export default function PImage(props) {
  return (
    <div className="p-image">
      <span className="p-fav-icon">{props.icon}</span>
      {/* <div className="p-image-overlay" /> */}
      <Image src={props.img} alt={props.name} />
    </div>
  );
}
