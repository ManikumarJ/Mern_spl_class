// Task 3: Product Card Rendering (map()) 
// const products = [ { id: 1, name: "Laptop", price: 50000 }, 
//     { id: 2, name: "Mobile", price: 20000 }, 
//     { id: 3, name: "Keyboard", price: 1500 } 
// ]; 
// Task: Display all products in separate cards. 
// Show Product Name and Price. 
// Interview Focus: map()

import React from 'react'

const ProductCard = () => {
     const products = [
         { id: 1, name: "Laptop", price: 50000 }, 
        { id: 2, name: "Mobile", price: 20000 }, 
        { id: 3, name: "Keyboard", price: 1500 } 
    ]; 
  return (
    <>
    {
        products.map((p)=>(
            <div key={p.id} style={{ border: "1px solid black", padding: "10px", margin: "1px"}}>
                <p>{p.name}</p>
                <p>{p.price}</p>
            </div>
        ))
    }
    </>
  )
}

export default ProductCard