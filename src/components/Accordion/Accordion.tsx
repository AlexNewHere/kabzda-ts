import React from "react";


type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
}
const Accordion = (props: AccordionPropsType) => {
    console.log('Accordion')
    return (<>
        <AccordionTitle title={props.titleValue}/>
        <AccordionBody collapsedBody={props.collapsed}/>
    </>)
}

type AccordionTitlePropsType = {
    title: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle')
    return <h3>{props.title}</h3>
}

type AccordionBodyPropsType = {
    collapsedBody: boolean
}

function AccordionBody(props: AccordionBodyPropsType) {
    console.log('AccordionBody')
    if (props.collapsedBody) {
        return (<ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>)
    }
    else return <div></div>
}

export default Accordion