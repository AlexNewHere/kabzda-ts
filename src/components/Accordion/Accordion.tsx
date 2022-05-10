import React from 'react';

type ItemType = {
  title: string;
  value: any;
}


export type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    setAccordion: () => void
    color?: string
    items: Array<ItemType>
    onClick: (value: any) => void
}

const items = [
    {title: 'Alex', value: 1},
    {title: 'Gleb', value: 1},
    {title: 'Vika', value: 1}
    ];

export const Accordion = (props: AccordionPropsType) => {
    return (<>
        <AccordionTitle
            color={props.color}
            title={props.titleValue}
            onClick={props.setAccordion}
            collapsed={props.collapsed}/>
        {!props.collapsed && <AccordionBody onClick={props.onClick} items={props.items}/>}
    </>)
}

type AccordionTitlePropsType = {
    title: string
    collapsed: boolean
    onClick: () => void
    color?: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return <h3
        onClick={() => props.onClick()}
        style={{color: props.color ? props.color : 'black'}}

    >{props.title}</h3>
}

export type AccordionBodyPropsType = {
    items: Array<ItemType>
    onClick: (value: any) => void
}

function AccordionBody(props: AccordionBodyPropsType) {
    return (<ul>
        {props.items.map((i, index) => <li key={index} onClick={()=>props.onClick(i.value)}   >{i.title}</li>)}
    </ul>)
}

