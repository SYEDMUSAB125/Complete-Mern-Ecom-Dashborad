import  React from "react";
import {Link,useNavigate} from "react-router-dom"
import image from "../assets/logo.jpg";



const Header = ()=>{
    const navigate = useNavigate()
    const auth = localStorage.getItem("user");
    const logout=()=>{
        localStorage.clear();
        // console.log("clear");
 navigate('/Signup')
    }
    return(
        <div >
            <img src={image} className="logo" alt="logo" />
             {auth?<ul className="navbar">
            <li className="nav-items"><Link className="item " to={"/product"}>Products </Link></li>
                <li className="nav-items"><Link className="item " to={"/AddProducts"}>add Product </Link></li>
                <li className="nav-items"><Link className="item "to={"/UpdateProducts"}> update Product </Link></li>
                <li className="nav-items"><Link className="item "to={"/Profile"}>Profile </Link></li>
                <li className="nav-items"><Link className="item " onClick={logout} to={"/Signup"}>logout </Link></li>
                </ul>
                : 
                <ul className="otnavbar"> <li className="nav-items1"><Link className="ot-item"to={"/Signup"}>Sign up </Link> </li>
                <li className="nav-items1"><Link  className="ot-item" to={"/login"}>Login</Link></li>
                </ul>
            }           
            
        
        </div>
    )
}
export default Header;