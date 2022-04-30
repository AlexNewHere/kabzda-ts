import React from 'react';
import {UnControlAccordion} from './UncontrolAccordion';
import {Story} from '@storybook/react';
import {AccordionPropsType} from '../Accordion/Accordion';

export default {
    title: 'UnControlAccordion',
    component: UnControlAccordion,
}


export const ModeChanging: Story<AccordionPropsType> = () => {
    return <UnControlAccordion titleValue={'Menu'}/>
}


