import axios from 'axios'

let configObj= {
    headers: {
      Authorization:  `Bearer ${localStorage.getItem('token')}`
    },
  }

export const GetAllBooks = () =>{
    console.log(configObj);
    let response = axios.get('http://localhost:4000/api/v1/books',configObj)
    return response;
}

export const addCartItem = (_id) =>{
  console.log(configObj);
  let response = axios.post(`http://localhost:4000/api/v1/carts/${_id}`,null,configObj);
  return response;
}
export const getCartItem = () =>{
  console.log(configObj);
  let response = axios.get(`http://localhost:4000/api/v1/carts`,configObj);
  return response;
}

export const UpdateCart = (obj,_id) =>{
  console.log(configObj);
  let response = axios.put(`http://localhost:4000/api/v1/carts/${_id}/update`,obj,configObj);
  return response;
}

export const RemoveBookFromCart = (_id) =>{
  console.log(configObj);
  console.log(_id);
  let response = axios.put(`http://localhost:4000/api/v1/carts/${_id}/remove`,null,configObj);
  return response;
}

export const AddCustomerDetails = (Obj) =>{
  console.log(configObj);
  let response = axios.post(`http://localhost:4000/api/v1/customerDetails`,Obj,configObj);
  return response;
}

export const OrderPlaced = () =>{
  console.log(configObj);
  let response = axios.put(`http://localhost:4000/api/v1/carts/purchased/true`,null,configObj);
  return response;
}

export const AddWishList = (_id) =>{
  console.log(configObj);
  let response = axios.post(`http://localhost:4000/api/v1/wishLists/${_id}`,null,configObj);
  return response;
}

export const getAllWishList = () =>{
  console.log(configObj);
  let response = axios.get(`http://localhost:4000/api/v1/wishLists`,configObj);
  return response;
}
export const RemoveFromWishList = (_id) =>{
  console.log(configObj);
  console.log(_id);
  let response = axios.put(`http://localhost:4000/api/v1/wishLists/${_id}`,null,configObj);
  return response;
}
