import React from "react";
import './Login.css'
import { TextField, Button } from '@mui/material';
import Divider from '@mui/material/Divider'
import { UserLogin } from "../../services/userservice";

const EmailRegex = /^[a-zA-Z]+[a-zA-Z0-9]*[- . + _]?[a-zA-Z0-9]+[@]{1}[a-z0-9]+[.]{1}[a-z]+[.]?[a-z]+$/
const PasswordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/


export const LogIn = (props) =>{

    const[regexLoginObj,setRegexLoginObj] = React.useState({EmailError:false,EmailHelperText:'',PasswordError:false,PasswordHelperText:''})
    const[signInObj,setSignInObj] = React.useState({EmailID:'',Password:''})

    const switchForm = () =>{
        props.showSignupPage()
    }

    const submitEmail = (event) =>{
        setSignInObj({...signInObj,EmailID:event.target.value})
    }

    const submitPassword = (event) =>{
        setSignInObj({...signInObj,Password:event.target.value})
    }

    const Submit = () =>{
        let emailTest = EmailRegex.test(signInObj.EmailID)
        let passwordTest = PasswordRegex.test(signInObj.Password)

        if(emailTest == true){
            setRegexLoginObj(prevState =>({...prevState,EmailError:false,EmailHelperText:''}))
        }
        else if(emailTest == false){
            setRegexLoginObj(prevState =>({...prevState,EmailError:true,EmailHelperText:'Enter Correct EmailID'}))
        }
        if(passwordTest == true){
            setRegexLoginObj(prevState =>({...prevState,PasswordError:false,PasswordHelperText:''}))
        }
        else if(passwordTest == false){
            setRegexLoginObj(prevState =>({...prevState,PasswordError:true,PasswordHelperText:'Enter Correct Password'}))
        }
        if(emailTest == true){
            console.log(signInObj);
            UserLogin(signInObj).then((res) =>{
                console.log(res);
                localStorage.setItem('token',res.data.data)
            }).catch((error) =>{
                console.log(error)
            })
        }  
   
    }

    return(
        <div className="In">
        <div className="In1">
            <div className="InH">
                <div  className='text-Container'>login</div>
                <div style={{ color: 'gray' }} className='text-Container' onClick={switchForm} >signup</div>
            </div>
            <div className="Content">
                <TextField onChange={submitEmail} 
                           error ={regexLoginObj.EmailError} 
                           helperText={regexLoginObj.EmailHelperText} sx={{width:'100%'}} label="Email" 
                           variant="outlined" 
                           className="content1" 
                           size="small"/>

                <TextField onChange={submitPassword} 
                           error ={regexLoginObj.PasswordError} 
                           helperText={regexLoginObj.PasswordHelperText} sx={{width:'100%'}} label="Password" 
                           variant="outlined" 
                           className="content1" 
                           size="small"/>

                <Button onClick={Submit} sx={{width:'100%'}} variant='contained' style={{backgroundColor: "#A03037", opacity: 1}} size="small">Login</Button>
                <Divider style={{width:'100%'}} ><span className='or-content'>OR</span></Divider>
                <div className='login-container'>
                    <Button variant='contained' style={{ width: '50%', backgroundColor: "#4266B2", opacity: 1}} size="small"><span className='Fletter'>Facebook</span></Button>
                    <Button variant='contained' style={{ width: '50%', backgroundColor: "#F5F5F5", opacity: 1}} size="small"><span className='Gletter'>Google</span></Button>
                </div>
            </div>
        </div>
    </div> 
    )
}
