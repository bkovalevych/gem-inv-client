import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header/Header'
import MainPage from './components/MainPage/MainPage'
import Footer from './components/Footer/Footer'
import ProfilePage from './components/Profile/ProfilePage'
import LoginForm from './components/LoginForm/LoginForm'
import OpenReset from './components/OpenReset/openReset'
import UserSettings from './components/UserSettings'

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'


function App() {
  return (
    <Router>
    <div className="App">
      <Header/>
      <LoginForm/>
      <Route exact path="/" component={MainPage} />
      <Route exact path="/settings" component={UserSettings} />
      <Route path="/profile" component={ProfilePage} />
      <Route path="/openReset" component={OpenReset}/>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
