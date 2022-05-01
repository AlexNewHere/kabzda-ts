import React from 'react';


export type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    setAccordion: () => void
    color?: string
}
export const Accordion = (props: AccordionPropsType) => {
    return (<>
        <AccordionTitle
           color={props.color}
            title={props.titleValue}
            onClick={props.setAccordion}
            collapsed={props.collapsed}/>
        {!props.collapsed && <AccordionBody/>}
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
        onClick={()=>props.onClick()}
    style={{color: props.color? props.color: 'black'}}

    >{props.title}</h3>
}

function AccordionBody() {
    return (<ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>)
}

