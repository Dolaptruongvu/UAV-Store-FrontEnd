import React, { useState } from "react";

const Delete: React.FC = () => {
  const [uavId, setUavId] = useState("");

  const handleDelete = () => {
    console.log("Delete UAV ID:", uavId);
    alert("Vẫn chưa có api");
    setUavId("");
  };

  return (
    <div className="my-4">
      <h5>Delete UAV</h5>
      <input
        type="text"
        placeholder="UAV ID"
        value={uavId}
        onChange={(e) => setUavId(e.target.value)}
        className="form-control my-2"
      />
      <button onClick={handleDelete} className="btn btn-danger">
        Delete UAV
      </button>
    </div>
  );
};

export default Delete;