import React from "react";
import "./Navbar.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = props =>
   <nav className="navbar navbar-default navbar-fixed-top">
      <ul>
        <li>Clicky Game</li>
        <li>Click a Color to begin!</li>
        <li>Score: {props.counter} | Top Score: {props.topScore} </li>  
      </ul>    
    </nav>

export default Navbar;