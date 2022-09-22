import React from "react";
import './profile.css'
import { TextareaAutosize } from "@mui/material";
import TextField from '@mui/material/TextField';
import { Header } from "../Header/header";




export const Profile = () => {

    return (
        <div className="Profilepage">
        <Header/>
            <div className="ProfileHome">
                <div className="ProfileHeader">Home/ Profile</div>
            </div>
            <div className="heading">Personal Details</div>
            <div className="PersonalDetails">
                    <TextField  label="Full Name" 
                                variant="outlined" 
                                size="small" 
                                className="Profile"/>
                                </div>
            <div className="PersonalDetails">
                    <TextField  label="Email" 
                                variant="outlined" 
                                size="small" 
                                className="Profile"/>
                     </div>
            <div className="PersonalDetails">
                    <TextField label="Password" 
                               variant="outlined" 
                               size="small" 
                               className="Profile"/>
                               </div>
            <div className="PersonalDetails">
                    <TextField label="Mobile Number" 
                               variant="outlined" 
                               size="small" 
                               className="Profile"/>                  
            </div>      
            <div className="TextContent">
            <div className="Profilecustome1">Address Details</div>
                <div className="Profilecustome2">Add New Address</div>       
            </div>                  
            <div className="ProfileInput">
                <div className="Work">1.Work</div>
                <div className="ProfileAddress">
                    <TextField  id="outlined-basic" 
                                label="Address" 
                                variant="outlined"
                                className="address" />
                </div>
                <div className="ProfileCity">
                    <TextField  id="outlined-basic" 
                                label="city/town" 
                                variant="outlined" 
                                size="small" 
                                className="city"/>
                    <TextField  id="outlined-basic" 
                                label="State" 
                                variant="outlined" 
                                size="small" 
                                className="city"/>
                </div>
                <div className="Profiletype">Type</div>
                <div className="Input">
                    <div className="input1">
                        <input type="checkbox" id="Home" />
                        <label for="Home">Home</label><br />
                    </div>
                    <div className="input1">
                        <input type="checkbox" id="Work" />
                        <label for="Work">Work</label><br />
                    </div>
                    <div className="input1">
                        <input type="checkbox" id="Others" />
                        <label for="Others">Others</label><br />
                    </div>
                </div>
                </div>
                </div>
        )
    
    }