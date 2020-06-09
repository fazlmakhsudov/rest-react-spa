import React from 'react';
import SearchForm from './search-form';
import Graph from './graph'
import MyTable from './my-table';
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    paper: {
        marginTop: theme.spacing(3),
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    graph: {
        width: "100%",
        marginTop: theme.spacing(3)
    },
    submit: {
        margin: theme.spacing(3, 0, 2)
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: "100%"
    }
}));

function StaticChart(props) {
    const classes = useStyles();
    return (
        <div className={classes.paper}>
            <SearchForm/>
            <Graph props={props} className={classes.graph}/>
            <MyTable props={props} />
        </div>
    );
}

export default StaticChart;