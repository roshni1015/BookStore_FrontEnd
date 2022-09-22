import React from "react";
import './main.css' 
import { SignUp } from "../../Components/SignUp/SignUp";
import { LogIn } from "../../Components/LogIn/Login";


export const User = () =>{

    const[showLogin,setShowLogin] = React.useState(true)
    
    const showSignupPage = () =>{
        setShowLogin(false)
    }

    const showLoginPage = () =>{
        setShowLogin(true)
    }
    return(<div>
       <div className="main">
            <div className="image">
                <img src="component.png" className="image1"></img>
                <div className="text">ONLINE BOOK SHOPPING</div>
            </div>
            <div className="condition">
                {
                    showLogin ? <LogIn showSignupPage = {showSignupPage}/> : <SignUp setShowLogin = {showLoginPage}/>
                }
            </div>
       </div>
    </div>)
}