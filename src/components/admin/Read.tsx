import React from "react";

const Read: React.FC = () => {
  const placeholderData = [
    { id: 1, name: "Placeholder UAV 1", description: "Description of UAV 1" },
    { id: 2, name: "Placeholder UAV 2", description: "Description of UAV 2" },
  ];

  return (
    <div className="my-4">
      <h5>List of UAVs</h5>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {placeholderData.map((uav) => (
            <tr key={uav.id}>
              <td>{uav.name}</td>
              <td>{uav.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Read;
