import React from "react";
import { SelectedBook } from "../../Components/BookStore/bookstore"; 
import { Header} from "../../Components/Header/header"
import { HomePage } from "../../Components/Home/home";
import './dashboard.css'



export const DashBoard = () => {

    const [Book, setBook] = React.useState({})
    const [view, setView] = React.useState(false)
    const[searchBook,setSearchBook] = React.useState('')
    const [sortType, setSortType] = React.useState([]);


    const openBook = (book) => {
        console.log(book);
        setBook(book)
        setView(true);
    }
    
    const showSortedBooks = (number) =>{
        setSortType(number)
    }
 
    const showSearchedBooks = (string) =>{
        setSearchBook(string)
    }
 

    return (<div className="wholeDashboardPage">
        <Header showSearchedBooks = {showSearchedBooks} />
        <div className="pageHome">
            { view? <SelectedBook book ={Book}/>:<HomePage showSortedBooks ={showSortedBooks}  searchBook ={searchBook}  openBook={openBook}/>}
           
        </div>
        
    </div>)
}