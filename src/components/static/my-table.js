import {Table} from "react-bootstrap";
import React from "react";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import StaticChart from "./static-chart";

function MyTable(props) {

    return (
        // <TableContainer
        //     style={{ width: "80%", margin: "0 10px" }}
        //     component={StaticChart}
        // >
        //     <Table className={classes.table} aria-label="simple table">
        //         <TableHead>
        //             <TableRow>
        //                 <TableCell align="center">Name</TableCell>
        //                 <TableCell align="center">Department</TableCell>
        //                 <TableCell align="center">Gender</TableCell>
        //                 <TableCell align="center">Dob</TableCell>
        //             </TableRow>
        //         </TableHead>
        //         <TableBody>
        //             {data?.map(row => (
        //                 <TableRow key={row.name}>
        //                     <TableCell align="center">{row.name}</TableCell>
        //                     <TableCell align="center">{row.department}</TableCell>
        //                     <TableCell align="center">{row.gender}</TableCell>
        //                     <TableCell align="center">{row.dob}</TableCell>
        //                 </TableRow>
        //             ))}
        //         </TableBody>
        //     </Table>
        // </TableContainer>
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
