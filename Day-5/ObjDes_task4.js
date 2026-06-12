//  Object Destructuring 
//   const student = { name: "Arun", course: "MERN", city: "Chennai" }; 
//   Task Using Destructuring: Store values into separate variables and print.

  const student = { name: "Arun", course: "MERN", city: "Chennai" }; 

  const {name,course,city} = student

  console.log(`Name : ${name}, Course : ${course}, city : ${city}`);
  