import React from "react";
import Login from "./Views/login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Views/home";
import Users from "./Views/users";
import RegisteredDrivers from "./Views/registered-drivers";
import PendingRegistration from "./Views/pending-registration";
import Main from "./Views/main";
import UserInfo from "./Views/userInfo";
import Locations from "./Views/locations";

function App() {
  return (
    <div>
      {" "}
      <Router>
        <div>
          <Switch>
            <Route path="/" exact>
              <Login />
            </Route>
            <Route path="/home" exact>
              <Home />
            </Route>
            <Route path="/users" exact>
              <Users />
            </Route>
            <Route path="/registered-drivers" exact>
              <RegisteredDrivers />
            </Route>
            <Route path="/pending-registration" exact>
              <PendingRegistration />
            </Route>
            <Route path="/main" exact>
              <Main />
            </Route>
            <Route path="/user-info">
              <UserInfo/>
            </Route>
            <Route path="/locations">
              <Locations/>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
