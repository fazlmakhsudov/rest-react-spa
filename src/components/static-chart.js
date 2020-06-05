import React from 'react';
import Graph from './graph.js';
import SearchForm from './search-form.js';
import Table from './table.js';


export default function StaticChart(props) {
    return (
        <div>
            <SearchForm />
            <Graph />
            <Table />
        </div>
    );
}