import {
  LeftOutlined,
  PlusOutlined,
  EyeOutlined,
  HighlightOutlined,
  DeleteOutlined,
  SearchOutlined,
  WarningOutlined,
} from "@ant-design/icons";
import {
  Layout,
  DatePicker,
  Button,
  Table,
  Modal,
  Form,
  Select,
  InputNumber,
  Checkbox,
  Input,
} from "antd";
import React, { useState } from "react";
import "./User.css";
import { Link } from "react-router-dom";
const { Content } = Layout;
const { Option } = Select;

function User() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalDelete, setIsModalDelete] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };
  const showModalDelete = () => {
    setIsModalDelete(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const handleOk2 = () => {
    setIsModalDelete(false);
  };

  const handleCancel2 = () => {
    setIsModalDelete(false);
  };
  const changeFilterDate = (date, dateString) => {
    console.log(date, dateString);
  };
  const changeAddDate = (date, dateString) => {
    console.log(date, dateString);
  };
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const columns = [
    {
      title: "Mã",
      dataIndex: "ma",
      key: "ma",
      align: "center",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Họ và tên",
      dataIndex: "hovaten",
      key: "hovaten",
      align: "center",
    },
    {
      title: "Chức vụ",
      dataIndex: "chucvu",
      key: "chucvu",
      align: "center",
    },
    {
      title: "Báo cáo",
      dataIndex: "baocao",
      key: "baocao",
      align: "center",
    },
    {
      title: "Lần cuối báo cáo",
      dataIndex: "lancuoibaocao",
      key: "lancuoibaocao",
      align: "center",
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      align: "center",
      render: (text, record) => {
        return (
          <div className="content__actionBtn">
            <Link to="/user/001">
              <EyeOutlined />
            </Link>
            <HighlightOutlined />
            <DeleteOutlined onClick={showModalDelete} />
          </div>
        );
      },
    },
  ];
  const data = [
    {
      key: "1",
      ma: "001",
      hovaten: "Nguyễn Văn A",
      chucvu: "Quản lý lò mổ A",
      baocao: "5",
      lancuoibaocao: "Ngày 20/4/2022",
      action: "action",
    },
    {
      key: "",
      ma: "001",
      hovaten: "Nguyễn Văn A",
      chucvu: "Quản lý lò mổ A",
      baocao: "5",
      lancuoibaocao: "Ngày 20/4/2022",
      action: "action",
    },
    {
      key: "3",
      ma: "001",
      hovaten: "Nguyễn Văn A",
      chucvu: "Quản lý lò mổ A",
      baocao: "5",
      lancuoibaocao: "Ngày 20/4/2022",
      action: "action",
    },
    {
      key: "4",
      ma: "001",
      hovaten: "Nguyễn Văn A",
      chucvu: "Quản lý lò mổ A",
      baocao: "5",
      lancuoibaocao: "Ngày 20/4/2022",
      action: "action",
    },
    {
      key: "5",
      ma: "001",
      hovaten: "Nguyễn Văn A",
      chucvu: "Quản lý lò mổ A",
      baocao: "5",
      lancuoibaocao: "Ngày 20/4/2022",
      action: "action",
    },
    {
      key: "6",
      ma: "001",
      hovaten: "Nguyễn Văn A",
      chucvu: "Quản lý lò mổ A",
      baocao: "5",
      lancuoibaocao: "Ngày 20/4/2022",
      action: "action",
    },
    {
      key: "7",
      ma: "001",
      hovaten: "Nguyễn Văn A",
      chucvu: "Quản lý lò mổ A",
      baocao: "5",
      lancuoibaocao: "Ngày 20/4/2022",
      action: "action",
    },
    {
      key: "8",
      ma: "001",
      hovaten: "Nguyễn Văn A",
      chucvu: "Quản lý lò mổ A",
      baocao: "5",
      lancuoibaocao: "Ngày 20/4/2022",
      action: "action",
    },
  ];
  return (
    <>
      <Content
        style={{
          padding: "10px 24px",
          minHeight: 280,
          background: "#fff",
        }}
      >
        <p>Quản lý nhân viên</p>
        <div className="content__wrapperActions">
          <span className="content__contentTitle">
            {" "}
            <LeftOutlined /> Quản lý số lượng nhân viên
          </span>
          <div className="content__actions">
            <Input
              style={{ width: "160px", borderRadius: "8px" }}
              placeholder="Tìm kiếm"
              prefix={<SearchOutlined />}
            />
            <Button
              type="primary"
              icon={<PlusOutlined />}
              className="content__btnAdd"
              onClick={showModal}
            >
              Thêm mới
            </Button>
            <Modal
              title="Xóa nhân viên"
              visible={isModalDelete}
              onOk={handleOk2}
              onCancel={handleCancel2}
              okText="Xóa"
              cancelText="Hủy"
              className="content_modalDeleteWrap"
            >
              <div className="content__modalDelete">
                <WarningOutlined />
                <p>Bạn có muốn xóa nhân viên không ?</p>
              </div>
            </Modal>
            <Modal
              title="Tạo nhân viên mới"
              visible={isModalVisible}
              onOk={handleOk}
              onCancel={handleCancel}
              okText={"Thêm mới"}
              cancelText={"Huỷ"}
            >
              <Form
                name="basic"
                layout={"vertical"}
                labelCol={{
                  span: 16,
                }}
                wrapperCol={{
                  span: 24,
                }}
                initialValues={{
                  remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
              >
                <Form.Item label="Họ tên nhân viên" name="tennv">
                  <Input placeholder="Nguyễn Văn A" />
                </Form.Item>
                <p style={{ marginBottom: "10px" }}>Ngày tháng năm sinh</p>
                <DatePicker
                  onChange={changeFilterDate}
                  placeholder="Ngày tháng năm sinh"
                  style={{ width: "100%", marginBottom: "20px" }}
                />

                <Form.Item label="Địa điểm công tác (lò mổ)" name="text">
                  <Select placeholder="Lò mổ Đông Anh" allowClear>
                    <Option value="lon"></Option>
                    <Option value="bo"></Option>
                    <Option value="trau"></Option>
                  </Select>
                </Form.Item>

                <Form.Item label="Chức vụ" name="role">
                  <Input placeholder="Nhân viên" />
                </Form.Item>
              </Form>
            </Modal>
          </div>
        </div>
        <Table
          columns={columns}
          dataSource={data}
          pagination={{
            defaultPageSize: 4,
          }}
          className="content__table"
        />
      </Content>
    </>
  );
}

export default User;
