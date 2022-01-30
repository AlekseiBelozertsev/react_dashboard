import React from 'react';
import './Dashboard__chart.css'
import DashboardFilter from '../Dashboard__filter/DashboardFilter'
import {Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement} from 'chart.js'
import { Line } from 'react-chartjs-2'

ChartJS.register(
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement
)

const DashboardChart = () => {
    const values = [200020, 355000, 125600, 3452, 56000, 14880, 400];
    const data = {
        labels: ['Monday', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
            label: '# of Votes K',
            data: values,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
            ],
            borderWidth: 3,
            tension: 0.5
        }]
    }

    const  options = {
        elements : {
            point : {
                radius: 0
            }
        },
        scales: {
            y: {
                beginAtZero: true,
            },
            x: {
                grid: {
                    display: false
                }
            }
        }
    }

  

  return (
  <div className='Dashboard__chart'>
      <div className='Dashboard__chart__header'>
        <div className='Dashboard__chart__titles'>
            <h3 className='Dashboard__chart__title'>Market Overview</h3>
            <span>Prices value updates</span>
        </div>
        <DashboardFilter />
      </div>
      <Line data={data} options={options}/>
  </div>
  );
};

export default DashboardChart;
