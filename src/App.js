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
  return (
    <Router>
      <Header />
      <MainLayout>
        <Switch>
          {routes.map((route, index) => (
            <Route key={index} {...route} />
          ))}
        </Switch>
      </MainLayout>
    </Router>
  );
}

export default App