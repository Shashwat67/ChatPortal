import React from "react";
import './AdminNavbar.css';
import { useState } from "react";
import { Link ,useNavigate} from "react-router-dom" ;
import { Button, CardActionArea, CardActions } from '@mui/material';

const AdminPage = () => {
    const navigate=useNavigate();
const [click, setClick] = useState(false);
      
const handleClick = () => setClick(!click);
    
        return (
          <div className="adminPage">
          <div className="adminDiv1">
            {/* <img src="src\assets\mainPage.jpg" alt="img" /> */}
          </div>
          <div className="adminDiv2">
          <div className="adminButton color1"  onClick={() => navigate("/viewitems")}><span>ITEMS</span></div>
          <div className="adminButton middleButton color2"  onClick={() => navigate("/viewtemplates")}><span>TEMPLATES</span></div>
          <div className="adminButton color3"  onClick={() => navigate("/viewmodules")}><span>MODULES</span></div>
          {/* <Button align="right" >Items</Button>
           <Button align="right" className="adminButton" variant="contained" onClick={() => navigate("/viewtemplates")}>Templates</Button>
           <Button align="right" className="adminButton" variant="contained" onClick={() => navigate("/viewmodules")}>Modules</Button>
            */}
          </div>
          
           
          </div>
      

    );

}

export default AdminPage;