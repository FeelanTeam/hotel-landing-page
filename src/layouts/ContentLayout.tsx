import React from "react";
import { Divider } from "antd";
import { Image, Row, Col } from "antd";
import YoutubeEmbed from "../components/YoutubeEmbed";
import CarouselComponent from "../components/CarouselComponent";

const titleStyle: React.CSSProperties = {
  fontSize: "2rem",
  textAlign: "center",
  paddingBottom: "3.7rem",
  fontWeight: "600",
};


const Content = () => {
  return (
    <div>
      <div>
        
      </div>
      <div className="py-10">
        <h3 style={titleStyle}>Videos</h3>
        <YoutubeEmbed embedId="uN3sOnn0tDw?si=og2MPoWU7e_YK6G_" />
      </div>
      <Divider style={{ borderColor: "gray" }} />
      <div className="py-10">
        <h3 style={titleStyle}>Rooms</h3>
        <CarouselComponent />
      </div>
      <Divider style={{ borderColor: "gray" }} />
      <div className="py-10">
        <h3 style={titleStyle}>News</h3>
      </div>
      <Divider style={{ borderColor: "gray" }} />
    </div>
  );
};

export default Content;
