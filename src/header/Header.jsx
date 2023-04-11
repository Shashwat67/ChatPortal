import React from "react";
import './Header.css';
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import ChatWithUs from "../admincomponents/Chat/ChatWithUs";



const Header = () => {

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);}

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink to="/" className="nav-logo">
            {/* <img src="https://www.mastercard.us/content/dam/public/mastercardcom/mea/za/logos/mc-logo-52.svg" alt="" /> */}
            {/* <i className="fas fa-code"></i> */}
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>

            <li className="nav-item">
              <NavLink
                to="/"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            
            <li className="nav-item">
              <NavLink

                to="/about"
                className="nav-links"
                onClick={handleClick}
              >
                Menu
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink

                to="/blog"
                className="nav-links"
                onClick={handleClick}
              >
                AboutUs
              </NavLink>
            </li>
            
            <li className="nav-item">
             <ChatWithUs/>
            </li>

          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>


  );

}
export default Header;
