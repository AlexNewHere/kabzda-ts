import React, {useEffect} from 'react';

export default {
    title: 'useState ',
}

function genereateRandomNumber() {
    console.log('genereateRandomNumber');
    return Math.floor(Math.random() * 10);
}


export const Example = () => {
    console.log('Example render')

    const [count, setCount] = React.useState(genereateRandomNumber);


    const [change, setChange] = React.useState(genereateRandomNumber);

    const changer = (state: number) => {
        return state + 1;
    }

    return <>
        <button onClick={() => setCount(count + 1)}>+</button>
        <div>{count}</div>

 <button onClick={() => setChange(changer)}>+</button>
        <div>{change}</div>


    </>
}


