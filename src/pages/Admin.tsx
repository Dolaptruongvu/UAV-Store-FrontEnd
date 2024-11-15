import React, { useState } from "react";
import Create from "../components/admin/Create";
import Update from "../components/admin/Update";
import Delete from "../components/admin/Delete";
import MyNavbar from "../components/navbar";
import Footer from "../components/footer";

const Admin: React.FC = () => {
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [showDeleteForm, setShowDeleteForm] = useState(false);

  return (
    <>
      <MyNavbar />
      <div className="container my-5" style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <h2 className="text-center mb-4">UAV Management</h2>
        
        <div className="d-flex justify-content-start mb-4">
          <button
            className="btn btn-primary mx-2"
            onClick={() => {
              setShowCreateForm(true);
              setShowUpdateForm(false);
              setShowDeleteForm(false);
            }}
          >
            Add UAV
          </button>
          <button
            className="btn btn-secondary mx-2"
            onClick={() => {
              setShowCreateForm(false);
              setShowUpdateForm(true);
              setShowDeleteForm(false);
            }}
          >
            Edit UAV
          </button>
          <button
            className="btn btn-danger mx-2"
            onClick={() => {
              setShowCreateForm(false);
              setShowUpdateForm(false);
              setShowDeleteForm(true);
            }}
          >
            Delete UAV
          </button>
        </div>

        <div style={{ flexGrow: 1 }}>
          {showCreateForm && <Create />}
          {showUpdateForm && <Update />}
          {showDeleteForm && <Delete />}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Admin;
