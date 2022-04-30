import React, {CSSProperties} from 'react';


export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5;

type RatingPropsType = {
    value: number
    onClick: (value: RatingValueType) => void
}

export const Rating = (props: RatingPropsType) => {


    return (<div>
            <Star selected={props.value > 0} onClick={props.onClick} value={1}/>
            <Star selected={props.value > 1} onClick={props.onClick} value={2}/>
            <Star selected={props.value > 2} onClick={props.onClick} value={3}/>
            <Star selected={props.value > 3} onClick={props.onClick} value={4}/>
            <Star selected={props.value > 4} onClick={props.onClick} value={5}/>
        </div>
    )

}

type StarPropsType = {
    selected: boolean
    value: RatingValueType
    onClick: (value: RatingValueType) => void
}

const Star = (props: StarPropsType) => {

    const onStyle: CSSProperties = {
        display: 'inline-block',
        cursor: 'pointer',
        marginLeft: '10px'
    }

    const onClick = () => {
       props.onClick(props.value)
    }



    return <div style={onStyle} onClick={onClick}>

        {props.selected ? <b>star </b> : 'star'}
    </div>;
}