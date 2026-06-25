import EmpModel from "../model/EmpModel.js";

export const Emp = async (req, res) => {
  try {
    const data = await EmpModel.findOne();

    if (!data) {
      return res.status(404).json({ message: "Departments not found" });
    }

    res.status(200).json({departments: data.departments});
  }
   catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};