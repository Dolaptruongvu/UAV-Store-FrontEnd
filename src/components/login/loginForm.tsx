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
        const customer = response.data.data.customer; // Correct structure usage
        console.log('Login successful, customer information:', customer);
        setCustomer(customer);
        // Don't call navigate('/') here
      }
    } catch (err) {
      console.error('Login error:', err);
    }
  };

  // useEffect to watch for `customer` changes
  useEffect(() => {
    if (customer) {
      navigate('/'); // Only redirect when customer is updated
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
          <Form.Label>Email Address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange={handleEmailChange} />
          <Form.Text className="text-muted">We will never share your email with anyone else.</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Enter password" onChange={handlePasswordChange} />
        </Form.Group>

        <Button variant="primary" type="submit" className="w-100">
          Log In
        </Button>
      </Form>
    </div>
  );
}

export default LoginForm;
