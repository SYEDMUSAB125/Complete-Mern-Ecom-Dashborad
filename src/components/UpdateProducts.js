import React, { useEffect, useState } from 'react';
import {useParams,useNavigate} from "react-router-dom";
export function UpdateProducts(){
  const [name,setupName]=useState("");
  const [price,setupPrice]=useState("");
  const [company,setupCompany]=useState("");
  const [category,setupCategory]=useState("");
  const params = useParams();
  const navigate = useNavigate();
  useEffect(()=>{

    getProducts();
    // eslint-disable-next-line
  },[])
 const getProducts =async ()=>{
    let result = await fetch(`http://localhost:5000/product/${params.id}`,{
      headers:{
        authorization:`bearer ${JSON.parse(localStorage.getItem("token"))}`
    }
    });
        result = await result.json();
        console.log(result)
  setupName(result.name);
  setupPrice(result.price);
  setupCategory(result.category);
  setupCompany(result.company);


 }
  const updateData= async()=>{
   
    let result = await fetch(`http://localhost:5000/product/${params.id}`,{
        method:"put",
        body: JSON.stringify({name,price,company,category}),
        headers:{
            "Content-Type":"application/json",
          authorization:`bearer ${JSON.parse(localStorage.getItem("token"))}`
          
        }
    });
    result = await result.json();
    console.log(result)
      navigate("/product")

  }
    return(
      <div>
      <div className="container">
            <h3 className="head">Update Products</h3> 
           
            <input type="text" value={name} onChange={(e)=>setupName(e.target.value)} placeholder='Enter Your Product Name' />
            <input type="number" value={price} onChange={(e)=>setupPrice(e.target.value)}  placeholder='Enter Price'/>
            
            <input type="text" value={category} onChange={(e)=>setupCategory(e.target.value)} placeholder='Enter Your Product Category' />
          
            <input type="text" value={company} onChange={(e)=>setupCompany(e.target.value)} placeholder='Enter Company Name' />
           
         <button className="btn" onClick={updateData}>Update Product</button>
        </div>
      </div>
    )
}