import React, {useState} from 'react';
import './App.css';
import {Accordion} from './components/Accordion/Accordion';
import {Rating, RatingValueType} from './components/Rating/Rating';
import {OnOff} from './components/OnOff/OnOff';
// import {UnOnOff} from './components/UncontrolOnOff/UncontrolOnOff';
// import {UnControlAccordion} from './components/UncontrolAccordion/UncontrolAccordion';
// import {UnRating} from './components/UnRating/UnRating';

const App = () => {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0);

    let [accordion, setAccordion] = useState<boolean>(false);

    let [on, setOn]=useState<boolean>(false)

    return (
        <div className={'app'}>
            {/*<PageTitle title={'APP component'}/>*/}
            {/*<Rating value={0}/>*/}

            {/*<UnOnOff />*/}
            <OnOff on={on} setOn={setOn} />

            {/*<UnControlAccordion titleValue={'Menu'}/>*/}
            {/*<UnRating />*/}
            {/*<Accordion titleValue={'Menu'} collapsed={true}/>*/}

            <Accordion titleValue={'User'}
                       collapsed={accordion}
                       setAccordion={()=>setAccordion(!accordion)}/>

            <Rating value={ratingValue} onClick={setRatingValue}/>
        </div>
    )
}
// type PageTitlePropsType = {
//     title: string
// }
//
// function PageTitle(props: PageTitlePropsType) {
//     console.log('PageTitle')
//     return <h1>{props.title}</h1>
// }


export default App;
