import React from 'react';
import Navigation from './components/nav.js';
import DynamicChart from './components/dynamicChart.js';
import StaticChart from './components/staticChart.js';
import {Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";





function App() {
  return (
    <Container>
        <Navigation />
        <Router>
          <Switch>
            <Route path="/dynamic-chart">
              <DynamicChart/>
            </Route>
            <Route path="/static-chart">
              <StaticChart/>
            </Route>
            <Route default component={DynamicChart} />
          </Switch>
       </Router>
    </Container>
  );
}




export default App;
