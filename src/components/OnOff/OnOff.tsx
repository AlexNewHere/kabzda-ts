import React, {CSSProperties} from 'react';

export type OnOffType = {
    on: boolean,
    setOn: (value: boolean) => void
}

export const OnOff: React.FC<OnOffType> = ({on, setOn}) => {

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

    const onClick = () => {
        setOn(true)
    }

    const offClick = () => {
       setOn(false)
    }

    return (
        <div>
            <div style={onStyle} onClick={onClick}>On</div>
            <div style={offStyle} onClick={offClick}>Off</div>
            <div style={indicatorStyle}/>
        </div>
    )
}