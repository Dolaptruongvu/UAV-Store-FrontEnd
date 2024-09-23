import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

function AuthenticateNavBar() {
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
        
        {/* Right section: Register button only */}
        <div className="d-flex flex-shrink-0">
          <a href="/register" className="btn btn-outline-primary py-2 px-4">
            Đăng Ký
          </a>
        </div>
      </Container>
    </Navbar>
  );
}

export default AuthenticateNavBar;
