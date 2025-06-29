// src/components/EmployeeTable.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './employee.css'; 

const EmployeeTable = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios.get('http://csi-backend:8080/')  
      .then(response => setEmployees(response.data))
      .catch(error => console.error('Error fetching employees:', error));
  }, []);


  return (
    <div className="table-container">
      <h2>CSI Interns Directory</h2>
      <table className="styled-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Domain</th>
            <th>Location</th>
            <th>CSI Intern</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp, index) => (
            <tr key={index}>
              <td>{emp.name}</td>
              <td>{emp.domain}</td>
              <td>{emp.location}</td>
              <td>{emp.csiintern ? '✅ Yes' : '❌ No'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeTable;
