import React from "react";
import { Link } from "react-router-dom";
import './Header_Bottem.css';
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

function Header_Bottem() {
  return (
    <nav className="header_bottem">
      <Link to="/login">
        <img 
        className="icon"
        src="https://fontawesome.com/icons/link"
        >
        </img>
        <h1 className="header__delivertopak">Deliver To Pakistan</h1>
      </Link>
      {/* logo in the left */}
      <h1 className="Text">Header Bottem</h1>
    </nav>
  );
}

export default Header_Bottem;
