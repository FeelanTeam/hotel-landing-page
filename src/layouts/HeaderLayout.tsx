import React from "react";
import { Button } from "antd";
import {
  PhoneFilled,
  MenuOutlined,
  LeftOutlined,
  RightOutlined,
} from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import { Carousel } from "antd";

// import type { MenuProps } from "antd";
// import {
//   LaptopOutlined,
//   NotificationOutlined,
//   UserOutlined,
// } from "@ant-design/icons";

// const items1: MenuProps["items"] = ["1", "2", "3"].map((key) => ({
//   key,
//   label: `nav ${key}`,
// }));

// const items2: MenuProps["items"] = [
//   UserOutlined,
//   LaptopOutlined,
//   NotificationOutlined,
// ].map((icon, index) => {
//   const key = String(index + 1);

//   return {
//     key: `sub${key}`,
//     icon: React.createElement(icon),
//     label: `subnav ${key}`,

//     children: new Array(4).fill(null).map((_, j) => {
//       const subKey = index * 4 + j + 1;
//       return {
//         key: subKey,
//         label: `option${subKey}`,
//       };
//     }),
//   };
// });

const routes = [
  { path: "/", label: "Home" },
  { path: "*", label: "Terms and conditions" },
  { path: "*", label: "Rooms" },
  { path: "news", label: "News" },
  { path: "*", label: "News" },
  { path: "*", label: "Restaurant" },
];

const Navbar = () => {
  return (
    <div>
      <div className="w-full h-[160px] lg:px-36 md:px-36 sm:px-8">
        <div className="max-w-[1480px] m-auto w-full h-full flex justify-between items-center">
          <img
            className="h-[80px]"
            src="//webbox.imgix.net/images/ockqbqolqkwyigxj/93601bf2-37f2-4ea7-b947-5582fdccf4c3.png?auto=format,compress&amp;fit=crop&amp;h=112"
            alt="The Bal'e Villas 牛眠埔里"
          />
          <div>
            <div className="flex gap-4 justify-end items-end pb-4">
              <Button className="rounded-full bg-[#43434366] border-[#c8c8c866] text-white p-3 h-14 w-14 text-lg">
                <PhoneFilled />
              </Button>
              <Button className="rounded-full bg-[#e67c24] border-[#e67c24] text-white p-6 h-14 text-md font-semibold uppercase">
                Book Now
              </Button>
            </div>
            <div>
              <nav className="flex items-center justify-center gap-5 align-middle">
                <ul className="hidden md:flex items-center gap-5 uppercase">
                  {routes.map(({ path, label }) => (
                    <li key={path}>
                      <NavLink
                        to={path}
                        end
                        className={({ isActive }) =>
                          isActive ? "active-link" : ""
                        }
                      >
                        {label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
                <Button className="text-2xl m-0 p-0 " type="text">
                  <MenuOutlined />
                </Button>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <Carousel  autoplay dots={{ className: "custom-dots" }}>
        <div className="carousel-slide slide1">Slide 1</div>
        <div className="carousel-slide slide2">Slide 2</div>
        <div className="carousel-slide slide3">Slide 3</div>
      </Carousel>
    </div>
  );
};

export default Navbar;
