import {
  HomeOutlined,
  FileAddOutlined,
  EditOutlined,
  PictureOutlined,
  UsergroupAddOutlined,
  ThunderboltOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import React, { useState } from "react";
import "./Menu.css";
import { Link } from "react-router-dom";
const { Sider } = Layout;

function MenuPage() {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <p className="Menu__menuTitle">Hệ thống quản lý</p>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <HomeOutlined />,
              label: <Link to="/">Trang chủ</Link>,
            },
            {
              key: "2",
              icon: <FileAddOutlined />,
              label: <Link to="/report">Báo cáo</Link>,
            },
            {
              key: "3",
              icon: <EditOutlined />,
              label: <Link to="/user">Nhân viên</Link>,
            },
            {
              key: "4",
              icon: <PictureOutlined />,
              label: <Link to="/lomo">Lò Mổ</Link>,
            },
            {
              key: "5",
              icon: <UsergroupAddOutlined />,
              label: "Phân quyền",
            },
            {
              key: "6",
              icon: <ThunderboltOutlined />,
              label: "Subscriptions",
            },
            {
              key: "7",
              icon: <DeleteOutlined />,
              label: "Archived pages",
            },
          ]}
        />
      </Sider>
    </>
  );
}

export default MenuPage;
