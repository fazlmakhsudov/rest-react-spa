import React, { useState, useEffect } from 'react';
import { Line, } from 'react-chartjs-2';
import { Row, Col, } from 'react-bootstrap';


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
      <Col xs={12} md={12} style={chartSetting.dimension}>
        <Line data={chartData} options={chartSetting.options} />
      </Col>
    </Row>
  );
}