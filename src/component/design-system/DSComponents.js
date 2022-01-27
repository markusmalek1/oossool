import React from "react";
import PAvatar from "../avatar/PAvatar";
import PImage from "../image/PImage";
import Img from "../../assets/img/pexels-nubia-navarro-(nubikini)-386009.jpg";
import StarIcon from "../../assets/icons/StarIcon";
import PVideo from "../video/PVideo";
import PButton from "../button/PButton";
import PCollapseMenu from "../collapse-menu/PCollapseMenu";
import PTree from "../tree/PTree";

export default function DSComponents() {
  return (
    <div className="ds-layout">
      <span className="p-section">COMPONENTS</span>
      <div style={{ display: "flex" }}>
        <div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <span style={{ marginRight: 32 }}>
              <PAvatar />
            </span>
            <span>
              <PButton value="Search" />
            </span>
          </div>
          <br />
          <PImage img={Img} name="travel_1" icon={<StarIcon />} />
          <br />
          <PVideo />
        </div>
      </div>
    </div>
  );
}
