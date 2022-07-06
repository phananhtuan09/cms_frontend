import {
  LeftOutlined,
  PlusOutlined,
  EyeOutlined,
  HighlightOutlined,
  DeleteOutlined,
  SearchOutlined,
  ArrowUpOutlined,
  ArrowDownOutlined,
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
const { Content } = Layout;
const { Option } = Select;

function InfoLomo() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
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
      title: "Ngày",
      dataIndex: "ngay",
      key: "ngay",
      align: "center",
    },
    {
      title: "Trạng thái",
      dataIndex: "trangthai",
      key: "trangthai",
      align: "center",
    },
    {
      title: "Số lượng động vật nhập",
      dataIndex: "sldongvatnhap",
      key: "sldongvatnhap",
      align: "center",
      render: (text, record) => {
        return (
          <div className="content__infoBtn--Up">
            <span>
              <ArrowUpOutlined /> {text}
            </span>
          </div>
        );
      },
    },
    {
      title: "Số lượng động vật giết mổ",
      dataIndex: "sldongvatgietmo",
      key: "sldongvatgietmo",
      align: "center",
      render: (text, record) => {
        return (
          <div className="content__infoBtn--Down">
            <span>
              <ArrowDownOutlined /> {text}
            </span>
          </div>
        );
      },
    },
    {
      title: "Số lượng động vật tồn kho",
      dataIndex: "sldongvattonkho",
      key: "sldongvattonkho",
      align: "center",
      render: (text, record) => {
        return (
          <div className="content__infoBtn--Down">
            <span>{text}</span>
          </div>
        );
      },
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      align: "left",
      render: (text, record) => {
        return (
          <div className="content__actionBtn">
            <EyeOutlined onClick={showModal} />
          </div>
        );
      },
    },
  ];
  const data = [
    {
      key: "1",
      ma: "001",
      ngay: "01/04/2022 10:30:22",
      trangthai: "Tồn kho",
      sldongvatnhap: "200",
      sldongvatgietmo: "200",
      sldongvattonkho: "200",
      action: "action",
    },
    {
      key: "2",
      ma: "001",
      ngay: "01/04/2022 10:30:22",
      trangthai: "Tồn kho",
      sldongvatnhap: "200",
      sldongvatgietmo: "200",
      sldongvattonkho: "200",
      action: "action",
    },
    {
      key: "3",
      ma: "001",
      ngay: "01/04/2022 10:30:22",
      trangthai: "Tồn kho",
      sldongvatnhap: "200",
      sldongvatgietmo: "200",
      sldongvattonkho: "200",
      action: "action",
    },
    {
      key: "4",
      ma: "001",
      ngay: "01/04/2022 10:30:22",
      trangthai: "Tồn kho",
      sldongvatnhap: "200",
      sldongvatgietmo: "200",
      sldongvattonkho: "200",
      action: "action",
    },
    {
      key: "5",
      ma: "001",
      ngay: "01/04/2022 10:30:22",
      trangthai: "Tồn kho",
      sldongvatnhap: "200",
      sldongvatgietmo: "200",
      sldongvattonkho: "200",
      action: "action",
    },
    {
      key: "6",
      ma: "001",
      ngay: "01/04/2022 10:30:22",
      trangthai: "Tồn kho",
      sldongvatnhap: "200",
      sldongvatgietmo: "200",
      sldongvattonkho: "200",
      action: "action",
    },
    {
      key: "7",
      ma: "001",
      ngay: "01/04/2022 10:30:22",
      trangthai: "Tồn kho",
      sldongvatnhap: "200",
      sldongvatgietmo: "200",
      sldongvattonkho: "200",
      action: "action",
    },
    {
      key: "8",
      ma: "001",
      ngay: "01/04/2022 10:30:22",
      trangthai: "Tồn kho",
      sldongvatnhap: "200",
      sldongvatgietmo: "200",
      sldongvattonkho: "200",
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
            <LeftOutlined /> Quản lý lò mổ / Lò mổ Hà Nội
          </span>
        </div>
        <div className="content__infoUser">
          <span>
            Tên lò mổ:<span> Lò mổ Hà Nội</span>
          </span>
          <span>Trình trạng: Tồn kho</span>
          <span>Số lượng động vật còn tồn kho (số heo): 200 con</span>
        </div>

        <p className="content__subTitle">Lịch sử lò mổ</p>
        <Modal
          title="Thông tin số lượng động vật giết mổ"
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
          okText={"Thêm"}
          cancelText={"Đóng"}
          className="modal__infoAnimal"
        >
          <Form
            name="basic"
            layout={"vertical"}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
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
              <p>Động vật thêm vào lò</p>
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
              className="content__wrapAnimal addlomo1"
            >
              <p>Động vật giết mổ</p>
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
              className="content__wrapAnimal addlomo1"
            >
              <p>Động vật còn trong lò</p>
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
          </Form>
        </Modal>
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

export default InfoLomo;
