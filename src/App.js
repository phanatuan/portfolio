import React from 'react';
import MainPage from './MainPage';
import {Switch, Route} from 'react-router-dom';
import CVPage from './CVPage';

import './App.css';
import NoMatch from './NoMatch';
import Nav from './Nav';
import Footer from './Footer';

const App = ()  => {
  return (
    <>
    <Nav />
    <Switch>
      <Route path='/' exact component={MainPage}/>
      <Route path='/about' exact component={CVPage} />
      <Route component={NoMatch} />
    </Switch>
    <Footer/>
    </>
  );
}

export default App;
