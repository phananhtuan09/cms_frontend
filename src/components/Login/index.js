import { Button, Form, Input } from "antd";
import React from "react";
import Logo from "../../assets/images/logo.png";
import "./Login.css";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
function Login() {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      <div className="login">
        <img src={Logo} className="login__logo" alt="logo" />
        <h1 className="login__title">Đăng nhập</h1>
        <div className="login__form">
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
            <div className="login__wrapText">
              <MailOutlined />
              <span className="login__label">Tên đăng nhập</span>
            </div>
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập tên đăng nhập!",
                },
                {
                  whitespace: true,
                },
                { min: 6 },
              ]}
            >
              <Input className="login__input" />
            </Form.Item>

            <div className="login__wrapText">
              <LockOutlined />
              <span className="login__label">Mật khẩu</span>
            </div>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập mật khẩu!",
                },
              ]}
            >
              <Input.Password className="login__input" />
            </Form.Item>

            <Form.Item>
              <div className="login-action">
                <Button type="link" className="login__forgot" htmlType="button">
                  <a href="#">Quên mật khẩu ?</a>
                </Button>

                <Button
                  type="primary"
                  className="login__submit"
                  htmlType="submit"
                >
                  Đăng nhập
                </Button>
              </div>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
}

export default Login;
