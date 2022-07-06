import HeaderPage from "../layout/Header";
import MenuPage from "../layout/Menu";
import { Layout } from "antd";
import React, { useState } from "react";
import Report from "../Report";
import { Outlet } from "react-router-dom";
const { Content } = Layout;

function Home() {
  return (
    <>
      <Layout>
        <HeaderPage />
        <Content
          style={{
            padding: "0",
          }}
        >
          <Layout
            className="site-layout-background"
            style={{
              padding: "0",
              height: "100vh",
            }}
          >
            <MenuPage />
            <Outlet />
          </Layout>
        </Content>
      </Layout>
    </>
  );
}

export default Home;
