import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";


function Footer(){
    return (
    <footer className="text-white text-center py-3" style={{ backgroundColor: "rgba(39, 39, 39, 0.98)"}}>
        <div className="container">
         <p>&copy; 2024 Đỗ Lập Trường Vũ. Mọi quyền được bảo lưu.</p>
         <p>
            <a href="#" className="text-white">Chính sách bảo mật</a> | 
            <a href="#" className="text-white">Điều khoản dịch vụ</a>
         </p>
        </div>
    </footer>);
}

export default Footer;