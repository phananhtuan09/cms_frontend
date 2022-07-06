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
import "./Lomo.css";
import { Link } from "react-router-dom";
const { Content } = Layout;
const { Option } = Select;

function Lomo() {
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
      title: "Lồ mổ",
      dataIndex: "lomo",
      key: "lomo",
      align: "center",
    },
    {
      title: "Trạng thái",
      dataIndex: "trangthai",
      key: "trangthai",
      align: "center",
    },
    {
      title: "Số lượng động vật tồn kho(số heo)",
      dataIndex: "sldongvattonkho",
      key: "sldongvattonkho",
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
            <Link to="/lomo/001">
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
      lomo: "Lò mổ Hà Nội",
      trangthai: "Tồn kho",
      sldongvattonkho: "1000",
      action: "action",
    },
    {
      key: "2",
      ma: "001",
      lomo: "Lò mổ Hà Nội",
      trangthai: "Tồn kho",
      sldongvattonkho: "1000",
      action: "action",
    },
    {
      key: "3",
      ma: "001",
      lomo: "Lò mổ Hà Nội",
      trangthai: "Tồn kho",
      sldongvattonkho: "1000",
      action: "action",
    },
    {
      key: "4",
      ma: "001",
      lomo: "Lò mổ Hà Nội",
      trangthai: "Tồn kho",
      sldongvattonkho: "1000",
      action: "action",
    },
    {
      key: "5",
      ma: "001",
      lomo: "Lò mổ Hà Nội",
      trangthai: "Tồn kho",
      sldongvattonkho: "1000",
      action: "action",
    },
    {
      key: "6",
      ma: "001",
      lomo: "Lò mổ Hà Nội",
      trangthai: "Tồn kho",
      sldongvattonkho: "1000",
      action: "action",
    },
    {
      key: "7",
      ma: "001",
      lomo: "Lò mổ Hà Nội",
      trangthai: "Tồn kho",
      sldongvattonkho: "1000",
      action: "action",
    },
    {
      key: "8",
      ma: "001",
      lomo: "Lò mổ Hà Nội",
      trangthai: "Tồn kho",
      sldongvattonkho: "1000",
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
        <p>Quản lý lò mổ</p>
        <div className="content__wrapperActions">
          <span className="content__contentTitle">
            {" "}
            <LeftOutlined /> Quản lý lò mổ
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
              title="Xóa lò mổ"
              visible={isModalDelete}
              onOk={handleOk2}
              onCancel={handleCancel2}
              okText="Xóa"
              cancelText="Hủy"
              className="content_modalDeleteWrap"
            >
              <div className="content__modalDelete">
                <WarningOutlined />
                <p>Bạn có muốn xóa lò mổ không ?</p>
              </div>
            </Modal>

            <Modal
              title="Nhập thông tin lò mổ"
              visible={isModalVisible}
              onOk={handleOk}
              onCancel={handleCancel}
              okText={"Thêm"}
              cancelText={"Huỷ"}
            >
              <Form
                name="basicư"
                layout={"vertical"}
                initialValues={{
                  remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
              >
                <Form.Item label="Tên lò mổ">
                  <Input placeholder="Lồ mổ Đông Anh Hà Nội" />
                </Form.Item>
                <Form.Item label="Tên chủ lò">
                  <Input placeholder="Nguyễn Văn A" />
                </Form.Item>
                <Form.Item label="Địa chỉ">
                  <Input placeholder="Đông Anh Hà Nội" />
                </Form.Item>
                <Form.Item label="Quy mô giết mổ">
                  <Input placeholder="3000 con" />
                </Form.Item>
                <Form
                  name="basic2"
                  layout={"horizontal"}
                  initialValues={{
                    remember: true,
                  }}
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  autoComplete="off"
                  className="content__wrapAnimal addlomo1"
                >
                  <p>Động vật tồn kho trong lò</p>
                  <div className="content__addAnimal">
                    <Form.Item
                      label="Loại động vật"
                      name="loaidongvat"
                      className="content__addAnimalInput"
                    >
                      <Select placeholder="lợn" allowClear>
                        <Option value="lon">Lợn</Option>
                        <Option value="bo">Bò</Option>
                        <Option value="trau">trâu</Option>
                      </Select>
                      <Select placeholder="bò" allowClear>
                        <Option value="lon">Lợn</Option>
                        <Option value="bo">Bò</Option>
                        <Option value="trau">trâu</Option>
                      </Select>
                    </Form.Item>
                    <Form.Item label="Số lượng động vật" name="soluongdongvat">
                      <InputNumber placeholder="1000" />
                      <InputNumber placeholder="2000" />
                    </Form.Item>
                    <div>
                      <Form.Item
                        name="tinhtheoxe"
                        valuePropName="checked"
                        style={{ width: "112px" }}
                      >
                        <Checkbox>Tính theo xe</Checkbox>
                      </Form.Item>
                      <Form.Item
                        name="tinhtheoxe"
                        valuePropName="checked"
                        style={{ width: "112px" }}
                      >
                        <Checkbox>Tính theo xe</Checkbox>
                      </Form.Item>
                    </div>
                  </div>
                </Form>
                <Form
                  name="basic3"
                  layout={"horizontal"}
                  initialValues={{
                    remember: true,
                  }}
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  autoComplete="off"
                  className="content__wrapAnimal"
                >
                  <p>Nhập thêm động vật vào lò mổ</p>
                  <div className="content__addAnimal">
                    <Form.Item
                      label="Loại động vật"
                      name="loaidongvat"
                      className="content__addAnimalInput"
                    >
                      <Select placeholder="lợn" allowClear>
                        <Option value="lon">Lợn</Option>
                        <Option value="bò">Bò</Option>
                        <Option value="trau">trâu</Option>
                      </Select>
                    </Form.Item>
                    <Form.Item label="Số lượng động vật" name="soluongdongvat">
                      <InputNumber placeholder="1000" />
                    </Form.Item>
                    <Form.Item name="tinhtheoxe" valuePropName="checked">
                      <Checkbox>Tính theo xe</Checkbox>
                    </Form.Item>
                  </div>
                  <Button
                    type="primary"
                    icon={<PlusOutlined />}
                    className="content__btnAdd content__btnAdd--gray"
                  >
                    Thêm mới
                  </Button>
                </Form>
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

export default Lomo;
