import React from "react";
import { GetBooks } from "../Book/book";
import './home.css'
import { GetAllBooks, getBooks } from "../../services/dataservice";
import Pagination from '@mui/material/Pagination';



export const HomePage = (props) => {

    const [booksArray,setBooksArray] = React.useState([])
    const[page,setPage] = React.useState(1)
    const[postPage,setPostPage] = React.useState(8)
    const last = page * postPage;
    const first = last - postPage;

    const sortOptions = ["price"]

    const GetBook =() =>{
        GetAllBooks().then((res) =>{
            console.log(res);
            setBooksArray(res.data.data)
        }).catch((error) =>{
            console.log(error)
        })
    }

    

    React.useEffect(() =>{
        GetBook()
    },[])

    const viewPage = (event,currentvalue) =>{
        console.log(currentvalue)
        setPage(currentvalue);
    }

    
    return (
        <div className="totalPage">
            <div className="home-header">
                <div className="Books">Books ({booksArray.length} items)</div>
                <button className="reference" >
                    <select style={{width: '106%', height:'28px',marginTop:'-1%',marginLeft:"-3%"}}>
                        <option>Sort by relevance</option>
                        {sortOptions.map((book)=>(
                             <option key={book.bookprice}>Price(Rs.500-1000)</option>
                            
                        ))}
                    </select>
                </button>
            </div>
            <div className="getBooksPage">
                {
                    booksArray.slice(first,last).filter((book) =>book.bookName.toLowerCase().includes(props.searchBook.toLowerCase())).map(book =><GetBooks book ={book} openBook ={props.openBook}/>)
                }
            </div>
            <div className="pagination">
                <Pagination onChange={viewPage} page = {page}  count={18} variant="outlined" color="primary"/>
                </div> 
            <div className="footerContent">
            <footer className="footer">Copyright © 2020, Bookstore Private Limited. All Rights Reserved</footer>

            </div>   
        </div>
        
    )
}