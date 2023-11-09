import React from 'react';
import {Routes,Route,useParams} from "react-router-dom"
import { Products } from './Products';
import { AddProducts } from './AddProducts';
import { UpdateProducts } from './UpdateProducts';
import { Profile } from './Profile';
import Header from './Header';
import SignUp from './SignUp';
import PrivateComponent from './PrivateComponent';
import LoginPage from './LoginPage';


export function AppRoute(){
    // const params = useParams();
    return(
        <div>
           <Header/>
            <Routes>
         <Route element={<PrivateComponent/>}>
                <Route  path='/product' element={<Products/>}/>
                <Route path='/addproducts' element={<AddProducts/>}/>
                <Route path='/updateproducts/:id' element={<UpdateProducts/>}/>
                <Route path='/profile' element={<Profile/>}/>
                </Route>
                <Route path='/signup' element={<SignUp/>}/>
                <Route path="/login" element={<LoginPage/>}/>
                </Routes>
        </div>
    )
}