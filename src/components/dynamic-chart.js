import React from 'react';
import { Line, } from 'react-chartjs-2';
import { Row, Col, Image, OverlayTrigger, Tooltip } from 'react-bootstrap';
import singleUpArrow from '../media/single-up-arrow.jpg';
import singleDownArrow from '../media/single-down-arrow.jpg';


export default function DynamicChart(props) {
  let chartData = props.chartData;
  let chartSetting = props.chartSetting;
  return (
    <Row>
      <h1>{chartSetting.title}</h1>
      <Col xs={11} md={11}>
        <Line data={chartData} options={chartSetting.options} />
      </Col>
      <Col xs={1} md={1} style={chartSetting.dimension}>
        <OverlayTrigger placement='right' overlay={
          <Tooltip>Increase speed</Tooltip>}>
          <Image className="ml-3 mt-5" src={singleUpArrow} width={96} height={96} roundedCircle />
        </OverlayTrigger>
        <OverlayTrigger placement='right' overlay={
          <Tooltip>Decrease speed</Tooltip>}>
          <Image className="ml-3 mt-5" src={singleDownArrow} width={96} height={96} roundedCircle />
        </OverlayTrigger>
      </Col>
    </Row>
  );
}