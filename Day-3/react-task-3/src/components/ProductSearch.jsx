// Task 2: Product Search System Create an array of products. 
// Requirements: Add a search input. Filter products while typing. 
// If no product matches, show "No Products Found". 
// Display results in card format.
//  Topics: useState, filter(), Conditional Rendering

import React, { useState } from 'react'

const ProductSearch = () => {
    const product = [
    {
        "id": "PROD-001",
        "name": " Headphones",
        "price": 2999,
    },
    {
        "id": "PROD-002",
        "name": "Office Chair",
        "price": 999,
    },
    {
        "id": "PROD-003",
        "name": "Water Bottle",
        "price": 399,
    }
    ]

    const [search , setSearch] = useState("")

    const filterProduct = product.filter(e =>
    e.name.toLowerCase().includes(search.toLowerCase())
    );


  return (
    <>
        <input type="text" name='searchprt'  value={search} onChange={(e)=>setSearch(e.target.value)} placeholder='Search product ....' />

        
        {filterProduct.length > 0 ? (
            filterProduct.map((val) => (
                <div key={val.id}>
                <p>{val.name}</p>
                <p>{val.price}</p>
                </div>
            ))
        ) : (
        <p>No Products Found</p>
        )}
    </>
  )
}

export default ProductSearch