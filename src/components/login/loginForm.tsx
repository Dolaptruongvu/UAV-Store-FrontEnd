import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useContext, useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './authProvider';



function LoginForm() {
  const [email,updateEmail] = useState<string>('');
  const [password,updatePassword] = useState<string>('');
  const navigate = useNavigate();
  const {customer,setCustomer} = useContext(AuthContext)
  const handleEmailChange= (e:React.ChangeEvent<HTMLInputElement>)=>{
    updateEmail(e.target.value);
  }
  const handlePasswordChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
    updatePassword(e.target.value)
  }
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 

    const data = {
      email,
      password
    }
   
    try {
      const response = await axios.post('http://127.0.0.1:5000/api/v1/customer/login', data,{ withCredentials: true });
      if (response.data.status === 'success') {
        const customer = response.data.data
        setCustomer(customer)
        navigate('/'); // Redirect to the dashboard or another page
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="d-flex justify-content-center align-items-center vh-100" style={{ marginTop: '-150px' }}>
      <Form className="border p-4 rounded shadow" style={{ width: '520px' }} onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange={handleEmailChange} />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={handlePasswordChange} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

        <Button variant="primary" type="submit" className="w-100">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default LoginForm;
