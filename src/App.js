import { Route, Redirect, Switch, BrowserRouter } from "react-router-dom";

import Login from "./components/Login";

import Home from "./components/Home";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => (
  <Switch>
    <Route path="/login" component={Login} />
    <ProtectedRoute exact path="/" component={Home} />
  </Switch>
);

export default App;
