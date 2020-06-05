import React from 'react';
import Navigation from './components/navigation.js';
import DynamicChart from './components/dynamic-chart.js';
import StaticChart from './components/static-chart.js';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App(props) {
  return (
    <Container>
      <Navigation />
      <Router>
        <Switch>
          <Route path="/dynamic-chart">
            <DynamicChart />
          </Route>
          <Route path="/static-chart">
            <StaticChart />
          </Route>
          <Route default component={DynamicChart} />
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
