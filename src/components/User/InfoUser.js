import {
  LeftOutlined,
  PlusOutlined,
  EyeOutlined,
  HighlightOutlined,
  DeleteOutlined,
  SearchOutlined,
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
const { Content } = Layout;
const { Option } = Select;
const columns = [
  {
    title: "Mã",
    dataIndex: "ma",
    key: "ma",

    render: (text) => <a>{text}</a>,
  },
  {
    title: "Ngày",
    dataIndex: "ngay",
    key: "ngay",
  },
  {
    title: "Trạng thái",
    dataIndex: "trangthai",
    key: "trangthai",
  },
  {
    title: "Ghi chú",
    dataIndex: "ghichu",
    key: "ghichu",
  },
  {
    title: "Action",
    dataIndex: "action",
    key: "action",
    render: (text, record) => {
      return (
        <div className="content__actionBtn">
          <EyeOutlined />
        </div>
      );
    },
  },
];
const data = [
  {
    key: "1",
    ma: "001",
    ngay: "01/04/2022",
    trangthai: "Không tồn kho",
    ghichu: "Số lượng bao gồm gà,vịt,lợn",
    action: "action",
  },
  {
    key: "2",
    ma: "001",
    ngay: "01/04/2022",
    trangthai: "Không tồn kho",
    ghichu: "Số lượng bao gồm gà,vịt,lợn",
    action: "action",
  },
  {
    key: "3",
    ma: "001",
    ngay: "01/04/2022",
    trangthai: "Không tồn kho",
    ghichu: "Số lượng bao gồm gà,vịt,lợn",
    action: "action",
  },
  {
    key: "4",
    ma: "001",
    ngay: "01/04/2022",
    trangthai: "Không tồn kho",
    ghichu: "Số lượng bao gồm gà,vịt,lợn",
    action: "action",
  },
  {
    key: "5",
    ma: "001",
    ngay: "01/04/2022",
    trangthai: "Không tồn kho",
    ghichu: "Số lượng bao gồm gà,vịt,lợn",
    action: "action",
  },
  {
    key: "6",
    ma: "001",
    ngay: "01/04/2022",
    trangthai: "Không tồn kho",
    ghichu: "Số lượng bao gồm gà,vịt,lợn",
    action: "action",
  },
  {
    key: "7",
    ma: "001",
    ngay: "01/04/2022",
    trangthai: "Không tồn kho",
    ghichu: "Số lượng bao gồm gà,vịt,lợn",
    action: "action",
  },
  {
    key: "8",
    ma: "001",
    ngay: "01/04/2022",
    trangthai: "Không tồn kho",
    ghichu: "Số lượng bao gồm gà,vịt,lợn",
    action: "action",
  },
];
function InfoUser() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isInfoUser, setIsInfoUser] = useState(false);
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
        <p>Quản lý nhân viên</p>
        <div className="content__wrapperActions">
          <span className="content__contentTitle">
            {" "}
            <LeftOutlined /> Quản lý nhân viên / Nguyễn Văn A
          </span>
          <div className="content__actions">
            <Button
              type="primary"
              icon={<HighlightOutlined />}
              className="content__btnAdd"
              onClick={() => setIsInfoUser(!isInfoUser)}
            >
              Chỉnh sửa
            </Button>
          </div>
        </div>
        {isInfoUser ? (
          <div className="content__editInfoUser">
            <div>
              <span className="content__editWrapper">
                <span className="content__editInfoUserLabel">Họ tên:</span>
                <Input placeholder="Nguyễn Văn A" />
              </span>
              <span className="content__editWrapper">
                <span className="content__editInfoUserLabel">Chức vụ:</span>
                <Input placeholder="Nhân viên" />
              </span>
            </div>
            <div>
              <span className="content__editWrapper">
                <span className="content__editInfoUserLabel">Năm sinh:</span>
                <Input placeholder="Nguyễn Văn A" />
              </span>
              <span className="content__editWrapper">
                <span className="content__editInfoUserLabel">
                  Địa điểm công tác:
                </span>
                <Input placeholder="Đông Anh Hà Nội" />
              </span>
            </div>
          </div>
        ) : (
          <div className="content__infoUser">
            <span>
              Họ tên:<span> Nguyễn Văn A</span>
            </span>
            <span>Chức vụ: Nhân viên</span>
            <span>Năm sinh: 20/01/1990</span>
            <span>
              Địa điểm công tác:<span> Đông Anh Hà Nội</span>
            </span>
          </div>
        )}

        <p className="content__subTitle">Các báo cáo đã lập</p>
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

export default InfoUser;
