import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {OnOff} from './components/OnOff/OnOff';
import {UnControlAccordion} from './components/UncontrolAccordion/UncontrolAccordion';

const App = () => {
    return (
        <div>
            {/*<PageTitle title={'This is APP component'}/>*/}
            {/*<PageTitle title={'APP component'}/>*/}
            {/*<Rating value={0}/>*/}

            <OnOff />
            <OnOff />
            <UnControlAccordion titleValue={'Menu'}/>
            <UnControlAccordion titleValue={'Menu'}/>


            {/*<Accordion titleValue={'Menu'} collapsed={true}/>*/}
            {/*<Accordion titleValue={'User'} collapsed={false}/>*/}
            <Rating value={5}/>
            {/*<Rating value={4}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={2}/>*/}
            {/*<Rating value={1}/>*/}
        </div>
    )
}
type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log('PageTitle')
    return <h1>{props.title}</h1>
}


export default App;
