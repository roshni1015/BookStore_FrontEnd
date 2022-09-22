import React from "react";
import './cart.css';
import PinDropIcon from '@mui/icons-material/PinDrop';
import bookImage from '../../assets/Image1.png'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import Button from '@mui/material/Button';
import { getCartItem, RemoveBookFromCart, UpdateCart } from "../../services/dataservice";

export const Cart = (props) => {

    const [cartArr, setCartArr] = React.useState([])
    const [bookId, setBookId] = React.useState([])
    const [bookCount, setBookCount] = React.useState([])




    const showCustomer = () => {
        props.showAddresDetails()
    }

    const getAllCartItem = () => {
        getCartItem().then((res) => {
            console.log(res);
            setCartArr(res.data.data.books)
        }).catch((error) => {
            console.log(error);
        })
    }

    const getAllCartBook = (data) => {
        getCartItem().then((res) => {
            let filterArr = res.data.data.books.filter((book) => {
                if(data == book.productId){
                   setBookCount(book.quantity) 
                   setBookId(props.book._id)
                    return data;
                }
                else {
                    setBookCount(0)
                    return data;
                }


                
            })
            console.log(res);
        }).catch((error) => {
            console.log(error);
        })
    }

    React.useEffect(() => {
        getAllCartItem()
    }, [])



    const MinusQuantity = (event) =>{
        getAllCartBook(event.target.id)
        let data = {quantity: bookCount-1}
        UpdateCart(data,event.target.id).then((res) =>{
            console.log(res);
        }).catch((error) =>{
            console.log(error);
        })
    }

    const PlusQuantity = (event) =>{
        getAllCartBook(event.target.id)
        let data = {quantity: bookCount+1}
        UpdateCart(data,event.target.id).then((res) =>{
            console.log(res);
        }).catch((error) =>{
            console.log(error);
        })
    }
   

    const removeBook = (event) =>{
        console.log(event.target.id);
        RemoveBookFromCart(event.target.id).then((res) =>{
            console.log(res);
        }).catch((error) =>{
            console.log(error);
        })
    }



    return (<div className="cartdetails">
        <div className="cartdetails1">
            <div className="cartdetailsHeader">
                <div className="cartdetailsHeader1">My cart({cartArr.length})</div>
                <div className="cartdetailsHeader2"><PinDropIcon style={{ color: '#A03037' }} /><span>Use current location</span></div>
            </div>
            {
                cartArr.map((book) => <div className="cartsection1">
                    <div className="booksection"><img src={bookImage} id="bookImg" /></div>
                    <div className="bookContent">
                        <div className="bookContent1">
                            <div className="bookHeading">{book.bookName}</div>
                            <div className="bookAuthor">by {book.author}</div>
                            <div className="bookPrice">Rs.{book.price }</div>
                        </div>
                        <div className="bookIncrement">
                            <div className="bookIncrement1">
                                <RemoveCircleOutlineIcon id ={book.productId} onClick={MinusQuantity} />
                                <div className="quantityBox">{book.quantity}</div>
                                <AddCircleOutlineOutlinedIcon id ={book.productId}  onClick={PlusQuantity}/>
                            </div>
                            <div className="remove">
                                <button id ={book.productId} onClick={removeBook} >Remove</button>
                                </div>
                        </div>
                    </div>
                </div>)
            }

            <div className="PlaceOrder">
                {
                    props.sectTwo ? <div></div> :
                        <Button onClick={showCustomer} size="small" style={{ width: '20%' }} variant="contained">Place Order</Button>
                }
            </div>
        </div>
    </div>)
}