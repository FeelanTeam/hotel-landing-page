import React from "react";
import { Button } from "antd";
import { RightOutlined } from "@ant-design/icons";

const Booking = () => {
  return (
    <Button
      className="uppercase font-medium bg-[#e67c24] h-14 w-3/12"
      type="primary"
      shape="round"
      icon={<RightOutlined />}
      iconPosition="end"
    >
      Book Now
    </Button>
  );
};

export default Booking;
