import React from "react";
import './header.css'
import { InputBase } from "@mui/material";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined'; 
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useNavigate } from "react-router-dom";
import { getAllWishList } from "../../services/dataservice";
import { UserLogin } from "../../services/userservice";

const style = {
    position: 'absolute',
    top: '24%',
    left: '45%',
    transform: 'translate(70%, -50%)',
    width: 100,
    height:90,
    bgcolor: 'white',
    border: 'blue',
    boxShadow: 20,
    p: 7,
    
  }; 
export const Header = (props) => {

    const [open, setOpen] = React.useState(false);
    const [logout, setlogout] = React.useState(false)


    const handleOpen = (obj) => {
        setlogout({ ...obj, FullName: obj.FullName, EmailID: obj.EmailID });
        setOpen(true)
    };
    const handleClose = () => setOpen(false);

    const navigate = useNavigate();

    const searchBooks = (event) => {
        props.showSearchedBooks(event.target.value);
    }
    
    const showloginPage = () =>{
        localStorage.removeItem('token');
        setlogout(false);
        navigate('/')
        
    }
  

    const showwishList = () =>{
        getAllWishList().then((res) =>{
            console.log(res);
            navigate('/Wishlist')
        }).catch((error) =>{
            console.log(error);
        })
    }
    
   
    return (<div className="header">
        <div className="headerContent">
            <div className="halfHeaderContent">
                <img style= {{width:"3.5%",height:"1%"}}src="book.png" className="bookimage" />
                <div  onClick={() =>navigate('/Dashboard')} className="bookstore">Bookstore</div>
                <div className="headerSearch">
                    <InputBase onChange={searchBooks} className="Search" placeholder="Search..." type="text" />
                </div>
            </div>
            <div className="headercontent2">
                <PermIdentityIcon onClick={handleOpen} className="profile"/>
                <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-name"
                        aria-describedby="modal-modal-email"
                    >
                <Box sx={style}>
                    <div style={{marginTop: '-40%',marginLeft: '-30%', padding: '4%', fontSize:'bold 20px',fontWeight:'500'}}id="modal-modal-name" variant="h6" component="h2">Hello Roshni,</div> 
                    <PermIdentityIcon style={{marginLeft:'-30%',marginTop:'5%', color:'gray'}} />
                    <div style={{marginLeft: '10%',display:'inline', color:'gray'}}  onClick={() =>navigate('/Profile')} id="modal-modal-email">Profile</div>
                    <div style={{marginTop: '7%',marginBottom:'7%',marginLeft: '-30%', color:'gray'}} id="modal-modal-email" onClick={showwishList} > <FavoriteOutlinedIcon style={{marginLeft:'0%',paddingRight:'4%',paddingTop:'0%'}}/>Wishlist</div>
                    <div className='modal_LogoutButton'>
                        <button style={{marginLeft:'-30%',padding:'5%', marginTop:'17%',width:'150%', color:'red', fontSize:'15px', fontWeight:'550'}} className="buttonclose"  onClick={showloginPage}>Log out</button>
              </div>
                </Box>
                </Modal>
            </div>
            <div className="headercontent2">
                <ShoppingCartOutlinedIcon onClick={() =>navigate('/MyCart')} className="accountcart"/>
            </div>
            </div>
    </div>)
}