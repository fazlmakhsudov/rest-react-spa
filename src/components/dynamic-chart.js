import React, {useState} from 'react';
import {Line,} from 'react-chartjs-2';
import {Row, Col, Image, OverlayTrigger, Tooltip} from 'react-bootstrap';
import singleUpArrow from '../media/single-up-arrow.jpg';
import singleDownArrow from '../media/single-down-arrow.jpg';


export default function DynamicChart(props) {
    let charts = {
        chartData: {
            labels: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'],
            datasets: [
                {
                    label: 'level of thickness',
                    data: [32, 45, 12, 76, 69],
                    backgroundColor: [
                        'rgba(75, 100, 103, 0.6)'
                    ],
                    borderWidth: 4
                },
                {
                    label: 'level of lengh',
                    data: [11, 77, 44, 1, 56],
                    backgroundColor: [
                        'rgba(35, 11, 42, 0.6)'
                    ],
                    borderWidth: 4
                },
                {
                    label: 'level of width',
                    data: [1, 99, 3, 11, 77],
                    backgroundColor: [
                        'rgba(135, 211, 42, 0.5)'
                    ],
                    borderWidth: 4
                }
            ]
        },
        chartSetting: {
            title: "Dynamic chart",
            options: {
                responsive: true,
                title: {text: 'Some Scale', display: true},
                scales: {
                    yAxes: [
                        {
                            ticks: {
                                autoSkip: true,
                                maxTicksLimit: 10,
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
            },
        },
    }
    let chartData = props.chartData;
    let chartSetting = props.chartSetting;
    const [date, setDate] = useState('');
    const [hour, setHour] = useState('');
    const [data, setData] = useState('');

    let url = '';
    let formUrl = () => {
        //form url with date and hour
    }
    let getData = () => {
        //request to weather api and return data
    }

    let formChartData = () => {
        //structure from getData() in index.js
    }

    let formChartSettings = () => {
        //structure from in index.js
    }

    let addDay = () => {
        // setDate + setHour
    }

    let decreaseDate = () => {

    }

    let increaseDate = () => {

    }

    //Write func which will increase hours by 1 with set interval (include days incrementation) interval = 1 sec
    //I should use useEffect with all dynamic components
    return (
        <Row>
            <h1>{chartSetting.title}</h1>
            <Col xs={11} md={11}>
                <Line data={chartData} options={chartSetting.options}/>
            </Col>
            <Col xs={1} md={1} style={chartSetting.dimension}>
                <OverlayTrigger placement='right' overlay={
                    <Tooltip>Increase speed</Tooltip>}>
                    <Image className="ml-3 mt-5" src={singleUpArrow} width={96} height={96} roundedCircle/>
                </OverlayTrigger>
                <OverlayTrigger placement='right' overlay={
                    <Tooltip>Decrease speed</Tooltip>}>
                    <Image className="ml-3 mt-5" src={singleDownArrow} width={96} height={96} roundedCircle/>
                </OverlayTrigger>
            </Col>
        </Row>
    );
}
