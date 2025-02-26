import React from "react";
import { Divider } from "antd";
import YoutubeEmbed from "../components/YoutubeEmbed";
import CarouselComponent from "../components/CarouselComponent";
import { motion } from "framer-motion";
import { Carousel, Image, ConfigProvider } from "antd";
import Home1 from "../assets/images/home1.jpg";
import Home2 from "../assets/images/home2.jpg";
import Home3 from "../assets/images/home3.jpg";
import PageWrapper from "../components/PageWrapper";
import Booking from "../components/Booking";

const titleStyle: React.CSSProperties = {
  fontSize: "2rem",
  textAlign: "center",
  paddingBottom: "3.7rem",
  fontWeight: "600",
};

const Content = () => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Carousel: {
            dotWidth: 12,
            dotHeight: 12,
            dotActiveWidth: 12,
            dotOffset: 140,
            dotGap: 1,
          },
        },
      }}
    >
      <div>
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="carousel-container">
            {/* Background Carousel */}
            <Carousel
              autoplay
              className="carousel"
              autoplaySpeed={3000}
              dotPosition="bottom"
              draggable={true}
              waitForAnimate={true}
            >
              {/* {carouselItems.map((item, index) => (
           <div
             key={index}
             className="carousel-slide"
             style={{ backgroundImage: item.background }}
           />
       ))} */}

              <Image className="carousel-slide" preview={false} src={Home1} />
              <Image className="carousel-slide" preview={false} src={Home2} />
              <Image className="carousel-slide" preview={false} src={Home3} />
            </Carousel>

            {/* Overlay Form */}
            <div className="form-container-bg">
              <div className="form-container-top">
                <h1 className="text-md uppercase text-white font-extralight pb-5 md:text-6xl">
                  Welcome To The Bal'e Villas
                </h1>
                <h4 className="text-white text-md italic font-extralight md:text-xl">
                  Come Stay With Us
                </h4>
              </div>
              <div className="form-container hidden md:flex">
                <Booking />
              </div>
            </div>
          </div>
        </motion.div>

        <PageWrapper>
          <div className="py-10">
            <h3 style={titleStyle}>Videos</h3>
            <YoutubeEmbed embedId="uN3sOnn0tDw?si=og2MPoWU7e_YK6G_" />
          </div>
          <Divider style={{ borderColor: "LightGray" }} />
          <div className="py-10">
            <h3 style={titleStyle}>Rooms</h3>
            <CarouselComponent />
          </div>
          <Divider style={{ borderColor: "LightGray" }} />
          <div className="py-10">
            <h3 style={titleStyle}>News</h3>
          </div>
        </PageWrapper>
      </div>
    </ConfigProvider>
  );
};

export default Content;
