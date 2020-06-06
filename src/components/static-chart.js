import React from 'react';
import Graph from './graph.js';
import SearchForm from './search-form.js';
import TableGraph from './table-graph.js';


export default function StaticChart(props) {
    return (
        <div>
            <SearchForm chartData={props.chartData} />
            <Graph chartData={props.chartData} chartSetting={props.chartSetting}/>
            <TableGraph chartData={props.chartData}/>
        </div>
    );
}