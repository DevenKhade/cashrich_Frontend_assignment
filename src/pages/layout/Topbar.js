// Topbar.js
import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoimg from "../../asset/img/CashRich_logo.png";
import UserContext from '../../context/UserContext'; // Adjust path based on your folder structure

import '../Login';
const Topbar = () => {
  const location = useLocation();
  const isDashboard = location.pathname === '/dashboard';
  const { username } = useContext(UserContext); // Retrieve username from UserContext

  return (
    <>
      <nav className="Topbar d-flex " >
        <div className='d-flex col-lg-8 offset-lg-2 col-md-8 offset-md-2 col-sm-12 justify-content-center '>
        <img className="Logo" src={logoimg} alt="Logo1" />
        </div>
      {isDashboard &&
        <div className='offset-lg-1 offset-md-1' >
          {/* d-flex col-lg-9 offset-lg-1 col-md-9 offset-md-1 col-sm-12 */}
          <ul className="list-unstyled " style={{ float: "right" }}>
            <li><b>{username}</b></li> {/* Display username here */}
            <li><Link to="../Login">Logout</Link></li>
          </ul>
        </div>
      }
      
      </nav>
    </>
  );
};

export default Topbar;
