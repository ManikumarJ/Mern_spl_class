// Task 4: Calculate Total Cart Amount (reduce()) 
// const cart = [ { product: "Laptop", price: 50000 },
//      { product: "Mouse", price: 500 },
//       { product: "Keyboard", price: 1500 } 
//     ]; 
// Task: Calculate the total cart value.
//  Display the final amount. Interview Focus: reduce()


import React from 'react'

const Calccartamt = () => {
    const cart = [ 
        { product: "Laptop", price: 50000 },
        { product: "Mouse", price: 500 },
        { product: "Keyboard", price: 1500 } 
    ];
    const totAmt = cart.map((m)=>m.price).reduce((acc, curr)=> acc + curr, 0)

  return (
    <>
    
        <h1>Total Amount</h1>
        <p>{totAmt}</p>


    </>
  )
}

export default Calccartamt