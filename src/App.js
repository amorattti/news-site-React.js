import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './components/header.js';
import MainLayout from './hoc/mainLayout.js';
import { routes } from "./routes.js";

function App() {
  const routeComponents = routes.map(({ path, component }, key) => <Route path={path} component={component} key={key} />);

  return (
    <Router>
      <Header />
      <MainLayout>
        <Switch>
          { routeComponents }
        </Switch>
      </MainLayout>
    </Router>
  );
}

export default App