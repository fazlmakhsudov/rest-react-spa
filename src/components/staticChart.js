import React from 'react';

function StaticChart(props) {
    return (
        <div>
            <SearchForm/>
            <Graph/>
            <Table />
        </div>
    );
}


function SearchForm(props) {
    return (
        <div>
            <h1>SearchForm</h1>
        </div>
    );
}

function Graph(props) {
    return (
        <div>
            <h1>Graph</h1>
            
        </div>
    );
}


function Table(props) {
    return (
        <div>
            <h1>Table</h1>
        </div>
    );
}






export default StaticChart;