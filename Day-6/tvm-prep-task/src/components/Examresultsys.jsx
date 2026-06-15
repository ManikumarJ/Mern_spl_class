import React from "react";

const Examresultsys = () => {
  const students = [
    {
      id: 1,
      Name: "ManikumarJ",
      marks: [70, 40, 50, 77, 55],
    },
    {
      id: 2,
      Name: "Dhanush",
      marks: [40, 70, 60, 67, 45],
    },
    {
      id: 3,
      Name: "Vimal",
      marks: [30, 50, 30, 37, 65],
    },
    {
      id: 4,
      Name: "Ashika",
      marks: [90, 89, 90, 97, 85],
    },
  ];

  const getTotal = (marks) => {
    return marks.reduce((sum, mark) => sum + mark, 0);
  };

  const getAverage = (marks) => {
    return (getTotal(marks) / marks.length);
  };

  const getStatus = (marks) => {
    return getAverage(marks) >= 50 ? "Pass" : "Fail";
  };

  const topper = students.reduce((top, student) =>
    getTotal(student.marks) > getTotal(top.marks) ? student : top
  );

  return (
    <>
      <h1>Online Exam Result System</h1>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Marks</th>
            <th>Total Marks</th>
            <th>Average</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {students.map((s) => (
            <tr key={s.id}>
              <td>{s.Name}</td>
              <td>{s.marks.join(", ")}</td>
              <td>{getTotal(s.marks)}</td>
              <td>{getAverage(s.marks)}</td>
              <td>{getStatus(s.marks)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>
        Topper: {topper.Name} ({getTotal(topper.marks)} Marks)
      </h2>
    </>
  );
};

export default Examresultsys;