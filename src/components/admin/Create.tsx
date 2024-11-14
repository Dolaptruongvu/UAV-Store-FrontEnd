import React, { useState } from "react";

const Create: React.FC = () => {
  const [uavName, setUavName] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const handleCreate = () => {
    console.log("Create UAV:", { name: uavName, description, file });
    alert("NO API");
    setUavName("");
    setDescription("");
    setFile(null);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files && e.target.files[0];
    setFile(selectedFile ? selectedFile : null);
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
      <input
        type="file"
        onChange={handleFileChange}
        className="form-control my-2"
      />
      <button onClick={handleCreate} className="btn btn-primary">
        Add UAV
      </button>
    </div>
  );
};

export default Create;