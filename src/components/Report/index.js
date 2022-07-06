import { LeftOutlined, PlusOutlined } from "@ant-design/icons";
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
} from "antd";
import React, { useState } from "react";
import "./Report.css";
const { Content } = Layout;
const { Option } = Select;
const columns = [
  {
    title: "Mã",
    dataIndex: "ma",
    key: "ma",
    align: "center",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Cơ sở giết mổ",
    dataIndex: "cosogietmo",
    key: "cosogietmo",
    align: "center",
  },
  {
    title: "Ngày lập báo cáo",
    dataIndex: "ngaylapbaocao",
    key: "ngaylapbaocao",
    align: "center",
  },
  {
    title: "Trạng thái",
    key: "trangthai",
    dataIndex: "trangthai",
    align: "center",
    render: (text, record) => {
      let color = "";
      if (text === "Hoàn Thành") {
        color = "success";
      } else if (text === "Từ Chối") {
        color = "reject";
      }
      return (
        <button
          className={`content__btnStatus--${color}`}
          onClick={() => console.log(record)}
        >
          {text}
        </button>
      );
    },
  },
];
const data = [
  {
    key: "1",
    ma: "001",
    cosogietmo: "Lò mổ Hà Nội",
    ngaylapbaocao: "23/04/2022",
    trangthai: "Duyệt",
  },
  {
    key: "2",
    ma: "001",
    cosogietmo: "Lò mổ Hà Nội",
    ngaylapbaocao: "23/04/2022",
    trangthai: "Hoàn Thành",
  },
  {
    key: "3",
    ma: "001",
    cosogietmo: "Lò mổ Hà Nội",
    ngaylapbaocao: "23/04/2022",
    trangthai: "Từ Chối",
  },
  {
    key: "4",
    ma: "001",
    cosogietmo: "Lò mổ Hà Nội",
    ngaylapbaocao: "23/04/2022",
    trangthai: "Duyệt",
  },
  {
    key: "5",
    ma: "001",
    cosogietmo: "Lò mổ Hà Nội",
    ngaylapbaocao: "23/04/2022",
    trangthai: "Duyệt",
  },
  {
    key: "6",
    ma: "001",
    cosogietmo: "Lò mổ Hà Nội",
    ngaylapbaocao: "23/04/2022",
    trangthai: "Hoàn Thành",
  },
  {
    key: "7",
    ma: "001",
    cosogietmo: "Lò mổ Hà Nội",
    ngaylapbaocao: "23/04/2022",
    trangthai: "Hoàn Thành",
  },
  {
    key: "8",
    ma: "001",
    cosogietmo: "Lò mổ Hà Nội",
    ngaylapbaocao: "23/04/2022",
    trangthai: "Duyệt",
  },
];
function Report() {
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
  return (
    <>
      <Content
        style={{
          padding: "10px 24px",
          minHeight: 280,
          background: "#fff",
        }}
      >
        <p>Báo cáo</p>
        <div className="content__wrapperActions">
          <span className="content__contentTitle">
            {" "}
            <LeftOutlined /> Quản lý các báo cáo
          </span>
          <div className="content__actions">
            <span>
              <span className="content__filterTitle"> Ngày Lập:</span>{" "}
              <DatePicker onChange={changeFilterDate} />
            </span>
            <Button
              type="primary"
              icon={<PlusOutlined />}
              className="content__btnAdd"
              onClick={showModal}
            >
              Thêm mới
            </Button>
            <Modal
              title="Tạo báo cáo"
              visible={isModalVisible}
              onOk={handleOk}
              onCancel={handleCancel}
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
                <Form.Item label="Chọn lò mổ" name="lomo">
                  <Select placeholder="Vui lòng chọn lò mổ" allowClear>
                    <Option value="hn">Lò mổ Hà Nội</Option>
                    <Option value="hcm">Lò mổ Hồ Chí Minh</Option>
                    <Option value="dn">Lò mổ Đà Nẵng</Option>
                  </Select>
                </Form.Item>

                <Form.Item
                  label="Ngày lập báo cáo"
                  name="ngaylapbaocao"
                  placeholder="Ngày lập báo cáo"
                >
                  <DatePicker
                    onChange={changeAddDate}
                    style={{ width: "100%" }}
                    placeholder="Chọn ngày"
                  />
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
                  className="content__wrapAnimal"
                >
                  <p>Nhập số lượng động vật nhập vào</p>
                  <div className="content__addAnimal">
                    <Form.Item
                      label="Loại động vật"
                      name="loaidongvat"
                      className="content__addAnimalInput"
                    >
                      <Select placeholder="" allowClear>
                        <Option value="lon">Lợn</Option>
                        <Option value="bo">Bò</Option>
                        <Option value="trau">trâu</Option>
                      </Select>
                    </Form.Item>
                    <Form.Item label="Số lượng động vật" name="soluongdongvat">
                      <InputNumber />
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
                  <p>Nhập số lượng động giết mổ</p>
                  <div className="content__addAnimal">
                    <Form.Item
                      label="Loại động vật"
                      name="loaidongvat"
                      className="content__addAnimalInput"
                    >
                      <Select placeholder="" allowClear>
                        <Option value="lon">Lợn</Option>
                        <Option value="bo">Bò</Option>
                        <Option value="trau">trâu</Option>
                      </Select>
                    </Form.Item>
                    <Form.Item label="Số lượng động vật" name="soluongdongvat">
                      <InputNumber />
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

export default Report;
