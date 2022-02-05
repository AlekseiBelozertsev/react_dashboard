import React from 'react'

export default function RoundBtn(props) {
    const roundBtnStyle = {
        position: 'relative',
        width: '2em',
        height: '2em',
        padding: '.45em',
        borderRadius: '1em',
        backgroundColor: 'grey',
        border: 'none',
        cursor: 'pointer',
    }

    return <button style={roundBtnStyle}>{props.svg}</button> 
};
