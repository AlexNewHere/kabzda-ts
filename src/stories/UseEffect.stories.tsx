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