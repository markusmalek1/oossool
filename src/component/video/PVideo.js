import React, { useState } from "react";
import { Modal } from "antd";
import VideoTest from "./VideoTest";
import PlayIcon from "../../assets/icons/PlayIcon";
import StarIcon from "../../assets/icons/StarIcon";

export default function PVideo(props) {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <>
      <span onClick={showModal}>
        <VideoTest vod={props.vod} icon={props.fav ? <StarIcon /> : null} />
      </span>
      <Modal
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        className="p-video-modal"
      >
        <video className="p-video-container" autoPlay controls>
          <source src={props.vod} type="video/mp4" />
        </video>
      </Modal>
    </>
  );
}
