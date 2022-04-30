import React from 'react';
import {CSSProperties, useState} from 'react';

export type UnOnOffType = {
    defaultOn?: boolean;
}


export const UnOnOff: React.FC<UnOnOffType> = (props) => {

    let [on, setOn]=useState<boolean>(props.defaultOn || false);


    const onStyle: CSSProperties = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        borderRadius: '5px',
        display: 'inline-block',
        backgroundColor: on ? 'green': 'white',
        textAlign: 'center',
        color: on ? 'white': 'black',
        cursor: 'pointer',
        padding: '2px'
    }
    const offStyle: CSSProperties = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        borderRadius: '5px',
        display: 'inline-block',
        backgroundColor: on ? 'white': 'red',
        textAlign: 'center',
        color: on ? 'black': 'white',
        cursor: 'pointer',
        padding: '2px',
        marginLeft: '5px'
    }
    const indicatorStyle: CSSProperties  = {
        width: '15px',
        height: '15px',
        borderRadius: '50%',
        display: 'inline-block',
        backgroundColor: on ? 'green': 'red',
        marginLeft: '5px'
    }

    const onClick = (on: boolean) => {
       return ()=> setOn(on)
    }

    return (
        <div>
            <div style={onStyle} onClick={onClick(true)}>On</div>
            <div style={offStyle} onClick={onClick(false)}>Off</div>
            <div style={indicatorStyle}/>
        </div>
    )
}