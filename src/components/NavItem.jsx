import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavItem.scss';

export const rootClass='nav-item';

class Navitem extends Component {
    render() {
    
        return (
                <li className={rootClass}>
                    <Link to={this.props.tolink} >
                        {this.props.item}
                    </Link>
                </li>
            );
        }
}
export default Navitem