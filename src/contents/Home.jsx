import React, { Component } from 'react';
import profilepic from '../img/nadine.jpg';
import Social from '../components/Social.jsx';
import './Home.scss';

const rootClass = 'home';
class Home extends Component {
    render() {
        return(
            <div className="home">
                 <img src={profilepic} className={`${rootClass}__profile-img`} alt="Me"></img>
                 <Social/>
            </div>
        )
    }
}

export default Home