import React from 'react';
import {Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement} from 'chart.js'
import { Line } from 'react-chartjs-2'
import OptionsIcon from '../Options/OptionsIcon';
import './DashboardCard.css'

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement
)

const title = '#171717';

const  DashboardCard = (props) => {

  const values = [200020, 355000, 125600,];
    const data = {
        labels: ['Sun', 'Mon', 'Tue'],
        datasets: [{
            label: '# of Votes K',
            data: values,
            borderColor: [
                'rgba(106,168,79,1)',
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
    const cardStyle = {
        backgroundColor: props.color,
    }

  return (
        <div className={props.cardClass} style={cardStyle}>
            <div className='Dashboard__card__logo'>{props.svg}</div>
            <OptionsIcon color={title}/>
            <h3 className='Dashboard__card__title'>{props.money_value}</h3>
            <div className='Dashboard__card__chart'>
                <Line data={data} options={options}/>
            </div>
            <div className='Dashboard__card__stats'>
                <div className='Dashboard__card__stats_percent'>
                    <strong>{props.percent_value}</strong>
                </div>
                <div className={props.statsClass}></div>
            </div>
        </div>
  );
}
export default DashboardCard
