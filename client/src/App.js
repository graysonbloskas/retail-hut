import React from 'react'
import Cards from "./components/Card"
import Header from './components/Header'
import Nav from './components/Nav';
import Business from './pages/Businesspage-user'
import FeaturedList from './components/FeaturedList'
import Homepage from '../src/pages/Homepage';
import Gallery from '../src/pages/Gallery';
import WishlistPage from '../src/pages/wishlistPage';
import SigninPage from '../src/pages/SigninPage';
import SignupUserPage from '../src/pages/SignupPage';
import Clothing from '../src/pages/Clothing';
import Shoes from '../src/pages/Shoes';
import Beauty from '../src/pages/Beauty';
import Electronics from '../src/pages/Electronics';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
    <div>
      <Switch>
      <Route exact path='/' component={Homepage} />
      <Route exact path='/Home' component={Homepage} />
      <Route exact path='/Gallery' component={Gallery} />
      <Route exact path='/wishlist' component={WishlistPage} /> 
      <Route exact path='/Shop' component={Business} />
      <Route path='/clothing' component={Clothing} />
      <Route path='/shoes' component={Shoes} />
      <Route path='/beauty' component={Beauty} />
      <Route path='/electronics' component={Electronics} />
      <Route path='/signin' component={SigninPage} />
      <Route path='/signup' component={SignupUserPage} />
      </Switch>
      
    </div>
    </Router>
  );
}

export default App;
