import React, { useState, useEffect } from 'react';
import { Line, } from 'react-chartjs-2';
import { Row, Col, Image, } from 'react-bootstrap';
import singleUpArrow from '../media/single-up-arrow.jpg';
import singleDownArrow from '../media/single-down-arrow.jpg';


export default function DynamicChart(props) {
  const [chartData, setChartData] = useState({});
  const [chartSetting, setChartSetting] = useState({});
  const chart = () => {
    setChartData(props.chartData);
    setChartSetting(props.chartSetting);
  };
  useEffect(() => {
    chart();
  });
  return (
    <Row>
      <h1>{chartSetting.title}</h1>
      <Col xs={11} md={11} style={chartSetting.dimension}>
        <Line data={chartData} options={chartSetting.options} />
      </Col>
      <Col xs={1} md={1} style={chartSetting.dimension}>
        <Image className="ml-3 mt-5" src={singleUpArrow} width={96} height={96} roundedCircle />
        <Image className="ml-3 mt-5" src={singleDownArrow} width={96} height={96} roundedCircle />
      </Col>
    </Row>
  );
}