import React from "react";

const TechnicalTable: React.FC = () => (
  <div className="mb-4">
    <h4>Technical Specifications</h4>
    <table className="table table-striped">
      <tbody>
        <tr>
          <th>Dimensions</th>
          <td>350 mm diagonal</td>
        </tr>
        <tr>
          <th>Weight</th>
          <td>1388 g</td>
        </tr>
        <tr>
          <th>Battery</th>
          <td>LiPo 4S 5870 mAh</td>
        </tr>
        <tr>
          <th>Camera</th>
          <td>20 MP 1-inch CMOS sensor</td>
        </tr>
        <tr>
          <th>Max Speed</th>
          <td>72 kph</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default TechnicalTable;
