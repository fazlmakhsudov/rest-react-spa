import React from 'react';
import logo from '../../logo.jpg';
import {Nav, Row, Col, Image,} from 'react-bootstrap';

function Navigation(props) {
    return (
        <div>
             <Row>
                <Col xs={1} md={1}>
                <Image src={logo}  width={320} height={80} rounded />
                </Col>
            </Row>
            <Nav variant="tabs" defaultActiveKey="/dynamic-chart">
                <Nav.Item>
                    <Nav.Link href="/dynamic-chart">Dynamic chart</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/static-chart">Static chart</Nav.Link>
                </Nav.Item>
              </Nav>
        </div>
    );
}

export default Navigation;