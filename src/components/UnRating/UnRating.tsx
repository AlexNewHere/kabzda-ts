import React, {CSSProperties, useState} from 'react';

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5;

export type UnRatingType = {
    defaultValue?: RatingValueType;
    onClick: (value: RatingValueType) => void;
}


export const UnRating: React.FC<UnRatingType>  = (props) => {

    let [rating, setRating] = useState<RatingValueType>(props.defaultValue || 0);

    const onClick = (on: RatingValueType) => {
        setRating(on)
        props.onClick(on)
    }
    const ifOn = (a: RatingValueType): RatingValueType => (rating === a) ? 0 : a

    const onStyle: CSSProperties = {
        display: 'inline-block',
        cursor: 'pointer',
        marginLeft: '10px'
    }

    return (<div>
            <div style={onStyle} onClick={()=>onClick(ifOn(1))}><Star selected={rating > 0}/></div>
            <div style={onStyle} onClick={()=>onClick(ifOn(2))}><Star selected={rating > 1}/></div>
            <div style={onStyle} onClick={()=>onClick(ifOn(3))}><Star selected={rating > 2}/></div>
            <div style={onStyle} onClick={()=>onClick(ifOn(4))}><Star selected={rating > 3}/></div>
            <div style={onStyle} onClick={()=>onClick(ifOn(5))}><Star selected={rating > 4}/></div>
        </div>
    )

}

type StarPropsType = {
    selected: boolean
}
const Star = (props: StarPropsType) => {

    return <span> {props.selected ? <b>star </b> : 'star'} </span>;


}