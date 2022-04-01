import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css'
import logo from '../../images/logo.png'
const Nav = () => {
    return (
        <div className='nav-container'>
            <div className='nav-logo'>      
                <img src={logo} alt="" />
            </div>
            <div className='nav-items'>
            <NavLink className={({ isActive }) => (isActive ? "active-link" : "link")} to='/'> Home</NavLink>
            <NavLink className={({ isActive }) => (isActive ? "active-link" : "link")} to='/Courses'> Courses</NavLink>
            <NavLink className={({ isActive }) => (isActive ? "active-link" : "link")} to='/Cart'> cart</NavLink>
            <NavLink className={({ isActive }) => (isActive ? "active-link" : "link")} to='/Blog'> Blog</NavLink>
            </div>
        </div>
    );
};

export default Nav;