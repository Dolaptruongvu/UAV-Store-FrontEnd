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
  const[isHovered,SetIsHovered] = useState(false);
  const { customer,setCustomer } = useContext(AuthContext);
  const navigate = useNavigate();


  const mouseEnter = () =>{
    SetIsHovered(true);
  }
  const mouseLeave = () =>{
    SetIsHovered(false);
  }

  const handleLogOut = async(e:React.MouseEvent<HTMLButtonElement,MouseEvent>)=>{
    try{
      e.preventDefault();
    const response = await axiosInstance.get('/customer/logout');
    if(response.data.status === 'success'){
        setCustomer(null);
        navigate('/')
    }
    }catch(err){
         console.log(err)
    }
    
  }
  

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
        <div style={{ position: 'relative', display: 'inline-block',textSizeAdjust:"inherit", alignItems:"center" }}>
          <h6
            style={{ cursor: 'pointer'}}
            className="mb-0 text-primary"
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
          >
            Sản phẩm  <span style={{ marginLeft: '5px' }}>&#x25BC;</span>
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
              <ListGroup.Item className="text-secondary" href="http://127.0.0.1:3000/?slugName=Dji-Mavic" action>DJI Mavic</ListGroup.Item>
              <ListGroup.Item className="text-secondary" href="http://127.0.0.1:3000/?slugName=Dji-Mini" action>DJI Mini</ListGroup.Item>
              <ListGroup.Item className="text-secondary" href="http://127.0.0.1:3000/?slugName=Dji-Air" action>Dji Air</ListGroup.Item>
              <ListGroup.Item className="text-secondary" href="http://127.0.0.1:3000/" action>Phụ kiện</ListGroup.Item>
            </ListGroup>
          )}
        </div>

        {/* Middle section: Search bar */}
        <div className="flex-grow-1 mx-4" style={{ maxWidth: "50%" }}>
          <input
            type="text"
            placeholder="Tìm kiếm"
            className="form-control"
            style={{ width: "100%", maxWidth: "100%" }}
          />
        </div>

        {/* Right section: Login and Signup buttons */}
        <div className="d-flex flex-shrink-0">
          {customer ? (
            <>
              <button className="btn btn-outline-danger me-2 py-2 px-4" onClick={handleLogOut}>
                Đăng Xuất
              </button>
              {/* Add more authenticated-only links or buttons here */}
            </>
          ) : (
            <>
              <a href="/login" className="btn btn-outline-primary me-2 py-2 px-4">
                Đăng Nhập
              </a>
              <a href="/signup" className="btn btn-outline-secondary py-2 px-4">
                Đăng Ký
              </a>
            </>
          )}
        </div>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;

