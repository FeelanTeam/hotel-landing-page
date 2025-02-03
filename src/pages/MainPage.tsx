import React from "react";
import { Layout, Menu, theme } from "antd";
import HeaderLayout from "../layouts/HeaderLayout";
import FooterLayout from "../layouts/FooterLayout";
import { Outlet } from "react-router-dom";

const { Header, Content, Footer, Sider } = Layout;

const MainPage: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const bgPageStyle: React.CSSProperties = {
    background: colorBgContainer,
    borderRadius: borderRadiusLG,
  };

  return (
    <Layout style={bgPageStyle}>
      <HeaderLayout />
      <Content>
        <Layout>
          <Content style={bgPageStyle} className="lg-px-36 md:px-36 sm:px-8">
            <Outlet />
          </Content>
        </Layout>
      </Content>
      <Footer className="bg-[#363636] p-0 m-0">
        <FooterLayout />
      </Footer>
    </Layout>
  );
};

export default MainPage;
