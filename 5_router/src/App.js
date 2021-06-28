import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink} from "react-router-dom"

import Home from "./components/TheHome"
import About from "./components/TheAbout"

function App() {
  return (
    <Router>
      <nav>
          <ul>
            <li>
              <NavLink to={{
                pathname: '/',
                hash: "hashTest",
                search: "tset"
              }}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
          </ul>
        </nav>

      <Switch>
        <Route exact  path="/" component={Home} activeClassName="active"/>
        <Route path="/about/:id?" component={About} activeClassName="active"/>
      </Switch>
    </Router>
  );
}



export default App;
