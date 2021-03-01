import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as authActions from '../../actions/authActions'


const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};



function SignUp(props) {

    const onFinish = (values) => {
        props.authActions.signUp(values)
    };
    const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
    };

    return(
        <Form
            {...layout}
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            style={{width: '500px', margin: '20vh auto'}}
            >
            <Form.Item>
                <h1 style={{textAlign: 'end', fontSize: '30px', fontWeight: 600 ,fontFamily: 'Montserrat'}}>Sign up</h1>            
            </Form.Item>
            <Form.Item
                label="Username"
                name="name"
                rules={[{ required: true, message: 'Please input your username!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="email"
                name="email"
                rules={[{ type: 'email', required: true, message: 'Please input your email!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                Submit
                </Button>
            </Form.Item>
        </Form>
  

    );

}

const mapStateToProps = state => ({
    isLoading: state.auth.isLoading
})

const mapDispatchToProps = dispatch => ({
    authActions: bindActionCreators(authActions, dispatch)
})

export default connect(mapStateToProps , mapDispatchToProps)(SignUp);