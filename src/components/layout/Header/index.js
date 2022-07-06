import React from "react";
import Logo from "../../../assets/images/logo.png";
import Avatar from "../../../assets/images/avatar.png";
import { Layout } from "antd";
import "./Header.css";
const { Header } = Layout;
function HeaderPage() {
  return (
    <>
      <Header className="header">
        <img src={Logo} alt="logo" className="header__logo" />
        <h1 className="header__heading">
          Phần mềm quản lý Kiểm soát giết mổ và Kiểm dịch
        </h1>
        <img src={Avatar} alt="Avatar" className="header__avatar" />
      </Header>
    </>
  );
}

export default HeaderPage;
