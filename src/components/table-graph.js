import React from 'react';
import { Table } from 'react-bootstrap';


export default function TableGraph(props) {
    let chartData = props.chartData;
    return (
        <Table className='mt-5 w-75' size='sm' striped bordered hover>
            <thead>
                <tr>
                    <th className='w-25 text-center aling-middle'>Name</th>
                    <th className='text-center aling-middle'>Data</th>
                </tr>
            </thead>
            <tbody>
                {chartData.datasets.map((dataset,index) =>
                    <tr key={index}>
                        <td className='w-25 pl-4 aling-middle'>{dataset.label}</td>
                        <td className='pl-3 aling-middle'>{dataset.data.map((value, index) =>
                            <span key={index}>{value}, </span>
                        )}</td>
                    </tr>
                )}
            </tbody>
        </Table>
    );
}
