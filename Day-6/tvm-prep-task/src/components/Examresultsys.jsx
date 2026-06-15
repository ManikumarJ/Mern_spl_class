// Task 1: Online Exam Result System 
// Create an array of questions and marks. 
// Requirements: Display all students Calculate total marks Calculate average marks Find topper student Display pass/fail status

import React from 'react'
const Examresultsys = () => {
    const students = [
        {
            id : 1, 
            Name : "ManikumarJ",
            marks : [70, 40, 50, 77, 55]
        },
        {
            id : 2, 
            Name : "Dhanush",
            marks : [40, 70, 60, 67, 45]
        },
        {
            id : 3,
             Name : "Vimal",
             marks : [60, 50, 30, 77, 65]
        },
        {
            id : 4,
             Name : "ashika",
             marks : [90, 89, 90, 97, 85]
        }
    ];

    // const totmark = students.map((s)=>s.id).reduce((acc, val)=> acc + val , 0)

    // alert(totmark)
  return (
   <>
        <h1>Online Exam Result System</h1>
        <table border="5" >
            <thead>
               <tr>
                 <th>Student Name</th>
                <th>Mark</th>
                <th>Total Mark</th>
                <th>Avg Mark</th>
                <th>Status</th>
               </tr>
            </thead>
            <tbody  style={{padding:"5px"}} >
                {
                    students.map((s)=>(
                        <tr key={s.id}>
                            <td>{s.Name}</td>
                            <td>{s.marks}</td>
                        </tr>
                    ))
                }

            </tbody>
        </table>

   </>
  )
}

export default Examresultsys