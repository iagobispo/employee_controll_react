import React, { useState } from 'react';
import { Link } from 'react-router-dom';


import './styles.css'

const Header = ({ title, page }) => {

    return (

        <div className='div-header' >
            <div className='title'>LOGO</div>
            <div>
                <Link to={`/${page}`}>{title}</Link>
            </div>
        </div>

    );
}

export default Header;