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
import BizSignInPage from '../src/pages/BizSignInPage';
import BizSignUpPage from '../src/pages/BizSignupPage';
import Clothing from '../src/pages/Clothing';
import Shoes from '../src/pages/Shoes';
import Beauty from '../src/pages/Beauty';
import Electronics from '../src/pages/Electronics';
import ProductPage from '../src/pages/ProductPage'

import { UserProvider } from "./utils/UserContext";
import Auth from "./utils/Auth";

import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

function App() {
  return (
    <UserProvider>
    <Router>
    <div>
      <Switch>
      <Route exact path='/' component={Homepage} />
      <Route exact path='/Home' component={Homepage} />
      <Route exact path='/Gallery' component={Gallery} />
      <PrivateRoute exact path='/wishlist' component={WishlistPage} />       
      <Route exact path='/shop' component={Business} />
      <Route path='/clothing' component={Clothing} />
      <Route path='/shoes' component={Shoes} />
      <Route path='/beauty' component={Beauty} />
      <Route path='/electronics' component={Electronics} />
      <Route path='/signin' component={SigninPage} />
      <Route path='/signup' component={SignupUserPage} />
      <Route path='/bizsignin' component={BizSignInPage} />
      <Route path='/bizsignup' component={BizSignUpPage} />
	  <Route path='/products/:id?' component={ProductPage} />
      </Switch>
      
    </div>
    </Router>
    </UserProvider>
  );
}

const PrivateRoute = ({ component: Component, ...rest }) => (
	<Router>
		<div>

			<Route {...rest} render={props => (

				Auth.isAuthenticated ? (
					<Component {...props} />
				) : (
						<div className="container">
							<div className="alert alert-danger text-center" role="alert">
								This page is private to authenticated users.
					</div>
							<div className="row">
								<div className="col-sm"></div>
								<div className="col-sm">
									<h3>Please Register or Login</h3>
								</div>
								<div className="col-sm"></div>
							</div>
							<Redirect to={{
								pathname: '/',
								state: { from: props.location }
							}} />
						</div>
					)
			)} />
		</div>
	</Router>
)


export default App;
