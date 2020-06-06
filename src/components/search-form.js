import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Row, Col, Form, Button, FormCheck } from 'react-bootstrap';


export default function SearchForm(props) {
    let chartData = props.chartData;
    let labels = [];
    chartData.datasets.map((dataset) => labels.push(dataset.label));
    return (
        <Row className='mt-4'>
            <Col xs={12} md={12}>
                <h1 className='ml-5 mb-4'>Search Options</h1>
            </Col>
            <Col xs={5} md={5}>
                <Calendar value={new Date()} />
            </Col>
            <Col xs={7} md={7}>
                <Form>
                    {labels.map((label) => (
                        <FormCheck className='mt-4 '>
                            <FormCheck.Input type='checkbox' name={label} style={
                                { height: '32px', width: '32px' }
                            } />
                            <FormCheck.Label className='mb-2'>
                                <span className='h2 ml-5'>{label}</span>
                            </FormCheck.Label>
                        </FormCheck>
                    ))}
                    <Form.Control type="text" name='date' value={new Date()} hidden />
                    <Button className='mt-5 w-25' variant="primary" type="submit">
                        <span className='h3'>Search</span>
                    </Button>
                </Form>
            </Col>
        </Row>
    );
}