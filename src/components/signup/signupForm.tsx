import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useContext, useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../login/authProvider';

function SignUpForm() {
  const [email, updateEmail] = useState<string>('');
  const [password, updatePassword] = useState<string>('');
  const [passwordConfirm, updatePasswordConfirm] = useState<string>('');
  const [name, updateName] = useState<string>('');
  const [address, updateAddress] = useState<string>('');
  const [phoneNumber, updatePhoneNumber] = useState<number>(0);
  const [error, setError] = useState<string>(''); // State for error message
  const navigate = useNavigate();
  const { setCustomer } = useContext(AuthContext);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updatePassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updatePasswordConfirm(e.target.value);
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateName(e.target.value);
  };

  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateAddress(e.target.value);
  };

  const handlePhoneNumbChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const numberValue = parseFloat(value);
    if (!isNaN(numberValue)) {
      updatePhoneNumber(numberValue);
    } else {
      console.error("Invalid phone number");
    }
  };

  const comparePassword = (password: string, confirmPassword: string): boolean => {
    return password === confirmPassword;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 

    // Validation
    if (!email || !password || !passwordConfirm || !name || !address || phoneNumber <= 0) {
      setError('Tất cả các trường đều phải được điền đầy đủ.');
      return;
    }

    if (!comparePassword(password, passwordConfirm)) {
      setError('Mật khẩu cần trùng khớp với nhau');
      return;
    }

    const data = {
      name,
      email,
      address,
      phoneNumber,
      password,
      passwordConfirm
    };

    try {
      const response = await axios.post('http://127.0.0.1:5000/api/v1/customer/signup', data, { withCredentials: true });
      if (response.data.status === 'success') {
        const customer = response.data.data;
        setCustomer(customer);
        navigate('/'); // Redirect to the dashboard or another page
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100" style={{ marginTop: '-95px' }}>
      <Form className="border p-4 rounded shadow" style={{ width: '520px' }} onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Họ và tên</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" onChange={handleNameChange} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formAddress">
          <Form.Label>Địa chỉ</Form.Label>
          <Form.Control type="text" placeholder="Enter your address" onChange={handleAddressChange} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPhoneNumber">
          <Form.Label>Số điện thoại</Form.Label>
          <Form.Control type="tel" placeholder="(+84)" onChange={handlePhoneNumbChange} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange={handleEmailChange} />
          <Form.Text className="text-muted">
           Chúng tôi sẽ không chia sẽ thông tin này cho bất kỳ ai.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Mật khẩu</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={handlePasswordChange} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formConfirmBasicPassword">
          <Form.Label>Xác nhận mật khẩu</Form.Label>
          <Form.Control type="password" placeholder="Confirm Password" onChange={handleConfirmPasswordChange} />
        </Form.Group>

        {error && <div className="alert alert-danger">{error}</div>}

        <Button variant="primary" type="submit" className="w-100">
           Gửi
        </Button>
      </Form>
    </div>
  );
}

export default SignUpForm;
