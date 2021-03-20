import React, { Component } from 'react';
import Navitem from './NavItem';
import './Navbar.scss';

export const rootClass = 'nav-bar';

class Navbar extends Component {
    
   
    render() {
        return (
                <nav className={rootClass}>
                    <ul className={`${rootClass}__list`}>
                        <Navitem item="Home" tolink="/" ></Navitem>
                        <Navitem item="About" tolink="/about" ></Navitem>
                        <Navitem item="Education" tolink="/education"></Navitem>
                        <Navitem item="Skills" tolink="/skills"></Navitem>
                        <Navitem item="Contact" tolink="/contact"></Navitem>
                    </ul>
                </nav>
            );
        }
    }
    
export default Navbar