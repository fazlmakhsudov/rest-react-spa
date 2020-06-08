import {Table} from "react-bootstrap";
import React from "react";

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

export default MyTable;
