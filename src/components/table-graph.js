import React from 'react';
import { Table } from 'react-bootstrap';


export default function TableGraph(props) {
    let chartData = props.chartData;
    return (
        <Table className='mt-5 w-75' size='sm' striped bordered hover>
            <thead>
                <tr>
                    <th className='text-center aling-middle'>Name</th>
                    <th className='text-center aling-middle'>Data</th>
                    <th className='text-center aling-middle'>Actions</th>
                </tr>
            </thead>
            <tbody>
                {chartData.datasets.map((dataset) =>
                    <tr>
                        <td className='pl-4'>{dataset.label}</td>
                        <td className='pl-3'>{dataset.data.map((value) =>
                            <span>{value}, </span>
                        )}</td>
                        <td className='pl-5'>***</td>
                    </tr>
                )}
            </tbody>
        </Table>
    );
}