import React from 'react';
import './Sidebar.css'

function closeNav() {
 document.getElementById('Sidebar').style.width = '0em';
 document.getElementById('main').style.marginLeft = '0';
}

export default function Sidebar() {
  return <div className='Sidebar__wrapper' tabIndex={0} id='Sidebar'>
            <nav className='Sidebar__nav'>
                <a className='Sidebar__nav__closebtn' onClick={closeNav}>&times;</a>
                <a className='Sidebar__nav__item-1' href='#'>Dashboard</a>
                <a className='Sidebar__nav__item-2' href='#'>Wallet</a>
                <a className='Sidebar__nav__item-3' href='#'>Transaction</a>
                <a className='Sidebar__nav__item-4' href='#'>Crypto</a>
                <a className='Sidebar__nav__item-5' href='#'>Exchange</a>
                <a className='Sidebar__nav__item-6' href='#'>Settings</a>
            </nav>
        </div>;
}
