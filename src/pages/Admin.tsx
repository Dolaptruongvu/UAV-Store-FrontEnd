import React from "react";
import Create from "../components/admin/Create";
import Read from "../components/admin/Read";
import Update from "../components/admin/Update";
import Delete from "../components/admin/Delete";
import MyNavbar from "../components/navbar";
import Footer from "../components/footer";

const Admin: React.FC = () => {
  return (
    <>
    <MyNavbar/>
        <div className="container my-5">
        <h2 className="text-center mb-4">UAV Management</h2>
        <Create />
        <Read />
        <Update />
        <Delete />
        </div>
    <Footer />
    </>
    
  );
};

export default Admin;