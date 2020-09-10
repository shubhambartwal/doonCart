import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css';
import Logo from './pictures/logo.jpeg';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {useStateValue} from './StateProvider';
import { auth } from './firebase';
function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  }
 return (
<nav className="header">
           <Link to ="/">
           < img className="header__logo"
             src = {Logo} alt=" " / >
        
           </Link>
           <div className="header__search">
           <input type="text" className="header__searchInput" />
           <SearchIcon  className="header__searchIcon" />
           </div>
           <div className="header__nav">
             <Link to ={!user && "/login"} className="header__link">
             <div  onClick={ handleAuthenticaton }  className="header__option">
             <span className="header__option1line" >Hello {user?.email} </span>
             <span className="header__option2line">{user? 'Sign Out':'Sign In'}</span>
               </div>
             </Link>
           
             <div className="header__option">
             <span className="header__option1line">Returns  </span>
             <span className="header__option2line">&order</span>
               </div>
             
             <Link to="/checkout" className="header__link">
               <div className="header__optionBasket">
                 <ShoppingBasketIcon />
    <span className="header__option2line header__basketcount">{basket?.length}</span>
               </div>
             </Link>
           </div>
           </nav>

    );
}

export default Header;
