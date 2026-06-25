import mongoose from "mongoose";

const empSchema = new mongoose.Schema({
  departments: { 
    type: [String],
    required: true
  }
});

const EmpModel = mongoose.model("EmployeeDepartment", empSchema);

export default EmpModel;