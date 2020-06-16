import React, { useEffect, useState } from 'react';
import Graph from './graph.js';
import SearchForm from './search-form.js';
import TableGraph from './table-graph.js';
import axios from 'axios';


export default function StaticChart(props) {
    let chartSetting = {
        options: {
            responsive: true,
            title: { text: 'Ukraine Coronavirus statistic', display: true },
            scales: {
                yAxes: [
                    {
                        ticks: {
                            autoSkip: true,
                            maxTicksLimit: 200,
                            beginAtZero: true
                        },
                        gridLines: false,
                    }
                ],
                xAxes: [
                    {
                        gridLines: false,
                    }
                ]
            }
        }
    };
    const [data, setData] = useState({});
    const [chartData, setChartData] = useState(formChartData);
    let chartFlag = false;
    let url = 'https://disease.sh/v2/historical/Ukraine?lastdays=';
    let labels = [];
    chartData.datasets.map((dataset) => {
        let label = dataset.label;
        labels.push({
            name: label,
            status: false,
        });
        return labels;
    });
    const [chartLabels, setChartLabels] = useState(labels);
    let formUrl = (days) => {
        return url + days;
    }
    function getData(days) {
        axios.get(formUrl(days))
            .then(response => {
                setData(response.data);
                console.log('response', response.data);
            }).catch(error => {
                console.log('error', error);
            });
    }
    function formCases() {
        return [
            {
                label: 'Cases',
                data: (Object.keys(data).length !== 0 && chartLabels['label1'].status) ? Object.values(data.timeline.cases) : [],
                backgroundColor: [
                    'rgba(0,0, 0, 0.1)'
                ],
                borderWidth: 1
            },
            {
                label: 'Deaths',
                data: (Object.keys(data).length !== 0 && chartLabels['label2'].status) ? Object.values(data.timeline.deaths) : [],
                backgroundColor: [
                    'rgba(255, 0, 0, 1)'
                ],
                borderWidth: 1
            },
            {
                label: 'Recovered',
                data: (Object.keys(data).length !== 0 && chartLabels['label3'].status) ? Object.values(data.timeline.recovered) : [],
                backgroundColor: [
                    'rgba(0, 255, 0, 1)'
                ],
                borderWidth: 1,
            }
        ]
    }
    function formChartData() {
        let chartData = {
            labels: (Object.keys(data).length !== 0) ? Object.keys(data.timeline.cases) : [],
            datasets: formCases(),
        };
        return chartData;
    };
    useEffect(() => {
        chartFlag = (Object.keys(data).length !== 0) ? true : false;
        let datachart = formChartData();
        if (chartFlag) {
            setData({});
            setChartData(datachart);
        }
    });
    return (
        <div>
            <SearchForm chartLabels={chartLabels} parentMethods={{
                getData: getData,
                setChartLabels: setChartLabels,
            }} />
            <Graph chartData={chartData} chartSetting={chartSetting} />
            <TableGraph chartData={chartData} />
        </div>
    );
}
