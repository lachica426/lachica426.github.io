import React, { Component } from 'react';
import './Social.scss';

const rootClass='social';
class Social extends Component {
    render() {
        return(
            <div className={rootClass}>
                <a href="https://github.com/lachica426" target="_blank"><i className="fab fa-github"></i></a>
                <a href="https://instagram.com/nadzcastro" target="_blank"><i className="fab fa-instagram"></i></a>
                <a href="https://ca.linkedin.com/in/nadzcastro" target="_blank"><i className="fab fa-linkedin-in"></i></a>
            </div>
        );
    }
}

export default Social