import React from 'react';
import { Form, Input, Button, Row, Col } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import { SignupFormProps } from './type';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Google from '../../Img/google.svg';
import Facebook from '../../Img/facebook.svg';

import './Signup.css'
const SignupForm: React.FC<SignupFormProps> = ({
  fullname,
  username,
  email,
  password,
  referralCode,
}) => {
  const handleSubmit = () => {
    toast.success('Form submitted successfully!');
  };

  return (
    <div className="signup-container">
      <Form onFinish={handleSubmit} className='form'>
        <CloseOutlined className="close-icon" />
        <h2 className="sign-title">Get Your Free Account</h2>
        <Row>
          <Col span={12}>
            <p className="form-sign">Full Name</p>
            <Form.Item
              name="fullname"
              rules={[{ required: true, message: 'Please input your full name!' }]}
              className="form-item"
            >
              <Input defaultValue={fullname} className='input' />
            </Form.Item>
          </Col>
          <Col span={12}>
            <p className="form-sign">User Name</p>
            <Form.Item
              name="username"
              rules={[{ required: true, message: 'Please input your username!' }]}

              className="form-item"
            >
              <Input defaultValue={username} className='input' />
            </Form.Item>
          </Col>
        </Row>
        <p className="form-sign">Email</p>
        <Form.Item
          name="email"
          rules={[
            { required: true, message: 'Please input your email!' },
            { type: 'email', message: 'Please enter a valid email address!' },
          ]}
          className="form-item-1"
        >
          <Input defaultValue={email} className='input' />
        </Form.Item>
        <p className="form-sign">Password</p>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
          className="form-item-1"
        >
          <Input defaultValue={password} className='input' />
        </Form.Item>
        <p className="form-sign">Referral Code</p>
        <Form.Item
          name="referralCode"
          rules={[{ required: true, message: 'Please input your referralCode!' }]}
          className="form-item-1"
        >
          <Input defaultValue={referralCode} className='input' />
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit" className="submit-button">
            Sign Up
          </Button>
        </Form.Item>
        <Form.Item className="or-divider">
          <div className="divContainer">
            <div className="divLine"></div>
            <span className="divText">OR</span>
            <div className="divLineLeft"></div>
          </div>
        </Form.Item>
        <Form.Item className='login'>
          <p className="login-link">Already have an account? <a href="/login" className='login-a'>Login</a></p>
        </Form.Item>

        <Form.Item>
          <Button className="facebook-button">
            <img src={Facebook} alt="" className="facebook-icon" />
            Sign up with Facebook
          </Button>
        </Form.Item>

        <Form.Item>
          <Button className="google-button">
            <img src={Google} alt="" className="google-icon" />
            Sign up with Google
          </Button>
        </Form.Item>
        <ToastContainer />
      </Form>
    </div>
  );
};

export default SignupForm;