import React from "react";
import {
  FacebookFilled,
  InstagramOutlined,
  CopyrightOutlined,
} from "@ant-design/icons";

const FooterLayout = () => {
  return (
    <div className="pt-14 pb-8">
      <div className="divide-y gap-7 divide-[#707070] ">
        <div className="flex flex-wrap justify-between md:px-36 pb-20 sm:pl-6">
          <div className="text-wrap sm:justify-items-start">
            <h4 className="text-[#707070] text-lg">
              The Bal'e Villas 牛眠埔里
            </h4>
            <div className="text-white text-[13px] pt-5 w-60">
              No. 18-5, Neipu Rd., Puli Township, *, Nantou County, 545, Taiwan
            </div>
          </div>
          <div className="mr-32 sm:justify-items-start" >
            <h4 className="text-[#707070] text-lg">Social Media</h4>
            <div className="uppercase text-white pt-5">
              <div className="mb-3">
                <a>
                  <FacebookFilled className="mr-3" /> Facebook
                </a>
              </div>
              <div>
                <a>
                  <InstagramOutlined className="mr-3" /> Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-between text-[16px] pt-8 text-[#707070] px-44">
          <h3 className="sm:text-center sm:justify-center">
            <CopyrightOutlined />
            2025 All rights reserved
          </h3>
          <h3 className="sm:text-center sm:justify-center">Powered by Canvas</h3>
        </div>
      </div>
    </div>
  );
};

export default FooterLayout;
