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
        console.log('useEffect only first render 9componentDidMount')
    }, [])
    useEffect(() => {
        console.log('useEffect first render and every counter render')
    }, [count])

    return <>

        <button onClick={() => setCount(count + 1)}>+</button>
        <div>{count}</div>


    </>
}