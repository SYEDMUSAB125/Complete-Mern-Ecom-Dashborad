import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
export function Products() {
    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        let result = await fetch("http://localhost:5000/list", {
            headers: {
                authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`
            }
        });

        result = await result.json();
        if (result) {
            setProducts(result);
        }

    }

    const deleteProducts = async (id) => {
        let result = await fetch(`http://localhost:5000/product/${id}`, {
            method: "delete",
            headers: {
                authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`
            }

        });
        result = await result.json();


    }
    const searchHandle = async (e) => {
        let key = e.target.value;
        if (key) {


            let result = await fetch(`http://localhost:5000/search/${key}`, {
                headers: {
                    authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`
                }
            });
            result = await result.json();
            //  console.log(result)
            if (result) {
                setProducts(result)
            }

        }
        else {

            getProducts()

        }
    }


    useEffect(() => {
        getProducts()
        // eslint-disable-next-liness
    }, [])




    return (
        <div className='list-product' >
            <h3>Products</h3>
            <input placeholder='search Products' type="text"
                onChange={searchHandle}
            />
            {/* <ul> 
                      <li className='list'>S.No</li>
                       <li className='list'>Name</li>
                       <li className='list'>Price</li>
                       <li className='list'>Category</li>
                       <li className='list'>Company</li>
                       <li className='list'>Operations</li>
                       </ul> */}
                        
                        <table className='table'>
                        <thead>
                            <th className='table-head'>S.No</th>
                            <th className="table-head">Name</th>
                            <th className="table-head">Price</th>
                            <th className="table-head">Category</th>
                            <th className="table-head"> Company</th> 
                            <th className='table-head'>  Operations
                            </th>
                        </thead>
                    </table>
           
            {
                products.length > 0 ? products.map((item, index) => {
                    return (
                        //   <ul key={item._id}> 
                        //   <li className='list'>{index+1}</li>
                        //    <li className='list'>{item.name}</li>
                        //    <li className='list'>$ {item.price}</li>
                        //    <li className='list'>{item.category}</li>
                        // <li className='list'>{item.company}</li>
                        // <li className='list'><button onClick={()=>deleteProducts(item._id)}>delete</button></li>
                        // <li className='list'>
                        // <Link className='anch-link' to={`/updateproducts/${item._id}`}>Update</Link>
                        // </li>
                        //    </ul>
                       
                        <table className='table' key={item._id}>
                        <tbody className='table-head'>
                            <tr>
                                <td className='table-head'>{index + 1}</td>
                                <td className='table-head'>{item.name}</td>
                                <td className='table-head'>$ {item.price}</td>
                                <td className='table-head'>{item.category}</td>
                                <td className='table-head'>{item.company}</td>
                                <td className='table-head'><button onClick={() => deleteProducts(item._id)}>delete</button>  </td>
                                   <td className='table-head'><Link className='anch-link' to={`/updateproducts/${item._id}`}>Update</Link></td> 
                              
                            </tr>
                            </tbody>
                        </table>
                        
                    )
                }) :
                    <h1>No result Found</h1>
            }
        </div>
    )
}
{/*  
{
products.length>0 ?  products.map((item,index)=>{
return(
  
) */}