import React from "react";
import { Button } from "antd";
import { PhoneFilled, MenuOutlined } from "@ant-design/icons";

const Navbar = () => {
  return (
    <div className="w-full h-[80px] border-gray-100">
      <div className="max-w-[1480px] m-auto w-full h-full flex justify-between items-center">
        <img
          className="h-[80px]"
          src="//webbox.imgix.net/images/ockqbqolqkwyigxj/93601bf2-37f2-4ea7-b947-5582fdccf4c3.png?auto=format,compress&amp;fit=crop&amp;h=112"
          alt="The Bal'e Villas 牛眠埔里"
        />
        <div>
          <div className="flex gap-4 justify-end items-end pb-4">
            <Button className="rounded-full bg-gray-400 text-white p-3 h-12 w-12 text-xl">
              <PhoneFilled />
            </Button>
            <Button className="rounded-full bg-orange-500 text-white p-6 text-lg font-semibold">
              Book Now
            </Button>
          </div>
          <div className="hidden md:flex items-center ">
            <ul className="flex gap-5">
              <li>Home</li>
              <li>Terms and conditions</li>
              <li>Rooms</li>
              <li>News</li>
              <li>Restaurant</li>
              <Button className="text-lg" type="text" ><MenuOutlined /></Button>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
