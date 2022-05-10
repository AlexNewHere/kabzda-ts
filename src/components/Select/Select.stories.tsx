import React from 'react';
import {action} from '@storybook/addon-actions';
import {Story} from '@storybook/react';
import Select, {SelectPropsType} from './Select';

export default {
    title: 'Select',
    component: Select,
}


export const WithValue: Story<SelectPropsType> = () => {

    const [value, setValue] = React.useState('1');

    return <Select
        value={value}
        onChange={setValue}
        items={[
            {value: '1', title: 'Minsk'},
            {value: '2', title: 'Grodno'},
            {value: '3', title: 'Gomel'}]}
    />
}

export const WithoutValue: Story<SelectPropsType> = () => {

    const [value, setValue] = React.useState(null);

    return <Select
        value={value}
        onChange={setValue}
        items={[
            {value: '1', title: 'Minsk'},
            {value: '2', title: 'Grodno'},
            {value: '3', title: 'Gomel'}]}
    />
}



