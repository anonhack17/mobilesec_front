import React from 'react';
import {Link} from "react-router-dom";
import { FaHome, FaCheck, FaBug } from 'react-icons/fa';

const Header = () => {
    return (
        <header style={headerStyle}>
            <h1 >MobileSec</h1>
            <div style={linkDivStyle} >
                <Link style={linkStyle} to={'/'} >Главная <FaHome className="icon-header" /></Link>
                <Link style={linkStyle} to={'/scan'} >Скан <FaCheck className="icon-header" /></Link>
                <Link style={linkStyle} to={'/threats'} >Угрозы <FaBug className="icon-header" /></Link>
            </div>
        </header>
    );
};

const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px',
};

const linkStyle = {
    background: '#333',
    color: '#fff',
    padding: '10px',
    textDecoration: 'none'
};

const linkDivStyle = {
    background: '#333',
    color: '#fff',
    justifyContent: 'space-between',
    display: 'flex',
    padding: '10px',
};

export default Header;