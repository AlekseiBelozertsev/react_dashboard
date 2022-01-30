import React from 'react'
import Titleh2 from '../Titles/Titleh2';
import MsgsBtn from '../Messages_button/Msgs_btn';
import NotsBtn from '../Notifications_button/Nots_btn';
import SettingsBtn from '../Settings_btn/Settings_btn';
import Input from '../Input/Input';


function Header() {
    return (
        <div className='Header' id='Header'>
            <Titleh2/>
            <div className='Header__insideWrapper'>
                <i className='Header__insideWrapper--icon'><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" className="svg-inline--fa fa-search fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#B9B9B9" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path></svg></i>
                <Input />
                <div className='Header__insidewrapper__utilsWrapper'>
                    <MsgsBtn />
                    <NotsBtn />
                    <SettingsBtn />
                </div>
            </div>
        </div>
    )
}

export default Header
