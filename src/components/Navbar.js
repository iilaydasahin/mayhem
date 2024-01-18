import React, { useState } from 'react';
import Logo from '../assets/mayhemLogo.png';
import { Link } from "react-router-dom";
import ReorderIcon from '@mui/icons-material/Reorder';
import '../styles/Navbar.css';

function Navbar({ handleSubscribe }) { // handleSubscribe prop'u ekle

  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={Logo} alt=""/>
        <div className="hiddenLinks">
          <Link to="/"> Home </Link>
          <Link to="/features"> Features </Link>
          <Link to="/story"> Story </Link>
          <Link to="/contact"> Contact </Link>
          <Link to="/subscribe"> Subscribe </Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/"> Home </Link>
        <Link to="/features"> Features </Link>
        <Link to="/story"> Story </Link>
        <Link to="/contact"> Contact </Link>
        <Link to="/subscribe"> Subscribe </Link>
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  )
}

export default Navbar;
