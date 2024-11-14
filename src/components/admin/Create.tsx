import React, { useState } from "react";

const Create: React.FC = () => {
  const [uavName, setUavName] = useState("");
  const [description, setDescription] = useState("");

  const handleCreate = () => {
    console.log("Add UAV:", { name: uavName, description });
    alert("Không có API add add cc");
    setUavName("");
    setDescription("");
  };

  return (
    <div className="my-4">
      <h5>Create UAV</h5>
      <input
        type="text"
        placeholder="UAV Name"
        value={uavName}
        onChange={(e) => setUavName(e.target.value)}
        className="form-control my-2"
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="form-control my-2"
      />
      <button onClick={handleCreate} className="btn btn-primary">
        Add UAV
      </button>
    </div>
  );
};

export default Create;
