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

const Templated: Story<AccordionPropsType> = (args) => <Accordion {...args} />

export const CollapsedMode = Templated.bind({});
CollapsedMode.args = {
    titleValue: 'Menu',
    collapsed: true,
    setAccordion: callback,
}
export const UnCollapsedMode = Templated.bind({});
UnCollapsedMode.args = {
    titleValue: 'Menu',
    collapsed: false,
    setAccordion: callback,
}


export const ModeChanging: Story<AccordionPropsType> = (args) => {
    const [value, setValue] = useState<boolean>(true)
    return <Accordion {...args} collapsed={value} setAccordion={() => setValue(!value)}/>
}
ModeChanging.args = {
    titleValue: 'Menu',
    collapsed: false,
}

