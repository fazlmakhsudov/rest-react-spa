import React from "react";
import {Chart} from "react-charts";

function Graph() {
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
        <div
            style={{
                width: '1024px',
                height: '600px'
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


export default Graph;