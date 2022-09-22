import React from "react";
import './customer.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { AddCustomerDetails } from "../../services/dataservice";
const NameRegex = /^[A-Z][a-z]{2,}\s[A-Z][a-z]{2,}$/;
const MobileRegex = /^([0|\+[0-9]{1,5})?([7-9][0-9]{9})$/;
const AddressRegex = /^[#.0-9a-zA-Z\s,-]+$/;
const CityRegex = /^[A-Z][a-z]{2,}$/;
const StateRegex = /^[A-Z][a-z]{2,}$/;




export const Customer = (props) => {

    const[regexObj,setRegexObj] = React.useState({NameError:false,NameHelperText:'',MobileError:false,MobileHelperText:'',AddressError:false,AddressHelperText:'',CityError:false,CityHelperText:'',StateError:false,StateHelperText:''})


    const[customerDetails,setCustomerDetails] = React.useState({Name:'',PhoneNumber:'',Address:'',City:'',State:'',Type:''})

    const takeFullName = (event) =>{
        setCustomerDetails({...customerDetails,Name:event.target.value})
    }

    const takeMobile = (event) =>{
        setCustomerDetails({...customerDetails,PhoneNumber:event.target.value})
    }

    const takeAddress = (event) =>{
        setCustomerDetails({...customerDetails,Address:event.target.value})
    }

    const takeCity = (event) =>{
        setCustomerDetails({...customerDetails,City:event.target.value})
    }

    const takeState = (event) =>{
        setCustomerDetails({...customerDetails,State:event.target.value})
    }

    const takeType = (event) =>{
        setCustomerDetails({...customerDetails,Type:event.target.value})
    }

    function onContinue(){
        let fullNameTest = NameRegex.test(customerDetails.Name)
        let phoneNumberTest = MobileRegex.test(customerDetails.PhoneNumber)
        let addressTest = AddressRegex.test(customerDetails.Address)
        let cityTest = CityRegex.test(customerDetails.City)
        let stateTest = StateRegex.test(customerDetails.State)
        if(fullNameTest == true){
            setRegexObj(prevState =>({...prevState,NameError: false,NameHelperText:''}))
        }
        else if(fullNameTest == false){
            setRegexObj(prevState =>({...prevState,NameError: true,NameHelperText:'Enter Valid Name'}))
        }
        if (phoneNumberTest == true) {
            setRegexObj(prevState => ({ ...prevState, MobileError: false, MobileHelperText: '' }))
        }
        else if (phoneNumberTest == false) {
            setRegexObj(prevState => ({ ...prevState, MobileError: true, MobileHelperText: 'Enter valid MobileNumber' }))
        }

        if (addressTest == true) {
            setRegexObj(prevState => ({ ...prevState, AddressError: false, AddressHelperText: '' }))
        }
        else if(addressTest == false) {
            setRegexObj(prevState => ({ ...prevState, AddressError: true, AddressHelperText: 'Enter Valid Address' }))
        }
        if(cityTest == true){
            setRegexObj(prevState =>({...prevState,CityError:false,CityHelperText:''}))
        }
        else if(cityTest == false){
            setRegexObj(prevState =>({...prevState,CityError:true,CityHelperText:'Enter Valid City Name'}))
        }
        if(stateTest == true){
            setRegexObj(prevState =>({...prevState,StateError:false,StateHelperText:''}))
        }
        else if(stateTest == false){
            setRegexObj(prevState =>({...prevState,StateError:true,StateHelperText:'Enter Valid State Name'}))
        }
        if (fullNameTest === true && phoneNumberTest === true  && addressTest === true && cityTest === true && stateTest === true) {
            AddCustomerDetails().then((res) =>{
                console.log(res);
                props.showOrderSummary()
            }).catch((error) =>{
                console.log(error);
            })
        }
    }

    
    
    return (<div className="customer-whole-page">
        <div className="customercontent">
            <div className="customerHeader">
                <div className="customerHeader1">Customer Details</div>
                <div className="customerHeader2">Add New Address</div>
            </div>
            <div className="customerInput">
                <div className="nameInput">
                    <TextField onChange={takeFullName} style={{ width: '45%' }} 
                               error={regexObj.NameError} 
                               helperText={regexObj.NameHelperText} 
                               id="outlined-basic" 
                               label="Full Name" 
                               variant="outlined" 
                               size="small" />
                    <TextField  onChange={takeMobile} style={{ width: '45%' }}
                                error={regexObj.MobileError} 
                                helperText={regexObj.MobileHelperText}  
                                id="outlined-basic" 
                                label="Mobile Number" 
                                variant="outlined" 
                                size="small" />
                </div>
                <div className="addressInput">
                    <TextField  onChange={takeAddress} style={{ width: '94%' }}
                                error={regexObj.AddressError} 
                                helperText={regexObj.AddressHelperText}  
                                id="outlined-basic" 
                                label="Address" 
                                variant="outlined" />
                </div>
                <div className="cityInput">
                    <TextField  onChange={takeCity} style={{ width: '45%' }}
                                error={regexObj.CityError} 
                                helperText={regexObj.CityHelperText}  
                                id="outlined-basic" 
                                label="city/town" 
                                variant="outlined" 
                                size="small" />
                    <TextField  onChange={takeState} style={{ width: '45%' }}
                                error={regexObj.StateError} 
                                helperText={regexObj.StateHelperText}  
                                id="outlined-basic" 
                                label="State" 
                                variant="outlined" 
                                size="small" />
                </div>
                <div className="type">Type</div>
                <div onChange={takeType} className="labels">
                    <div className="label1">
                        <input type="checkbox" id="Home" />
                        <label for="Home">Home</label><br />
                    </div>
                    <div className="label1">
                        <input type="checkbox" id="Work" />
                        <label for="Work">Work</label><br />
                    </div>
                    <div className="label1">
                        <input type="checkbox" id="Others" />
                        <label for="Others">Others</label><br />
                    </div>
                </div>
            </div>
            <div  className="continue">
                {
                    props.sectThree? <div></div>:
                    <Button onClick={ onContinue} size="small" style={{width:'20%'}} variant="contained">Continue</Button>
                }
            </div>
        </div>
    </div>)
}