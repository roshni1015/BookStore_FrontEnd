import logo from './logo.svg';
import './App.css';
//import { Profile } from './Components/Profile/profile';
import Router from './router/router';
//import { Cart } from './Cart/cart';
//import { Mycart } from './MyCart/mycart';
//import { HomePage } from './Components/Home/home';
//import { SelectedBook } from './Components/BookStore/bookstore';
//import { Header } from './Components/Header/header';
//import { GetBooks } from './Components/BookStore/bookstore';
//import { SignUp } from './Components/SignUp/SignUp';
//import { LogIn } from './Components/LogIn/Login';
//import { User } from './Page/Main/main';

function App() {
  return (
    <div className="App">
      {/* <SignUp/> 
      <LogIn/> */}
      {/* <User/> */}
      {/* <SelectedBook/> */}
      {/* <Header/> */}
      {/* <GetBooks/> */}
      {/* <HomePage/> */}
      <Router/>
      {/* <Cart/> */}
      {/* <Mycart/> */}
      {/* <Profile/> */}
     

    </div>
  );
}

export default App;
