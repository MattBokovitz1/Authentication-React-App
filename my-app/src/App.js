import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import NavBar from "./components/NavBar";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import MyUsers from "./components/MyUsers";
import PrivateRoute from "./utils/PrivateRoute";
import { AppProvider } from "./utils/AppContext";

function App() {
  return (
    <AppProvider>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={LoginForm} />
          <Route exact path="/signup" component={SignupForm} />
          <Redirect exact from="/reload" to="/" />
          <PrivateRoute exact path="/home" component={MyUsers} />
        </Switch>
      </div>
    </AppProvider>
  );
}

export default App;
