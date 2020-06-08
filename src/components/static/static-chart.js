import React from 'react';
import SearchForm from './search-form';
import Graph from './graph'
import MyTable from './my-table';

function StaticChart(props) {
    return (
        <div>
            <SearchForm/>
            <Graph/>
            <MyTable/>
        </div>
    );
}

export default StaticChart;