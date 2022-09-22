import React from "react";
import './ordersummary.css'
import bookImage from '../../assets/Image1.png'
import Button from '@mui/material/Button';
import { getCartItem, OrderPlaced } from "../../services/dataservice";
import { useNavigate } from "react-router-dom";


export const OrderSummary = (props) => {

    const [orderSum, setOrderSum] = React.useState([])
    const navigate = useNavigate();

   

    const getOrderSummary = () => {
        getCartItem().then((res) => {
            console.log(res);
            setOrderSum(res.data.data.books)
        }).catch((error) => {
            console.log(error);
        })
    }

    React.useEffect(() => {
        getOrderSummary();
    }, [])

   
    const PlaceOrder = () =>{
        OrderPlaced().then((res) =>{
            console.log(res);
            navigate('/MyCart/orderplaced')
        }).catch((error) =>{
            console.log(error);
        })
    }
    

    return (<div className="orderPage">
        <div className="orderdetails1">
            <div className="orderdetailsHeader">
                <div className="orderdetailsHeader1">Order Summary</div>
            </div>
            {
                orderSum.map((book)=><div className="ordersection1">
                <div className="ordersection"><img src={bookImage} style={{ width: '70%', height: '80%' }} /></div>
                <div className="orderContent">
                    <div className="orderContent1">
                        <div className="orderHeading">{book.bookName}</div>
                        <div className="orderAuthor">by {book.author}</div>
                        <div className="orderPrice">Rs.{book.price}</div>
                    </div>
                </div>
            </div>)
            }
            
                 <div className="checkout">
                    {
                        props.sectThree? <div></div>:
                        <Button onClick={PlaceOrder} size="small" style={{ width: '20%' }} variant="contained">Checkout</Button>

                    }
                
                 </div>

            
             
        </div>
    </div>)
}