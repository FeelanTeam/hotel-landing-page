import React from "react";
import { Layout, Menu, theme } from "antd";
import HeaderLayout from "../layouts/HeaderLayout";
import FooterLayout from "../layouts/FooterLayout";
import { Outlet } from "react-router-dom";
import PageWrapper from "../components/PageWrapper";

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
      <PageWrapper>
        <Content>
          <Layout>
            <Content style={bgPageStyle}>
              <Outlet />
            </Content>
          </Layout>
        </Content>
      </PageWrapper>
      <Footer className="bg-[#363636] p-0 m-0">
        <FooterLayout />
      </Footer>
    </Layout>
  );
};

export default MainPage;
