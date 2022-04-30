import React, {VFC} from 'react';
import {UnRating, UnRatingType} from './UnRating';
import {action} from '@storybook/addon-actions';

export default {
    title: 'UnRating',
    component: UnRating,
}

const callback = action('onChange');

export const EmptyStars: VFC<UnRatingType> = () => {return <UnRating defaultValue={0} onClick={callback}/>}
export const Rating1: VFC<UnRatingType> = () => {return <UnRating defaultValue={1} onClick={callback}/>}
export const Rating2: VFC<UnRatingType> = () => {return <UnRating defaultValue={2} onClick={callback}/>}
export const Rating3: VFC<UnRatingType> = () => {return <UnRating defaultValue={3} onClick={callback}/>}
export const Rating4: VFC<UnRatingType> = () => {return <UnRating defaultValue={4} onClick={callback}/>}
export const Rating5: VFC<UnRatingType> = () => {return <UnRating defaultValue={5} onClick={callback}/>}

