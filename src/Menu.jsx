import React from 'react'
import {Link} from "react-router-dom";

function Menu() {
  return (
    <div> 
      <Link style={{
        display:'block'
      }} to="/">Home</Link>
      <Link to="about">About</Link>
      <Link to="contact">Contact</Link>
      <Link to="dsfijdsklgkldsgj">Error</Link>

    </div>
  )
}

export default Menu;
