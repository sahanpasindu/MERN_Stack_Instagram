import React, { useEffect, createContext, useReducer, useContext } from "react";
import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom";

import Navbar from "./components/Navbar";
import "./App.css";

import Home from "./components/screens/Home";
import Signin from "./components/screens/Signin";
import Signup from "./components/screens/Signup";
import Profile from "./components/screens/Profile";
import CreatePost from "./components/screens/CreatePost";
import { reducer, intialState } from "./reducers/userReducer";

export const UserContext = createContext();

const Routing = () => {
  const history = useHistory();
  const { state, dispatch } = useContext(UserContext);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    // convert string of json to javascript object
    // const json = '{"result":true, "count":42}';
    // console.log(obj.count); => expected output: 42
    if (user) {
      dispatch({ type: "USER", payload: user });
      console.log("useEffect - before push / route ");
      history.push("/");
    } else {
      history.push("/signin");
    }
  }, []); // empty array mean useEffect only run one time, component load (compoentDidMount lifesycle)
  // switch ensure only one route
  return (
    <Switch>
      {/* The <Switch /> component will only render the first route that matches/includes the path. Once it finds the first route that matches the path, it will not look for any other matches. Not only that, it allows for nested routes to work properly, which is something that <Router /> will not be able to handle. 
      
      when the user goes to /login, only the Login component will now be rendered. It is also important to note that an exact path can and should still be utilized for routes that are inside a <Switch />. An exact path for a route that is inside a <Switch /> makes sure that the route matches exactly the path that is specified. For example, without the exact path for / above, a user who goes to /login would find the Home component rendered on the web page.
      */}
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/signin">
        <Signin />
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
      <Route path="/profile">
        <Profile />
      </Route>
      <Route path="/create">
        <CreatePost />
      </Route>
    </Switch>
  );
};
function App() {
  const [state, dispatch] = useReducer(reducer, intialState);
  return (
    // Browser Router also a component
    <UserContext.Provider value={{ state, dispatch }}>
      <BrowserRouter>
        <Navbar />
        {/* we can use useHistory because Routing component now inside BrowserRouter */}
        <Routing />
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
