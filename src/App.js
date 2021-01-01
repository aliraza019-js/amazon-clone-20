import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header/Header";
import "./Header/Header.css";
import Home from "./Home/Home";
import Login from "./Account/login";
import { auth } from "./Firebase/Firebase";
import { useStateValue } from "./States/StateProvider";
import Header_Bottem from "./Header/Header_Bottem";
import Checkout from "./Products/Checkout";

function App() {
  const [{}, dispatch] = useStateValue();

  
  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
          <Header />
          <Checkout />
            {/* <h1>Checkout</h1> */}
          </Route>
          <Route path="/login">
            {/* <Header /> */}
            <Login/>
          </Route>
          <Route path="/about">
            <h1>About Page</h1>
          </Route>
          <Route path="/">
            <Header />
            {/* <Header_Bottem /> */}
            <Home/>
          </Route>
        </Switch>
        {/* <h1>Lest Build Amazon Clone</h1> */}
      </div>
    </Router>
  );
}
   
export default App;
