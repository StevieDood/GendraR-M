import React from "react";
import bannerImg from "../assets/Rick_and_Morty.png";

const Banner = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <img
        src={bannerImg}
        alt="banner"
        style={{ margin: "2rem" }}
        height="auto"
        width="100%"
        maxwidth="350em"
      />
    </div>
  );
};

export default Banner;
