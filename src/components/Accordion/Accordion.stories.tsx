import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import {Accordion, AccordionPropsType} from './Accordion';
import {Story} from '@storybook/react';

export default {
    title: 'Accordion',
    component: Accordion,
}

const callback = action('Accordion change clicked');

export const CollapsedMode: Story<AccordionPropsType> = (args) => <Accordion {...args} />

CollapsedMode.args = {
    titleValue: 'Menu',
    collapsed: true,
    setAccordion: callback,
}

export const UnCollapsedMode: Story<AccordionPropsType> = () => {
    return <Accordion titleValue={'Users'} collapsed={false} setAccordion={callback}/>
}

export const ModeChanging: Story<AccordionPropsType> = () => {
    const [value, setValue] = useState<boolean>(true)
    return <Accordion collapsed={value} titleValue={'Menu'} setAccordion={() => setValue(!value)}/>
}


