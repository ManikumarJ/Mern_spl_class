// Task 5: Student Management System (map + filter + find + reduce) 
// const students = [ { id: 1, name: "Arun", mark: 85 }, 
//     { id: 2, name: "Karthik", mark: 45 },
//      { id: 3, name: "Vijay", mark: 92 },
//       { id: 4, name: "Ajay", mark: 35 } 
// ]; 
// Tasks: Display all students using map(). 
// Display only passed students (mark >= 50) using filter().
//  Find student with id = 3 using find().
//   Calculate total marks using reduce(). 
//   Calculate average mark using reduce().

import React from 'react'

const StudManagementSys = () => {
    const students = [ 
        { id: 1, name: "Arun", mark: 85 },
        { id: 2, name: "Karthik", mark: 45 },
        { id: 3, name: "Vijay", mark: 92 },
        { id: 4, name: "Ajay", mark: 35 }
    ]; 

    const passedStudent  = students.filter((s)=>s.mark >=50).map((s)=>s.name)

    const findStud =  students.find((stud)=>stud.id === 3)

    const totMark = students.map((s)=>s.mark).reduce((acc, val)=> acc + val,0)

    const avgMark = totMark / students.length
    
  return (
    <>
    <h1>Student Name List :</h1>
    {
        students.map((stud)=>(
            <div key={stud.id}>
                <h2> {stud.name} </h2>
            </div>
        ))
    }
    <h2>Passed Student : {passedStudent}</h2>

    <h2>Stud ID : 3 {findStud.name}</h2>

    <h2>Total Mark : {totMark}</h2>

    <h2>Avg Mark : {avgMark}</h2>





    </>
  )
}

export default StudManagementSys
