import React from 'react';
import {Clock, PropsType} from './Clock';
import {Story} from '@storybook/react';

export default {
    title: 'clock ',
    component: Clock
}

const Example: Story<PropsType> = (args) => <Clock {...args}/>

export const IsOn = Example.bind({});
IsOn.args = {
    isView: true
}