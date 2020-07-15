import React from "react";
import { Link, Route, Switch, Redirect } from "react-router-dom";
import Category from "./Category";
import Products from "./Products";
import {fakeAuth, Login} from  "./Login";
import './App.css';

export default function App() {

  return (
    
    <div>
      <Navbar/>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/category" component={Category} />
        <Route path="/products" component={Products} />
        <Route path="/login" component={Login} />
        <PrivateRoute path="/admin" component={Admin} />
      </Switch>
    </div>
  );
  }

function Home(){
  return (
    <h1>Home page</h1>
);
}

function Admin(){
  return (
    <h1>Admin page</h1>
);
}



function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-light">
        <ul className="nav navbar-nav">
          <li>
              <Link to="/">Home</Link>
          </li>
          <li>
              <Link to="/category">Category</Link>
          </li>
          <li>
              <Link to="/products">Products</Link>
          </li>
          <li>
              <Link to="/admin">Admin area</Link>
          </li>
        </ul>
      </nav>
    </div>
    );
}


/* PrivateRoute component definition */
const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        fakeAuth.isAuthenticated === true ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        )
      }
    />
  );
};
