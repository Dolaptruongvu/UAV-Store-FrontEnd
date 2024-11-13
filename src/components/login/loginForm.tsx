import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useContext, useState, useEffect } from "react";
import axiosInstance from '../../utilities/axiousEdition';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './authProvider';

function LoginForm() {
  const [email, updateEmail] = useState<string>('');
  const [password, updatePassword] = useState<string>('');
  const navigate = useNavigate();
  const { customer, setCustomer } = useContext(AuthContext);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updatePassword(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = {
      email,
      password,
    };

    try {
      const response = await axiosInstance.post('/customer/login', data);

      if (response.data.status === 'success') {
        const customer = response.data.data.customer; // Sử dụng cấu trúc đúng
        console.log('Đăng nhập thành công, thông tin customer:', customer);
        setCustomer(customer);
        // Không gọi navigate('/') ở đây
      }
    } catch (err) {
      console.error('Login error:', err);
    }
  };

  // useEffect để lắng nghe sự thay đổi của `customer`
  useEffect(() => {
    if (customer) {
      navigate('/'); // Chỉ chuyển hướng khi customer đã được cập nhật
    }
  }, [customer, navigate]);

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{ marginTop: '-150px' }}
    >
      <Form
        className="border p-4 rounded shadow"
        style={{ width: '520px' }}
        onSubmit={handleSubmit}
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Địa chỉ Email</Form.Label>
          <Form.Control type="email" placeholder="Nhập email" onChange={handleEmailChange} />
          <Form.Text className="text-muted">Chúng tôi sẽ không bao giờ chia sẻ email của bạn.</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Mật khẩu</Form.Label>
          <Form.Control type="password" placeholder="Mật khẩu" onChange={handlePasswordChange} />
        </Form.Group>

        <Button variant="primary" type="submit" className="w-100">
          Đăng nhập
        </Button>
      </Form>
    </div>
  );
}

export default LoginForm;
