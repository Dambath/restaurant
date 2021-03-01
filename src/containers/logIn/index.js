import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as authActions from '../../actions/authActions'
import FormItem from 'antd/lib/form/FormItem';



const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
wrapperCol: { offset: 8, span: 16 },
};



function LogIn(props) {

    
    
    const onFinish = (values) => {
        props.authActions.signIn(values)
    };
    
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Form
          style={{width: '500px', margin: '20vh auto', display: 'flex', flexDirection: 'column'}}
          {...layout}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item>
            <h1 style={{textAlign: 'end', fontSize: '30px', fontWeight: 600 ,fontFamily: 'Montserrat'}}>Log in</h1>
          </Form.Item>
          <Form.Item
            label="email"
            name="email"
            rules={[{ required: true, message: 'Please input your eamil!' }]}
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

export default  connect(mapStateToProps, mapDispatchToProps) (LogIn);
