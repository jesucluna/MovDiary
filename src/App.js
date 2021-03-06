import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
import './App.css';
/*import Modal from './components/Modal';*/
import Home from './components/pages/Home';
import Favorites from './components/pages/Favorites';
import Add from './components/pages/Add';
import Settings from './components/pages/Settings';
import Account from './components/pages/Account';
import Error from './components/pages/Error';



class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="container-fluid main">
                    <div className="row menubox">
                        <input type="checkbox" name="" id="btn" />
                        <div className="col standard bar"><label htmlFor="btn"><i className="fas fa-bars"></i></label></div>
                        <div className="col menu">
                            <ul>
                                <li><NavLink to="/"><i className="fas fa-home home"></i>    Home</NavLink></li>
                                <li><NavLink to="/favorites"><i className="fas fa-heart home"></i>      Favorites</NavLink></li>
                                <li><NavLink to="/add"><i className="fas fa-plus home"></i>     Add</NavLink></li>
                                <li><NavLink to="/settings"><i className="fas fa-cog home"></i>     Settings</NavLink></li>
                                <li><NavLink to="/account"><i className="fas fa-user-cog home"></i>     Account</NavLink></li>
                            </ul>
                        </div>
                        <div className="col-9 standard title">
                            <p className="standard">Movies Diary </p>
                        </div>
                        <div className="col standard iconize">
                            <NavLink to="/add"><div className="searchicon"><i className="fas fa-search"></i></div></NavLink>
                        </div>
                        <div className="col standard iconize">
                            <NavLink to="/"><div className="searchicon ho"><i className="fas fa-home"></i></div></NavLink>
                        </div>

                    </div>
                    <div className="row hom">
                        <Switch>
                            <Route path="/" component={Home} exact />
                            <Route path="/favorites" component={Favorites} />
                            <Route path="/add" component={Add} />
                            <Route path="/settings" component={Settings} />
                            <Route path="/account" component={Account} />
                            <Route component={Error} />
                        </Switch>
                    </div>

                </div>
            </BrowserRouter>
        );
    }
}

export default App;