import React from 'react';
import { Chart, getSeries,  } from 'react-charts';


function DynamicChart(props) {
    return (
        <div>
            <MyChart />
        </div>
    );
}


export function MyChart() {
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

    const data2 = React.useMemo(
        () => [
          {
            label: 'Series 1',
            data: [[2, 4], [4, 1], [2, 4], [0, 2], [4, 7]]
          },
          {
            label: 'Series 2',
            data: [[0, 3], [5, 8], [1, 3], [3, 6], [9, 4]]
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
        <Chart data={data2} axes={axes} />
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
  
  


export default DynamicChart;