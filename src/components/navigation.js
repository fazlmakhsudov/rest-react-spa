import React from 'react';
import logo from '../media/logo.jpg';
import { Nav, Row, Col, Image, } from 'react-bootstrap';


export default function Navigation() {
    return (
        <div>
            <Row>
                <Col xs={1} md={1}>
                    <Image src={logo} width={320} height={64} rounded />
                </Col>
            </Row>
            <Nav variant="tabs">
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
