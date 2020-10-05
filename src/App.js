import React, { createContext, useState } from 'react';
import './App.css';
import Home from './Component/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './Component/Login/Login';
import Register from './Component/Register/Register';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
import MyTsks from './MyTsks/MyTsks';
import Admin from './Admin/Admin';
import AddEvent from './Admin/AddEvent';


export const UserContext = createContext();

function App() {
  const [showdata, setShowData] = useState([]); 
  const [loggedInUser, setLoggedInUser] = useState([]);
  const [volunteers, setVolunteers] = useState([]);
  return (
    <UserContext.Provider value={ {showdata, setShowData, loggedInUser, setLoggedInUser, volunteers, setVolunteers} }>
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/home'>
          <Home />
        </Route>
      <Route path='/login'>
        <Login />
      </Route>
      <PrivateRoute path='/register/:_id'>
        <Register />
      </PrivateRoute>
      <Route path='/mytsks'>
        <MyTsks />
      </Route>
      <Route path='/admin'>
        <Admin />
      </Route>
      <Route path='/addevent'>
        <AddEvent />
      </Route>
      </Switch>     
    </Router>
    </UserContext.Provider>
  );
}

export default App;
