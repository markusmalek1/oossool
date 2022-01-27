import React from "react";
import PVideo from "../../../component/video/PVideo";
import Vod from "../../../assets/video/video.mp4";
import Vod2 from "../../../assets/video/Pexels Videos 2252797.mp4";
import Vod3 from "../../../assets/video/Pexels Videos 2169880.mp4";
import PImage from "../../../component/image/PImage";
import Img from "../../../assets/img/pexels-nubia-navarro-(nubikini)-386009.jpg";
import Img2 from "../../../assets/img/pexels-michael-block-3225528.jpg";
import StarIcon from "../../../assets/icons/StarIcon";
import Img3 from "../../../assets/img/pexels-asad-photo-maldives-3155666.jpg";

export default function PContentUi() {
  return (
    <div
      className="site-layout-background"
      style={{ padding: 24, minHeight: 360 }}
    >
      <section>
        <h4 className="p-title">Starred work</h4>
        <div className="p-h-gallery">
          <div className="p-gallery-item">
            <PVideo vod={Vod} fav />
          </div>
          <div className="p-gallery-item">
            <PVideo vod={Vod2} fav />
          </div>
          <div className="p-gallery-item">
            <PVideo vod={Vod3} fav />
          </div>
          <div className="p-gallery-item">
            <PImage img={Img} name="travel_1" icon={<StarIcon />} />
          </div>
          <div className="p-gallery-item">
            <PImage img={Img2} name="travel_1" icon={<StarIcon />} />
          </div>
          <div className="p-gallery-item">
            <PImage img={Img3} name="travel_1" icon={<StarIcon />} />
          </div>
        </div>
      </section>

      <section>
        <h4 className="p-title">Recently opened</h4>
        <div className="p-h-gallery">
          <div className="p-gallery-item">
            <PVideo vod={Vod} />
          </div>
          <div className="p-gallery-item">
            <PVideo vod={Vod2} />
          </div>
          <div className="p-gallery-item">
            <PVideo vod={Vod3} />
          </div>
          <div className="p-gallery-item">
            <PImage img={Img} name="travel_1" />
          </div>
          <div className="p-gallery-item">
            <PImage img={Img2} name="travel_1" />
          </div>
          <div className="p-gallery-item">
            <PImage img={Img3} name="travel_1" />
          </div>
        </div>
      </section>

      <section>
        <h4 className="p-title">Recently uploaded</h4>
        <div className="p-h-gallery">
          <div className="p-gallery-item">
            <PVideo vod={Vod} />
          </div>
          <div className="p-gallery-item">
            <PVideo vod={Vod2} />
          </div>
          <div className="p-gallery-item">
            <PVideo vod={Vod3} />
          </div>
          <div className="p-gallery-item">
            <PImage img={Img} name="travel_1" />
          </div>
          <div className="p-gallery-item">
            <PImage img={Img2} name="travel_1" />
          </div>
          <div className="p-gallery-item">
            <PImage img={Img3} name="travel_1" />
          </div>
        </div>
      </section>
    </div>
  );
}
