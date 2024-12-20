import React, { useContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Container,
  ListGroup,
} from "react-bootstrap";
import { AuthContext } from "./login/authProvider";
import axiosInstance from "../utilities/axiousEdition";
import { useNavigate } from "react-router-dom";

function MyNavbar() {
  const [isHovered, setIsHovered] = useState(false);
  const { customer, setCustomer } = useContext(AuthContext);
  const navigate = useNavigate();

  const mouseEnter = () => {
    setIsHovered(true);
  };
  const mouseLeave = () => {
    setIsHovered(false);
  };

  const handleLogOut = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    try {
      e.preventDefault();
      const response = await axiosInstance.get('/customer/logout');
      if (response.data.status === 'success') {
        setCustomer(null);
        navigate('/');
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Navbar bg="light" expand="lg" className="shadow-lg py-2 mb-4">
      <Container className="d-flex justify-content-between align-items-center">
        {/* Logo on the left */}
        <Navbar.Brand href="/" className="flex-shrink-0">
          <img
            src="/logo.jpg"
            alt="Home"
            className="h-7"
            style={{ maxWidth: "70px" }}
          />
        </Navbar.Brand>
        <div style={{ position: 'relative', display: 'inline-block', textSizeAdjust: "inherit", alignItems: "center" }}>
          <h6
            style={{ cursor: 'pointer' }}
            className="mb-0 text-primary"
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
          >
            Products <span style={{ marginLeft: '5px' }}>&#x25BC;</span>
          </h6>
          {isHovered && (
            <ListGroup
              style={{
                position: 'absolute',
                top: '100%',
                left: '0',
                zIndex: 1,
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
              }}
              onMouseEnter={mouseEnter}
              onMouseLeave={mouseLeave}
            >
              <ListGroup.Item className="text-secondary" href="https://uav-store-front-end-6jk6.vercel.app/?slugName=Dji-Mavic" action>DJI Mavic</ListGroup.Item>
              <ListGroup.Item className="text-secondary" href="https://uav-store-front-end-6jk6.vercel.app/?slugName=Dji-Mini" action>DJI Mini</ListGroup.Item>
              <ListGroup.Item className="text-secondary" href="https://uav-store-front-end-6jk6.vercel.app/?slugName=Dji-Air" action>DJI Air</ListGroup.Item>
              <ListGroup.Item className="text-secondary" href="https://uav-store-front-end-6jk6.vercel.app/" action>Accessories</ListGroup.Item>
            </ListGroup>
          )}
        </div>

        {/* Middle section: Search bar */}
        <div className="flex-grow-1 mx-4" style={{ maxWidth: "50%" }}>
          <input
            type="text"
            placeholder=""
            className="form-control"
            style={{ width: "100%", maxWidth: "100%" }}
          />
        </div>

        {/* Right section: Login and Signup buttons */}
        <div className="d-flex flex-shrink-0">
          {customer ? (
            <>
              {customer.role === 'admin' && (
                <button className="btn btn-success me-2 py-2 px-4" onClick={() => navigate('/management')}>
                  Management
                </button>
              )}
              <button className="btn btn-outline-danger me-2 py-2 px-4" onClick={handleLogOut}>
                Log Out
              </button>
              {/* Add more authenticated-only links or buttons here */}
            </>
          ) : (
            <>
              <a href="/login" className="btn btn-outline-primary me-2 py-2 px-4">
                Log In
              </a>
              <a href="/signup" className="btn btn-outline-secondary py-2 px-4">
                Sign Up
              </a>
            </>
          )}
        </div>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
