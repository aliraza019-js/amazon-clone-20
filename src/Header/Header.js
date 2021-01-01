import React from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import reducer from "../States/reducer";
import {useStateValue} from "../States/StateProvider";
import { auth } from "../Firebase/Firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  }


  return (
    <nav className="header">
      {/* logo in the left */}
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </Link>
      {/* all text */}
      {/* searchbar in center */}
      <h1 className="header__textall">All</h1>
      <input type="search" className="header__searchInput" />
      <SearchIcon className="header__searchIcon" />
      {/* 3 coloumns on right */}
      <div className="header__nav">
        {/* 1st link */}
        <Link to='/login' className="header__link">
          <div onClick={handleAuthenticaton} className="header__option">
            <span className="header__optionLineOne">Hello {!user ? 'Guest' : user.email}</span>
            <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
          </div>
        </Link>
        {/* 2nd link */}
        <Link to={!user && '/login'} className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Return</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>
        {/* 3rd link */}
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
        </Link>
        {/* 4th link */}
        <Link to="/checkout">
          <div className="header__optionBasket">
            {/* shoping basket */}
            <ShoppingBasketIcon />
            {/* no of items */}
            <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
          </div>
        </Link>
      </div>
      {/* Basket icons */}
      <div className="bottem__header">
          
      </div>
    </nav>
  );
}

export default Header;
