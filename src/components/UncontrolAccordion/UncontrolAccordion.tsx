import React, {CSSProperties, useReducer} from 'react';
import {AccordionActionCreater, ActionType, reducer, StateType} from './Reducer';

type AccordionPropsType = {
    titleValue: string
}

type AccordionTitlePropsType = {
    title: string
    onAccord: (action: ActionType) => void
    ifElseOn: StateType
}


export const UnControlAccordion = (props: AccordionPropsType) => {

    // let [onAccordion, setAccordion] = useState<boolean>(false);
    let [onAccordion, dispatch] = useReducer(reducer, {isCollapsed: false});

    const onAccord = (action: ActionType) => {
        dispatch(action)
    }
    return (<>
        <AccordionTitle title={props.titleValue} onAccord={onAccord} ifElseOn={onAccordion}/>
        {!!onAccordion.isCollapsed && <AccordionBody/>}
    </>)
}

function AccordionTitle(props: AccordionTitlePropsType) {

    const onStyle: CSSProperties = {
        width: 'min-content',
        cursor: 'pointer'
    }

    const onAccordClick = (a: ActionType) => {
        return () => props.onAccord(a)
    }

    return (
        <div style={onStyle} onClick={onAccordClick(AccordionActionCreater())}>
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

