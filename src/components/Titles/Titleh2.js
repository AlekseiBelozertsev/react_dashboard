import React from 'react'
import './Titleh2.css'

function openNav() {
    document.getElementById('Sidebar').style.width = '12em';
    document.getElementById('main').style.marginLeft = '12em';
   }

function Titleh2() {
    return (
        <div className='Title_h2' onClick={openNav}>
            <div className='Title_h2__wrapper'>
                <div className='Titleh2__hamburger'>
                    <div className='Titleh2__hamburger--item'></div>
                    <div className='Titleh2__hamburger--item'></div>
                    <div className='Titleh2__hamburger--item'></div>
                </div>
                <h2>Wallet</h2>
            </div>
        </div>
    )
}

export default Titleh2
