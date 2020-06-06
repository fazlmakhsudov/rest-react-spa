import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


const dynamicChart = {
  chartData: {
    labels: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'],
    datasets: [
      {
        label: 'level of thicness',
        data: [32, 45, 12, 76, 69],
        backgroundColor: [
          'rgba(75, 100, 103, 0.6)'
        ],
        borderWidth: 4
      }
    ]
  },
  chartSetting: {
    title: "Evanjeline",
    dimension: { height: '1000px', width: '1000px' },
    options: {
      responsive: true,
      title: { text: 'Thicness Scale', display: true },
      scales: {
        yAxes: [
          {
            ticks: {
              autoSkip: true,
              maxTicksLimit: 10,
              beginAtZero: true
            },
            gridLines: false,
          }
        ],
        xAxes: [
          {
            gridLines: false,
          }
        ]
      }
    },
  },
}

ReactDOM.render(
  <React.StrictMode>
    <App dynamicChart={dynamicChart} />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
