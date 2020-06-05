import React, {useState} from 'react';
import {ButtonGroup, ToggleButton, Table} from 'react-bootstrap';
import SimpleReactCalendar from 'simple-react-calendar'
import {Chart, getSeries} from 'react-charts';

function StaticChart(props) {
    return (
        <div>
            <SearchForm/>
            <Graph/>
            <MyTable/>
        </div>
    );
}


function SearchForm(props) {
    return (
        <div>
            <ToggleButtons/>
            <SimpleReactCalendar activeMonth={new Date()}/>
        </div>
    );
}

function Graph(props) {
    return (
        <div>
            <MyChart/>
        </div>
    );
}

function MyChart() {
    const data1 = React.useMemo(
        () => [
            {
                label: 'Series 1',
                data: [[0, 1], [1, 2], [2, 4], [3, 2], [4, 7]]
            },
            {
                label: 'Series 2',
                data: [[0, 3], [1, 1], [2, 5], [3, 6], [4, 4]]
            }
        ],
        []
    )


    const axes = React.useMemo(
        () => [
            { primary: true, type: 'linear', position: 'bottom' },
            { type: 'linear', position: 'left' }
        ],
        []
    )

    const lineChart = (
        // A react-chart hyper-responsively and continuously fills the available
        // space of its parent element automatically
        <div
            style={{
                width: '400px',
                height: '300px'
            }}
        >
            <Chart data={data1} axes={axes} />
        </div>
    )
    return(
        <div>
            {
                lineChart
            }
        </div>
    );
}



function MyTable(props) {
    return (
        <Table striped bordered hover size="sm">
            <thead>
            <tr>
                <th>#</th>
                <th>Line 1</th>
                <th>Line 2</th>
                <th>Line 3</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>0</td>
                <td>1</td>
                <td>3</td>
                <td></td>
            </tr>
            <tr>
                <td>1</td>
                <td>2</td>
                <td>1</td>
                <td></td>
            </tr>
            <tr>
                <td>2</td>
                <td>4</td>
                <td>5</td>
                <td></td>
            </tr>
            <tr>
                <td>3</td>
                <td>2</td>
                <td>6</td>
                <td></td>
            </tr>
            <tr>
                <td>4</td>
                <td>7</td>
                <td>4</td>
                <td></td>
            </tr>
            </tbody>
        </Table>
    );
}

function ToggleButtons() {
    const [checked, setChecked] = useState(false);
    const checkboxes = [
        {name: 'Line 1', value: '1'},
        {name: 'Line 2', value: '2'},
        {name: 'Line 3', value: '3'},
    ];

    return (
        <>
            <ButtonGroup toggle>
                {checkboxes.map((checkbox, idx) => (
                    <ToggleButton
                        key={idx}
                        type="checkbox"
                        variant="secondary"
                        name={checkbox.name}
                        value={checkbox.value}
                        checked={checked}
                        onChange={(e) => setChecked(e.currentTarget.checked)}
                    >
                        {checkbox.name}
                    </ToggleButton>
                ))}
            </ButtonGroup>
        </>
    );
}


export default StaticChart;