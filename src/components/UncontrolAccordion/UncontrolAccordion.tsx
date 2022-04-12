import React, {useState} from 'react';

type AccordionPropsType = {
    titleValue: string
}

type AccordionTitlePropsType = {
    title: string
    onAccord: (onOff: boolean) => void
    ifElseOn: boolean
}

export const UnControlAccordion = (props: AccordionPropsType) => {

  let [onAccordion, setAccordion] = useState<boolean>(false);

console.log(onAccordion)

  const onAccord = (onAccordion: boolean) => {
        setAccordion(onAccordion)
    }
    return (<>
        <AccordionTitle title={props.titleValue} onAccord={onAccord} ifElseOn={onAccordion}/>
        {onAccordion && <AccordionBody/>}
    </>)
}

function AccordionTitle(props: AccordionTitlePropsType) {

    const onStyle = {
        width: 'min-content',
        cursor: 'pointer'
    }

    const onAccordClick = (a: boolean) => {
       return ()=>props.onAccord(a)
    }

    return (
    <div style={onStyle} onClick={onAccordClick(!props.ifElseOn)}>
        <h3>{props.title}</h3>
    </div>
    )
}

function AccordionBody() {
    return (<ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>)
}

