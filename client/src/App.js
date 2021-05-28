import React from 'react'
import Cards from "./components/Card"
import Header from './components/Header'
import Nav from './components/Nav';
import Business from './pages/Businesspage-user'
import FeaturedList from './components/FeaturedList'
import Homepage from '../src/pages/Homepage';
import Gallery from '../src/pages/Gallery';
import wishlistPage from './pages/wishlistPage'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
    <div>
 
      <Switch>
      <Route exact path='/' component={Homepage} />
      <Route exact path='/Home' component={Homepage} />
      <Route exact path='/Gallery' component={Gallery} />
      <Route exact path='/wishlist' component={wishlistPage} /> 
      <Route exact path='/Shop' component={Business} />
      </Switch>
      
    </div>
    </Router>
  );
}

export default App;
