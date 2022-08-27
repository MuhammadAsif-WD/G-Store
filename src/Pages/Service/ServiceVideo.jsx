import React from "react";
import { Player } from "react-tuby";
import "react-tuby/css/main.css";
import high from "../../Assets/Video/high.mp4";
import medium from "../../Assets/Video/medium.mp4";
import low from "../../Assets/Video/low.mp4";
const ServiceVideo = () => {
  return (
    <div className="mb-32" data-aos="zoom-in-right" data-aos-duration="5000">
      <Player
        primaryColor="#E31922"
        seekDuration="5"
        src={[
          {
            quality: "Full HD",
            url: `${high}`,
          },
          {
            quality: "Medium Quality",
            url: `${medium}`,
          },
          {
            quality: "Low Quality",
            url: `${low}`,
          },
        ]}
      />
    </div>
  );
};

export default ServiceVideo;
