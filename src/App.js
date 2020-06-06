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


export default function App(props) {
  let chartData = props.charts.chartData;
  let chartSetting = props.charts.chartSetting;
  return (
    <Container>
      <Navigation />
      <Router>
        <Switch>
          <Route path="/static-chart">
            <StaticChart chartData={chartData} chartSetting={chartSetting}/>
          </Route>
          <Route default component={() =>
            <DynamicChart chartData={chartData} chartSetting={chartSetting} />
          } />
        </Switch>
      </Router>
    </Container>
  );
};