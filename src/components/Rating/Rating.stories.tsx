import React, {useState} from 'react';
import {Rating, RatingValueType} from './Rating';

export default {
    title: 'Rating',
    component: Rating,
}

export const EmptyStars = () => {return <Rating onClick={x => x} value={0}/>}

export const Rating1 = () => {return <Rating onClick={x => x} value={1}/>}
export const Rating2 = () => {return <Rating onClick={x => x} value={2}/>}
export const Rating3 = () => {return <Rating onClick={x => x} value={3}/>}
export const Rating4 = () => {return <Rating onClick={x => x} value={4}/>}
export const Rating5 = () => {return <Rating onClick={x => x} value={5}/>}


export const RatingChange = () => {
    const [rating, setRating]=useState<RatingValueType>(5)
    return <Rating onClick={setRating} value={rating}/>
}