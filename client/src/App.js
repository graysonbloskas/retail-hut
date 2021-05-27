import React from 'react'
import Cards from "./components/Card"
import Header from './components/Header'
import Business from './pages/Businesspage-user'
import FeaturedList from './components/FeaturedList'
import Homepage from '../src/pages/Homepage';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
    <div>
      <Switch>
      <Route exact path='/' component={Homepage} />
      <Route exact path='/Home' component={Homepage} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
