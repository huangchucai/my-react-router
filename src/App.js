import React from 'react';
import './App.css';

// import {
//   BrowserRouter as Router,
//   Route,
//   Link,
//   Switch,
//   useRouteMatch,
//   useHistory,
//   useLocation,
//   useParams,
//   withRouter,
//   Prompt
// } from "react-router-dom";

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  useRouteMatch,
  useHistory,
  useLocation,
  useParams,
  withRouter,
  Prompt
} from "./hcc-react-router-dom";

import HomePage from "./pages/HomePage";
import UserPage from "./pages/UserPage";
import LoginPage from "./pages/LoginPage";
import _404Page from "./pages/_404Page";
import RouteComponentPage from "./pages/RouteComponentPage";
import WelcomePage from "./pages/WelcomePage";

function App() {
  return (
    <div className="App">
      <Router>
        <Link to="/">首页</Link>
        <Link to="/user">用户中心</Link>
        <Link to="/login">登录</Link>
        <Link to="/product/123">商品</Link>

        {/*<Switch>*/}
          <Route
              exact
              path="/"
              //children={children}
              component={HomePage}
              //render={render}
          >
            {/* children 0000 */}
          </Route>
          <Route path="/user" component={UserPage} />
          <Route path="/login" component={LoginPage} />
          {/* <Route path="/product/:id" component={Product} /> */}
          {/*<Route path="/product/:id" render={() => <Product />} />*/}

          <Route component={_404Page} />
        {/*</Switch>*/}
      </Router>
    </div>
  );
}

export default App;
