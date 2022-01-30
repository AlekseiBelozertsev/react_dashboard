import React from 'react';
import '../container/Wallet.css';
import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';
import DashboardMain from '../components/Dashboard/Dashboard__main/DashboardMain';


function Wallet() {
    return (
        <div className='container'>
           <Header />
           <Sidebar />
           <DashboardMain />
        </div>
    )
}

export default Wallet
