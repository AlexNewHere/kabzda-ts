import React, {useEffect} from 'react';

export default {
    title: 'useEffect ',
}

export const Example = () => {
    console.log('Example render')

    const [count, setCount] = React.useState(1);

    useEffect(() => {
        console.log('useEffect every render')
    })
    useEffect(() => {
        console.log('useEffect only first render componentDidMount')
    }, [])
    useEffect(() => {
        console.log('useEffect first render and every counter render')
    }, [count])

    return <>

        <button onClick={() => setCount(count + 1)}>+</button>
        <div>{count}</div>


    </>
}


export const SetTimeoutExample = () => {
    console.log('SetTimeoutExample')

    const [count, setCount] = React.useState(1);

    useEffect(() => {
        console.log('useEffect every render')
        setTimeout(() => {
            console.log('setTimeout render later 1s')
        }, 1000)

        // setInterval(() => {
        //     console.log('setInterval render every 1s')
        // }, 1000)

    }, [])

    return <>

        <button onClick={() => setCount(count + 1)}>+</button>
        <div>{count}</div>
    </>
}

export const ReseEffectExample = ()=> {

    const [counter, setCounter] = React.useState(1);

    useEffect(()=>{
        console.log('effect '+counter)
        return ()=> {
            console.log('reset '+counter)
        }
    }, [counter])

    const increase = ()=>{setCounter(counter+1)}

    return <>
        Hello counter {counter} <button onClick={increase}>+</button>
    </>

}

export const KeysTrackerExample = ()=> {

    const [text, setText] = React.useState('');

    useEffect(()=>{

        const handkler= (e: KeyboardEvent)=>{
            console.log(e.key)
            setText(text+e.key)
        }
        window.document.addEventListener('keypress', handkler)

        return ()=> {
            window.document.removeEventListener('keypress', handkler)
        }
    }, [text])



    return <>
        Type {text}
    </>

}