import React from 'react';
import {Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement} from 'chart.js'
import { Line } from 'react-chartjs-2';
import './Dashboard__card-ethereum.css'

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement
)

const DashboardCardEtherum = () => {

  const values = [3454, 1410, 1566,];
  const data = {
      labels: ['Sun', 'Mon', 'Tue'],
      datasets: [{
          label: '# of Votes K',
          data: values,
          borderColor: [
              'rgba(224,102,102,1)',
          ],
          borderWidth: 5,
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
              ticks: {
                display: false,
              },
              grid: {
                display: false,
                drawBorder: false
            }
          },
          x: {
            ticks: {
              display: false,
            },
              grid: {
                  display: false,
                  drawBorder: false
              }
          }
      }
  }


  return <div className='Dashboard__card-ethereum__wrapper'>
    <div className='Dashboard__card-ethereum__logo'>
    <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="ethereum" className="svg-inline--fa fa-ethereum fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="#F7867E" d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z"></path></svg>
    </div>
    <div className='Dasboard__card__options'>
      <div className='Dasboard__card__options-item'></div>
      <div className='Dasboard__card__options-item'></div>
      <div className='Dasboard__card__options-item'></div>
    </div>
    <h3 className='Dashboard__card__title'>12</h3>
    <div className='Dashboard__card__chart'>
      <Line data={data} options={options}/>
    </div>
    <div className='Dashboard__card__stats'>
      <div className='Dashboard__card__stats_percent'>
        <strong>45</strong>
      </div>
      <div className='Dashboard__card__stats__time'>
        This week
      </div>
    </div>
  </div>;
}

export default DashboardCardEtherum