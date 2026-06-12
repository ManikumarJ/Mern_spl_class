// Task 2: Rest Parameter Task 
// Create a function called totalMarks. 
// Requirements: Accept any number of marks Return total marks Use Rest Parameter
//  Example totalMarks(80, 90, 70, 60);

const totalMarks = (...marks) =>{
    return marks.reduce((acc, curr)=> acc + curr, 0)
}

console.log(totalMarks(80,90,70,60));
