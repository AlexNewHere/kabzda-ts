import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import {Accordion, AccordionPropsType} from './Accordion';
import {Story} from '@storybook/react';

export default {
    title: 'Accordion',
    component: Accordion,

    argTypes: {
        color: {
            control: 'color',
        }
    }
}

const callback = action('Accordion change clicked');
const onClickCallback = (value: any)=> {alert(`some item clicked ${value}`)};

const Templated: Story<AccordionPropsType> = (args) => <Accordion {...args} />

export const CollapsedMode = Templated.bind({});
CollapsedMode.args = {
    titleValue: 'Menu',
    collapsed: true,
    items: [ {title: 'Alex', value: 1},
        {title: 'Gleb', value: 1},
        {title: 'Vika', value: 1}],
    setAccordion: callback,
    onClick: onClickCallback
}
export const UnCollapsedMode = Templated.bind({});
UnCollapsedMode.args = {
    titleValue: 'Menu',
    collapsed: false,
    items:  [ {title: 'Alex', value: 1},
        {title: 'Gleb', value: 1},
        {title: 'Vika', value: 1}],
    setAccordion: callback,
    onClick: onClickCallback
}


export const ModeChanging: Story<AccordionPropsType> = (args) => {
    const [value, setValue] = useState<boolean>(true)
    return <Accordion {...args} collapsed={value} setAccordion={() => setValue(!value)}/>
}
ModeChanging.args = {
    titleValue: 'Menu',
    collapsed: false,
    items:  [ {title: 'Alex', value: 1},
        {title: 'Gleb', value: 1},
        {title: 'Vika', value: 1}],
}

