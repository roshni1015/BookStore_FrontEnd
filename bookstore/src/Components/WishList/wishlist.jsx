import React from "react";
import './wishlist.css'
import DeleteForeverIcon from '@mui/icons-material/DeleteForeverOutlined';
import bookImage from '../../assets/Image1.png'
import { getAllWishList, RemoveFromWishList } from "../../services/dataservice";
import { Header } from "../Header/header";
import Divider from '@mui/material/Divider'

export const WishList = (props) => {

    const[wishlistArray,setWishListArray] = React.useState([])
    const[searchBook,setSearchBook] = React.useState('')

    const GetWishList = () =>{
        getAllWishList().then((res) =>{
            console.log(res);
            setWishListArray(res.data.data.books)
        }).catch((error) =>{
            console.log(error);
        })
    }

    React.useEffect(() =>{
        GetWishList()
    },[])

    const removeBookFromWishList = (event) =>{
        console.log(event.target.id);
        RemoveFromWishList(event.target.id).then((res) =>{
            console.log(res);
        }).catch((error) =>{
            console.log(error);
        })
    }
    const showSearchedBooks = (string) =>{
        setSearchBook(string)
    }

    return (<div className="wishlistwholepage">
        <Header showSearchedBooks = {showSearchedBooks}/>
    <div className="wishListPage">
        <div className="wishListHeader">Home/ My Wishlist</div>
        <div className="wishListContent">
            <div className="contentHeader">My Wishlist ({wishlistArray.length})</div>
            {
                wishlistArray.length>0 &&
                wishlistArray.map((book) => <div className="Wcartsection1">
                    <div className="Wbooksection"><img style={{width:'50%'}} src={bookImage} id="bookImg" /></div>
                    <div className="WbookContent">
                        <div className="WbookContent1">
                            <div className="WbookHeading">{book.bookName}</div>
                            <div className="WbookAuthor">by {book.author}</div>
                            <div className="WbookPrice">Rs.{book.price }</div>
                            <Divider style={{color: 'black',width:'64.9vw',marginTop:'10%',marginLeft:'-67%'}}/>                    
                        </div>                      
                        <div className="Wremove">
                        <DeleteForeverIcon id = {book.productId} onClick={removeBookFromWishList}/>
                        </div> 
                    </div>
                </div>)
            }
        </div>
    </div>
    </div>)
}