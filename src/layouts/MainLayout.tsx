import React from "react";
import { Layout, Menu, theme } from "antd";
import HeaderLayout from "./HeaderLayout";
import FooterLayout from "./FooterLayout";
import ContentLayout from "./ContentLayout";


const { Header, Content, Footer, Sider } = Layout;

const MainLayout: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const bgPageStyle: React.CSSProperties = {
    background: colorBgContainer,
    borderRadius: borderRadiusLG,
  };

  return (
    <Layout style={bgPageStyle}>
      <Content>
        <Layout>
          <Content style={bgPageStyle}>
            <ContentLayout />
          </Content>
        </Layout>
      </Content>
      <Footer className="bg-[#363636] p-0 m-0">
        <FooterLayout />
      </Footer>
    </Layout>
  );
};

export default MainLayout;
