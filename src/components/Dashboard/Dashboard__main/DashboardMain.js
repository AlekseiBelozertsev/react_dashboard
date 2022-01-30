import React from 'react';
import DashboardCardBinance from '../Dashboard__cards/Binance/Dashboard__card-binance';
import DashboardCardBitcoin from '../Dashboard__cards/Bitcoin/DashboardCardBitcoin';
import DashboardCardEtherum from '../Dashboard__cards/Ethereum/DashboardCardEthereum';
import DashboardFilter from '../Dashboard__filter/DashboardFilter';
import DashboardOrder from '../Dashboard__order/DashboardOrder';
import DashboardTitle from '../Dashboard__titles/Dashboard_Title/DashboardTitle';
import DashboardChart from '../Dashboard__chart/DashboardChart';
import './Dashboard__main.css';

export default function DashboardMain() {
  return <div className='Dashboard__main' id='main'>
      <DashboardTitle />
      <DashboardFilter />
      <DashboardCardBinance />
      <DashboardCardBitcoin />
      <DashboardCardEtherum />
      <DashboardOrder />
      <DashboardChart />
  </div>;
}
