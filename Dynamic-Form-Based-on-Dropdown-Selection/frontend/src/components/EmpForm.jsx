import React, { useEffect, useState } from "react";
import axios from "axios";

const EmpForm = () => {
  const [departments, setDepartments] = useState([]);
  const [selectedDept, setSelectedDept] = useState("");
  const [formData, setFormData] = useState({name: "",salary: "",experience: "",employeesManaged: "",testingTool: "" });

  useEffect(() => {
    fetchDepartments();
  }, []);

  const fetchDepartments = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/departments");
      setDepartments(res.data.departments);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeptChange = (e) => {
    setSelectedDept(e.target.value);

    setFormData({ name: "", salary: "", experience: "", employeesManaged: "", testingTool: "" });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({...formData,[name]: value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = { department: selectedDept, ...formData};

    console.log(payload);
  };

   return (
    <div>
      <h2>Dynamic Employee Form</h2>

      <form onSubmit={handleSubmit}>
        <select value={selectedDept} onChange={handleDeptChange}>
          <option value="">Select Department</option>
          {departments.map((dept, index) => (
            <option key={index} value={dept}>{dept}</option>
          ))}
        </select>

        <br /><br />

        {selectedDept === "Developer" && (
          <div>
            <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleInputChange} />
            <br /><br />
            <input type="text" name="salary" placeholder="Salary" value={formData.salary} onChange={handleInputChange} />
            <br /><br />
            <input type="text" name="experience" placeholder="Experience" value={formData.experience} onChange={handleInputChange} />
          </div>
        )}

        {selectedDept === "HR" && (
          <div>
            <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleInputChange} />
            <br /><br />
            <input type="text" name="employeesManaged" placeholder="Employees Managed" value={formData.employeesManaged} onChange={handleInputChange} />
          </div>
        )}

        {selectedDept === "Tester" && (
          <div>
            <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleInputChange} />
            <br /><br />
            <input type="text" name="testingTool" placeholder="Testing Tool" value={formData.testingTool} onChange={handleInputChange} />
          </div>
        )}

        {selectedDept === "Manager" && (
          <div>
            <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleInputChange} />
          </div>
        )}

        <br />
        {selectedDept && <button type="submit">Submit</button>}
      </form>
    </div>
  );
};

export default EmpForm;