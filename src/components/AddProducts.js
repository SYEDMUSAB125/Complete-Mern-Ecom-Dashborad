import React, { useState } from 'react';
import {useNavigate} from "react-router-dom"
export function AddProducts(){
  const [name,setName]=useState("");
  const [price,setPrice]=useState("");
  const [company,setCompany]=useState("");
  const [category,setCategory]=useState("");
  const [error,setError] = useState(false)
  const navigate = useNavigate()
  const addData= async()=>{
    // console.log({name,price,category,company})
    if(!name ||!price||!company||!category){
      setError(true)
      return false;
    }
    const userId = JSON.parse(localStorage.getItem("user"))._id;
    // console.log(userId)
    let result = await fetch("http://localhost:5000/add-product",{
      method:"post",
      body: JSON.stringify({name,price,category,company,userId}),
      headers:{
        "Content-Type":"application/json",
        authorization:`bearer ${JSON.parse(localStorage.getItem("token"))}`
      }
    })
    result = await result.json();
    console.log(result);
    navigate("/product")
    
  }
    return(
      <div>
      <div className="container">
            <h3 className="head">Add Products</h3> 
           
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter Your Product Name' />
            {error && !name && <span className='invalid'> PLease fill out!</span> }
            <input type="number" value={price} onChange={(e)=>setPrice(e.target.value)}  placeholder='Enter Price'/>
            {error && !name && <span className='invalid'> PLease fill out!</span> }
            <input type="text" value={category} onChange={(e)=>setCategory(e.target.value)} placeholder='Enter Your Product Category' />
            {error && !category && <span className='invalid'>  PLease fill out!</span> }
            <input type="text" value={company} onChange={(e)=>setCompany(e.target.value)} placeholder='Enter Company Name' />
            {error && !company && <span className='invalid'>  PLease fill out!</span> }
         <button className="btn" onClick={addData}>Add product</button>
        </div>
      </div>
    )
}