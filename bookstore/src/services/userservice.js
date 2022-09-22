import axios from "axios";

export const UserSignUp = (Obj) =>{
    console.log(Obj);
    let response = axios.post('http://localhost:4000/api/v1/users',Obj);
    return response;
}

export const UserLogin = (Obj) =>{
    console.log(Obj);
    let response = axios.post('http://localhost:4000/api/v1/users/login',Obj);
    return response;
}