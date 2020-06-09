import React from 'react';
import Navigation from './components/static/navigation.js';
import DynamicChart from './components/dynamic-chart.js';
import StaticChart from './components/static/static-chart.js';
import {Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";


const datasets = {
    dataset1: {
        label: 'Series 1',
        data: [[0, 1], [1, 2], [2, 4], [3, 2], [4, 7]]
    },
    dataset2: {
        label: 'Series 2',
        data: [[0, 3], [1, 1], [2, 5], [3, 6], [4, 4]]
    }
}


function App() {
    return (
        <Container>
            <Navigation/>
            <Router>
                <Switch>
                    <Route path="/dynamic-chart">
                        <DynamicChart/>
                    </Route>
                    <Route path="/static-chart">
                        <StaticChart props={datasets}/>
                    </Route>
                    <Route default component={DynamicChart}/>
                </Switch>
            </Router>
        </Container>
    );
}


export default App;
