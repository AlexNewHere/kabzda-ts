import React from 'react';

type RatingPropsType = {
    value: number
}

export const Rating = (props: RatingPropsType) => {

    return (<div>
            <Star selected={props.value > 0}/>
            <Star selected={props.value > 1}/>
            <Star selected={props.value > 2}/>
            <Star selected={props.value > 3}/>
            <Star selected={props.value > 4}/>
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