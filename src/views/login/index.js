import React, {useState} from "react";
import DocumentTitle from "react-document-title";
import { Redirect } from "react-router-dom";
import { Form, Icon, Input, Button, message, Spin } from "antd";

import { connect } from "react-redux";
import { login, getUserInfo } from "@/store/actions";
import "./index.less";
import FormItem from "antd/lib/form/FormItem";
const Login = (props) => {
    const {form, login, getUserInfo, token} = props;
    const { getFieldDecorator } = form;
    const [loading, setLoading] = useState(false);
    // 登陆
    const handleLogin = (username, password) => {
        // 登录完成后 发送请求 调用接口获取用户信息
        setLoading(true);
        login(username, password)
            .then((data) => {
                message.success("登录成功");
                handleUserInfo(data.token);
            })
            .catch((error) => {
                setLoading(false);
                message.error(error);
            });
        };
    // 获取用户信息
    const handleUserInfo = (token) => {
        getUserInfo(token)
        .then((data) => {})
        .catch((error) => {
            message.error(error);
        });
    };
    // 提交
    const handleSubmit = (e) => {
        // 阻止事件的默认行为
        e.preventDefault();
        // 对所有表单字段进行检验
        form.validateFields((err, values) => {
          // 检验成功
          if (!err) {
            const { username, password } = values;
            handleLogin(username, password);
          } 
        });
    };
    if (token) {
    return <Redirect to="/dashboard" />;
    }
    return (<DocumentTitle title="用户登录">
        <div className='login-container'>
            <Form onSubmit={handleSubmit} className="content">
                <div className="title">
                    <h2>用户登录</h2>
                </div>
                <Spin spinning={loading} tip="登录中...">
                    <FormItem>
                        {getFieldDecorator("username",{
                            rules: [
                                {
                                  required: true,
                                  whitespace: true,
                                  message: "请输入用户名",
                                },
                              ],
                              initialValue: "admin", // 初始值
                        })(
                            <Input
                                prefix={
                                    <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                                }
                                placeholder="用户名"/>
                        )}
                    </FormItem>
                    <FormItem>
                        {
                            getFieldDecorator("password", {
                                rules: [
                                  {
                                    required: true,
                                    whitespace: true,
                                    message: "请输入密码",
                                  },
                                ],
                                initialValue: "123456", // 初始值
                              })(
                                <Input
                                  prefix={
                                    <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                                  }
                                  type="password"
                                  placeholder="密码"
                                />
                              )
                        }
                    </FormItem>
                    <FormItem>
                        <Button
                            type="primary"
                            htmlType="submit"
                            className="login-form-button"
                        >
                            登录
                        </Button>
                    </FormItem>
                </Spin>
            </Form>
        </div>
    </DocumentTitle>)
}
const WrapLogin = Form.create()(Login);
export default connect((state) => state.user, { login, getUserInfo })(
    WrapLogin
  );