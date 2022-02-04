import React from 'react';
import './Options__Icon.css'

export default function OptionsIcon(props) {
  const optionStyle = {
    backgroundColor: props.color,
  };
  return (
  <div className='Dasboard__card__options'>
      <div className='Dasboard__card__options-item' style={optionStyle}></div>
      <div className='Dasboard__card__options-item' style={optionStyle}></div>
      <div className='Dasboard__card__options-item' style={optionStyle}></div>
    </div>
    );
}
