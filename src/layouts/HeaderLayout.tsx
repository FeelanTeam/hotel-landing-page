import React from "react";
import { Button, Image } from "antd";
import {
  PhoneFilled,
  MenuOutlined,
  LeftOutlined,
  RightOutlined,
} from "@ant-design/icons";
import { NavLink } from "react-router-dom";

import { motion } from "framer-motion";

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
  { path: "terms", label: "Terms and conditions" },
  { path: "rooms", label: "Rooms" },
  { path: "news", label: "News" },
  { path: "news-page", label: "News" },
  { path: "restaurant", label: "Restaurant" },
];


const Navbar = () => {
  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
    >
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
                <Button
                  className=" bg-[#e67c24] border-[#e67c24] text-white h-14 text-md font-medium uppercase"
                  shape="round"
                >
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
      </div>
    </motion.div>
  );
};

export default Navbar;
