// Question 2: Product Price Calculator Create a form with: Product Name Price Quantity Requirements: Calculate Total = Price × Quantity Display the total amount If total > 5000 show "Discount Eligible"

import React, { useState } from 'react'

const ProductCalc = () => {
    const [product, setProduct] = useState({productName : "",price : "", Quantity : ""})
    const [wholeproduct, setwholeproduct] = useState([]);
    
    function handleChange(e){
        setProduct({...product, [e.target.name] : e.target.value})
    }
    function handleSubmit(e){
        e.preventDefault()
        // console.log(product.Quantity);
        
   
        const Total = Number(product.price) * Number(product.Quantity)
        console.log(Total);
        if(Total > 5000 ){
            alert("Discount Eligible")
        }
        const updated = [...wholeproduct , product]
        setwholeproduct(updated)
        setProduct({productName : "",price : "", Quantity : ""})

    }

  return (
    <>
    <form onSubmit={handleSubmit}>
        <label htmlFor="productName">Product Name</label>
        <input type="text" name='productName' value={product.productName} onChange={handleChange} placeholder='Enter Product Name'/>

        <label htmlFor="price">Product price</label>
        <input type="text" name='price' value={product.price} onChange={handleChange} placeholder='Enter Product price'/>

        <label htmlFor="Quantity">Product Quantity</label>
        <input type="number" name='Quantity' value={product.Quantity} onChange={handleChange} placeholder='Enter Product Quantity'/>

        <button type='submit'>Submit</button>

    </form>

    </>
  )
}

export default ProductCalc