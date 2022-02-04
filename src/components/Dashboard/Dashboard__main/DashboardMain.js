import React from 'react';
// import DashboardCardBinance from '../Dashboard__cards/Binance/Dashboard__card-binance';
// import DashboardCardBitcoin from '../Dashboard__cards/Bitcoin/DashboardCardBitcoin';
// import DashboardCardEtherum from '../Dashboard__cards/Ethereum/DashboardCardEthereum';
import DashboardFilter from '../Dashboard__filter/DashboardFilter';
import DashboardOrder from '../Dashboard__order/DashboardOrder';
import DashboardTitle from '../Dashboard__titles/Dashboard_Title/DashboardTitle';
import DashboardChart from '../Dashboard__chart/DashboardChart';
import './Dashboard__main.css';
import DashboardCard from '../Dashboard__cards/DashboardCard';

export default function DashboardMain() {
  const img = [
    <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="bitcoin" className="svg-inline--fa fa-bitcoin fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg"     viewBox="0 0 512 512">
        <path fill="currentColor" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zm-141.651-35.33c4.937-32.999-20.191-50.739-54.55-62.573l11.146-44.702-27.213-6.781-10.851 43.524c-7.154-1.783-14.502-3.464-21.803-5.13l10.929-43.81-27.198-6.781-11.153 44.686c-5.922-1.349-11.735-2.682-17.377-4.084l.031-.14-37.53-9.37-7.239 29.062s20.191 4.627 19.765 4.913c11.022 2.751 13.014 10.044 12.68 15.825l-12.696 50.925c.76.194 1.744.473 2.829.907-.907-.225-1.876-.473-2.876-.713l-17.796 71.338c-1.349 3.348-4.767 8.37-12.471 6.464.271.395-19.78-4.937-19.78-4.937l-13.51 31.147 35.414 8.827c6.588 1.651 13.045 3.379 19.4 5.006l-11.262 45.213 27.182 6.781 11.153-44.733a1038.209 1038.209 0 0 0 21.687 5.627l-11.115 44.523 27.213 6.781 11.262-45.128c46.404 8.781 81.299 5.239 95.986-36.727 11.836-33.79-.589-53.281-25.004-65.991 17.78-4.098 31.174-15.792 34.747-39.949zm-62.177 87.179c-8.41 33.79-65.308 15.523-83.755 10.943l14.944-59.899c18.446 4.603 77.6 13.717 68.811 48.956zm8.417-87.667c-7.673 30.736-55.031 15.12-70.393 11.292l13.548-54.327c15.363 3.828 64.836 10.973 56.845 43.035z"></path>
      </svg>,
      <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="ethereum" class="svg-inline--fa fa-ethereum fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z"></path></svg>,
      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="cog" class="svg-inline--fa fa-cog fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z"></path></svg>,
  ];

  const classNames = require('classnames');
  const cardBitcoinClass = classNames('Dashboard__card__wrapper_green');
  const cardEtherClass = classNames('Dashboard__card__wrapper_blue');
  const cardBinanceClass = classNames('Dashboard__card__wrapper_red');

  const thisWeekClass = classNames('Dashboard__card__stats__thisWeek');
  const lastWeekClass = classNames('Dashboard__card__stats__lastWeek');
  const lastMonthClass = classNames('Dashboard__card__stats__lastMonth');
  
  

  
  return <div className='Dashboard__main' id='main'>
      <DashboardTitle />
      <DashboardFilter />
      <DashboardCard color={'rgb(247,134,126)'} money_value={340} percent_value={31} svg={img[0]} cardClass={cardBitcoinClass} statsClass={thisWeekClass}/>
      <DashboardCard color={'rgb(187,231,172)'} money_value={1220} percent_value={56} svg={img[1]} cardClass={cardBinanceClass} statsClass={lastWeekClass}/>
      <DashboardCard color={'rgb(123,186,244)'} money_value={10} percent_value={-12.5} svg={img[2]} cardClass={cardEtherClass} statsClass={lastMonthClass}/>
      <DashboardOrder/>
      <DashboardChart />
  </div>;
}
