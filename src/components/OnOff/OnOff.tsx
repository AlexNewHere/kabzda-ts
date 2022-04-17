import React, {CSSProperties, useState} from 'react';

type OnOffType = {
    on: boolean,
    setOn: (value: boolean) => void
}

export const OnOff: React.FC<OnOffType> = (props: OnOffType) => {

    const onStyle: CSSProperties = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        borderRadius: '5px',
        display: 'inline-block',
        backgroundColor: props.on ? 'green': 'white',
        textAlign: 'center',
        color: props.on ? 'white': 'black',
        cursor: 'pointer',
        padding: '2px'
    }
    const offStyle: CSSProperties = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        borderRadius: '5px',
        display: 'inline-block',
        backgroundColor: props.on ? 'white': 'red',
        textAlign: 'center',
        color: props.on ? 'black': 'white',
        cursor: 'pointer',
        padding: '2px',
        marginLeft: '5px'
    }
    const indicatorStyle: CSSProperties  = {
        width: '15px',
        height: '15px',
        borderRadius: '50%',
        display: 'inline-block',
        backgroundColor: props.on ? 'green': 'red',
        marginLeft: '5px'
    }

    const onClick = () => {
        props.setOn(true)
    }

    const offClick = () => {
        props.setOn(false)
    }

    return (
        <div>
            <div style={onStyle} onClick={onClick}>On</div>
            <div style={offStyle} onClick={offClick}>Off</div>
            <div style={indicatorStyle}/>
        </div>
    )
}