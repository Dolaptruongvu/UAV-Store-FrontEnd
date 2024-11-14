import React, { useState } from "react";

const Update: React.FC = () => {
  const [uavId, setUavId] = useState("");
  const [newDescription, setNewDescription] = useState("");

  const handleUpdate = () => {
    console.log("Update UAV ID:", uavId, "New Description:", newDescription);
    alert("Chưa có api");
    setUavId("");
    setNewDescription("");
  };

  return (
    <div className="my-4">
      <h5>Update UAV</h5>
      <input
        type="text"
        placeholder="UAV ID"
        value={uavId}
        onChange={(e) => setUavId(e.target.value)}
        className="form-control my-2"
      />
      <textarea
        placeholder="New Description"
        value={newDescription}
        onChange={(e) => setNewDescription(e.target.value)}
        className="form-control my-2"
      />
      <button onClick={handleUpdate} className="btn btn-warning">
        Update UAV
      </button>
    </div>
  );
};

export default Update;
