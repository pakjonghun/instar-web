import { useReactiveVar } from "@apollo/client";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { isLoggedInVar } from "./apollo";
import routes from "./routes";
import Home from "./screens/Home";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
const AppRouter = () => {
  const isLogged = useReactiveVar(isLoggedInVar);
  return (
    <>
      <Router>
        <Switch>
          <Route exact path={routes.home}>
            {isLogged ? <Home /> : <Login />}
          </Route>
          <Route path={routes.signUp}>
            <SignUp />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default AppRouter;
