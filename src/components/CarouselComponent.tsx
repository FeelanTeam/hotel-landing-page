import React from "react";
import { Carousel, Image, Row, Col, ConfigProvider } from "antd";
import RoomHotel1 from "../assets/images/room1.png";
import { FacebookFilled, LeftOutlined, RightOutlined } from "@ant-design/icons";

const contentStyle: React.CSSProperties = {
  margin: 0,
  width: "100%",
  textAlign: "center",
  padding: "5rem 4rem",
};
const CarouselComponent: React.FC = () => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Carousel: {
            arrowSize:50,
          },
        },
      }}
    >
      <div>
        <Carousel
          dots={false}
          style={contentStyle}
          arrows
        >
          <div>
            <Row>
              <Col span={11}>
                <Image width="100%" src={RoomHotel1} />
              </Col>
              <Col span={1}></Col>
              <Col span={12}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  nonne merninisti licere mihi ista probare, quae sunt a te
                  dicta? Refert tamen, quo modo. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Sed nonne merninisti licere mihi
                  ista probare, quae sunt a te dicta? Refert tamen, quo modo.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  nonne merninisti licere mihi ista probare, quae sunt a te
                  dicta? Refert tamen, quo modo. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Sed nonne merninisti licere mihi
                  ista probare, quae sunt a te dicta? Refert tamen, quo modo.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  nonne merninisti licere mihi ista probare, quae sunt a te
                  dicta? Refert tamen, quo modo. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Sed nonne merninisti licere mihi
                  ista probare, quae sunt a te dicta? Refert tamen, quo modo.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  nonne merninisti licere mihi ista probare, quae sunt a te
                  dicta? Refert tamen, quo modo. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Sed nonne merninisti licere mihi
                  ista probare, quae sunt a te dicta? Refert tamen, quo modo.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  nonne merninisti licere mihi ista probare, quae sunt a te
                  dicta? Refert tamen, quo modo. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Sed nonne merninisti licere mihi
                  ista probare, quae sunt a te dicta? Refert tamen, quo modo.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  nonne merninisti licere mihi ista probare, quae sunt a te
                  dicta? Refert tamen, quo modo. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Sed nonne merninisti licere mihi
                  ista probare, quae sunt a te dicta? Refert tamen, quo modo.
                </p>
              </Col>
            </Row>
          </div>
          <div>
            <Row>
              <Col span={11}>
                <Image width="100%" src={RoomHotel1} />
              </Col>
              <Col span={1}></Col>
              <Col span={12}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  nonne merninisti licere mihi ista probare, quae sunt a te
                  dicta? Refert tamen, quo modo. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Sed nonne merninisti licere mihi
                  ista probare, quae sunt a te dicta? Refert tamen, quo modo.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  nonne merninisti licere mihi ista probare, quae sunt a te
                  dicta? Refert tamen, quo modo. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Sed nonne merninisti licere mihi
                  ista probare, quae sunt a te dicta? Refert tamen, quo modo.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  nonne merninisti licere mihi ista probare, quae sunt a te
                  dicta? Refert tamen, quo modo. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Sed nonne merninisti licere mihi
                  ista probare, quae sunt a te dicta? Refert tamen, quo modo.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  nonne merninisti licere mihi ista probare, quae sunt a te
                  dicta? Refert tamen, quo modo. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Sed nonne merninisti licere mihi
                  ista probare, quae sunt a te dicta? Refert tamen, quo modo.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  nonne merninisti licere mihi ista probare, quae sunt a te
                  dicta? Refert tamen, quo modo. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Sed nonne merninisti licere mihi
                  ista probare, quae sunt a te dicta? Refert tamen, quo modo.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  nonne merninisti licere mihi ista probare, quae sunt a te
                  dicta? Refert tamen, quo modo. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Sed nonne merninisti licere mihi
                  ista probare, quae sunt a te dicta? Refert tamen, quo modo.
                </p>
              </Col>
            </Row>
          </div>
        </Carousel>
      </div>
    </ConfigProvider>
  );
};

export default CarouselComponent;
