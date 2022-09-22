import React from "react";
import { Route, BrowserRouter,  Routes } from "react-router-dom";
import { DashBoard } from "../Page/Dashboard/dashboard";
import { Mycart } from "../Components/MyCart/mycart";
import { User } from "../Page/Main/main";
import { PlaceOrder } from "../Components/OrderPlaced/orderplaced";
import { WishList } from "../Components/WishList/wishlist";
import { Profile } from "../Components/Profile/profile";


function Router() {
    return (
        <div>
            <BrowserRouter>
            <Routes>
                <Route path='/' element = {<User/>}/>
                <Route path='/Dashboard' element = {<DashBoard/>}/>
                <Route path='/MyCart' element = {<Mycart/>}/>
                <Route path='MyCart/Orderplaced' element = {<PlaceOrder/>}/>
                <Route path='/Wishlist' element = {<WishList/>}/>
                <Route path='/Profile' element = {<Profile/>}/>
            </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Router;