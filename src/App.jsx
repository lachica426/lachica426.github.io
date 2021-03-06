import React from 'react';
import './App.css';
import
{
BrowserRouter as Router,
Route,
} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './contents/Home.jsx';

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Route exact path="/">
                    <Home />
                </Route>
            </div>
        </Router>
    )
}
export default App;

