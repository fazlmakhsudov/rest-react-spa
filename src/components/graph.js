import React from 'react';
import { Line, } from 'react-chartjs-2';
import { Row, Col, } from 'react-bootstrap';

export default function Graph(props) {
    let chartData = props.chartData;
    let chartSetting = props.chartSetting;
    return (
        <Row className='mt-5'>
            <Col xs={9} md={9}>
                <Line data={chartData} options={chartSetting.options} />
            </Col>
        </Row>
    );
}
