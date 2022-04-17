import React from 'react';


type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    setAccordion: () => void
}
export const Accordion = (props: AccordionPropsType) => {
    return (<>
        <AccordionTitle title={props.titleValue} onClick={props.setAccordion} collapsed={props.collapsed}/>
        {!props.collapsed && <AccordionBody/>}
    </>)
}

type AccordionTitlePropsType = {
    title: string
    collapsed: boolean
    onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return <h3 onClick={props.onClick}>{props.title}</h3>
}

function AccordionBody() {
    return (<ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>)
}

