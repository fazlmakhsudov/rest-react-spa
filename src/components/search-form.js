import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Row, Col, Form, Button, FormCheck } from 'react-bootstrap';


export default function SearchForm(props) {
    let getData = props.parentMethods.getData;
    let setChartLabels = props.parentMethods.setChartLabels;
    const [label1, setLabel1] = useState(props.chartLabels[0]);
    const [label2, setLabel2] = useState(props.chartLabels[1]);
    const [label3, setLabel3] = useState(props.chartLabels[2]);
    const [calendarValue, setCalendarValue] = useState(new Date());
    const [days, setDays] = useState(1);
    let pickDayHandler = (day) => {
        let today = new Date();
        let thatDay = new Date(day);
        (today === thatDay) ? setCalendarValue(1) : setCalendarValue(thatDay)
        let days = Math.floor((today - thatDay) / (1000 * 3600 * 24));
        setDays(days);
    }
    useEffect(() => {
    });
    return (
        <Row className='mt-4'>
            <Col xs={12} md={12}>
                <h1 className='ml-5 mb-4'>Search Options</h1>
            </Col>
            <Col xs={5} md={5}>
                <Calendar value={calendarValue} maxDate={new Date()} onClickDay={pickDayHandler} />
            </Col>
            <Col xs={7} md={7}>
                <Form>
                    <FormCheck className='mt-4 align-items-center'>
                        <input type='checkbox' checked={label1.status} style={{ height: '32px', width: '32px' }} onClick={() => setLabel1({
                            name: label1.name,
                            status: !label1.status,
                        })} />
                        <FormCheck.Label className=''>
                            <span className='h1 ml-4'>{label1.name}</span>
                        </FormCheck.Label>
                    </FormCheck>
                    <FormCheck className='mt-4 align-items-center'>
                        <input type='checkbox' checked={label2.status} style={{ height: '32px', width: '32px' }} onClick={() => setLabel2({
                            name: label2.name,
                            status: !label2.status,
                        })} />
                        <FormCheck.Label className=''>
                            <span className='h1 ml-4'>{label2.name}</span>
                        </FormCheck.Label>
                    </FormCheck>
                    <FormCheck className='mt-4 align-items-center'>
                        <input type='checkbox' checked={label3.status} style={{ height: '32px', width: '32px' }} onClick={() => setLabel3({
                            name: label3.name,
                            status: !label3.status,
                        })} />
                        <FormCheck.Label className=''>
                            <span className='h1 ml-4'>{label3.name}</span>
                        </FormCheck.Label>
                    </FormCheck>
                    <Button className='mt-5 w-25' variant="primary" onClick={() => {
                        setChartLabels({
                            label1, label2, label3,
                        });
                        getData(days);
                    }}>
                        <span className='h3'>Search</span>
                    </Button>
                </Form>
            </Col>
        </Row>
    );
}
