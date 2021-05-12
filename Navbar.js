import React from 'react';
import Contact from "./Contact";
import Home from "./Home";
import Login from "./Login";
import Service from "./Service";
import Signup from './Signup';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";

const Navbar = () => {
return(
<Router>
   

<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">

      <li className="nav-item active">
      <a className="nav-link" href="/">Home</a>
      </li>

      <li className="nav-item">
      <a className="nav-link" href="/Contact"> Contact </a>
      </li>

      <li className="nav-item">
        <a className="nav-link" href="/Service"> Service </a>
      </li>

      <li className="nav-item">
        <a className="nav-link" href="/Signup"> Signup/Login </a>
      </li>

    </ul>
  </div>
</nav>


<Switch>
   <Route exact path="/" > <Home /> </Route> 
    <Route exact path="/Contact" component={Contact} />
    <Route exact path="/Service" component={Service} />
    <Route exact path="/Signup"> <Signup /> </Route>
    <Route exact path="/Login"> <Login /> </Route>
  </Switch>


</Router>
)

}
export default Navbar;

/* </nav>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Features</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Pricing</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
  </div>
</nav> */