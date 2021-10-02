import React, {useState} from "react";
import DocumentTitle from "react-document-title";
import { Redirect } from "react-router-dom";
import { Form, Icon, Input, Button, message, Spin } from "antd";

// import { connect } from "react-redux";
// import { login, getUserInfo } from "@/store/actions";
import "./index.less";
import FormItem from "antd/lib/form/FormItem";
const Login = (props) => {
    const {form, } = props;
    const { getFieldDecorator } = form;
    const [loading, setLoading] = useState(false);
    const handleSubmit = () => {
        console.log(`登录`)
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
export default WrapLogin; 