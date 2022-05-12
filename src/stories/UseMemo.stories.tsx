import React, {useMemo} from 'react';

export default {
    title: 'useMemo',
}


export const CountExample = () => {

    const [a, setA] = React.useState(3);
    const [b, setB] = React.useState(5);


    let resultB = 1

    let resultA = useMemo(() => {
        let result = 1;
        for (let i = 1; i < a; i++) {
            let fake = 0
            while (fake < 10000000) {
                fake++
                const fakeValue = Math.random()
            }
            result = result * i
        }
        return result
    }, [a])

    for (let i = 1; i < b; i++) {
        resultB *= i
    }

    return <>
        <input value={a} type={'number'} onChange={(e) => setA(Number(e.currentTarget.value))}/>
        <input value={b} type={'number'} onChange={(e) => setB(Number(e.currentTarget.value))}/>
        <hr/>
        <div>Result for a: {resultA}</div>
        <div>Result for b: {resultB}</div>
    </>
}


const User = (props: { users: Array<string> }) => {
    console.log('User render')
    return <div>{props.users.map((u, i) => <div key={i}>{u}</div>)}</div>
}

const User2 = React.memo(User)

export const Example = () => {
    console.log('Example render')
    const [count, setCount] = React.useState(0);
    const [users, setUsers] = React.useState(['Alex', 'Vika', 'Sveta']);

    const newArray = useMemo(() => {
        const newArray=users.filter(el => el.toLowerCase().indexOf('a'))
        return newArray
    }, [users])

    return <>
        <button onClick={() => setCount(count + 1)}>+</button>
        {count}
        <hr/>
        <button onClick={() => setUsers([...users, 'Ira'])}>+</button>
        <User2 users={newArray}/>

    </>
}