import React, {CSSProperties, useState} from 'react';


export const UnRating = () => {

    let [rating, setRating] = useState(0);

    const onClick = (on: number) => {
        return () => setRating(on)
    }
    const ifOn = (): number => {
        return (rating === 1) ? 0 : 1;
    }

    const onStyle: CSSProperties = {
        display: 'inline-block',
        cursor: 'pointer',
        marginLeft: '10px'
    }
    return (<div>
            <div style={onStyle} onClick={onClick(ifOn())}><Star selected={rating > 0}/></div>
            <div style={onStyle} onClick={onClick(2)}><Star selected={rating > 1}/></div>
            <div style={onStyle} onClick={onClick(3)}><Star selected={rating > 2}/></div>
            <div style={onStyle} onClick={onClick(4)}><Star selected={rating > 3}/></div>
            <div style={onStyle} onClick={onClick(5)}><Star selected={rating > 4}/></div>
        </div>
    )

}

type StarPropsType = {
    selected: boolean
}
const Star = (props: StarPropsType) => {
    const res = (props.selected) ?
        <span><b>star </b></span>
        : <span>star </span>;
    return res

}