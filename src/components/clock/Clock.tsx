import React, {useEffect, useState} from 'react';
import './clock.css';

export type PropsType = {
    isView: boolean;
};

const getTimeString = (num: number) => num < 10 ? `0${num}` : `${num}`;

export const Clock = (props: PropsType) => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {

        const intervalId = setInterval(() => {
            console.log('Clock: useEffect');
            setDate(new Date());
        }, 1000);
        return () => {
            clearInterval(intervalId);
        };
    }, []);

    const hour = Number(getTimeString(date.getHours())) * 30;
    const minute = Number(getTimeString(date.getMinutes())) * 6;
    const second = Number(getTimeString(date.getSeconds()))*6

    return (
        <div> { props.isView ? (<div>
                <span>{getTimeString(date.getHours())}</span>
                :
                <span>{getTimeString(date.getMinutes())}</span>
                :
                <span>{getTimeString(date.getSeconds())}</span>
            </div>) :
            (<div className='body'>
                <div className="clock">
                    <div className="wrap">
                        <span className="hour" style={{transform: `rotate(${hour}deg)`}}></span>
                        <span className="minute" style={{transform: `rotate(${minute}deg)`}}></span>
                        <span className="second" style={{transform: `rotate(${second}deg)`}}></span>
                        <span className="dot"></span>
                    </div>
                </div>
            </div>)
             }
        </div>
    )
}