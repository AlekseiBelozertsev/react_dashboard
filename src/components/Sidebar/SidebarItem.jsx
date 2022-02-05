import React from 'react';



export default function SidebarItem(props) {
    const sidebarItemStyle = {
        padding: '.2em .2em .7em 2em',
        textDecoration: 'none',
        fontSize: '1.2rem',
        fontFamily: 'Inter',
        color: '$text_icons',
        display: 'block',
        transition: '0.5s',
        cursor: 'pointer',
        "&:hover": {
            color: '$white',
            // color: 'rgba(255, 255, 255)',
        }
    }
    const icon = {
        position: 'absolute',
        width: '1.5rem',
        height: '1.5rem',
        left: '0.5em',
    }
    
  return (
    <div>
        <div style={icon}>{props.svg}</div>
        <a className='Sidebar__nav__item' href={props.link} style={sidebarItemStyle}>{props.name}</a>
    </div>
  );
}
