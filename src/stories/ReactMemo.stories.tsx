import React from 'react';

export default {
    title: 'ReactMemo',
}

const Header = (props: any) => {
    return <div>{props.count}</div>
}

const User = (props: {users: Array<string>}) => {
    console.log('User render')
    return <div>{props.users.map((u, i)=><div key={i}>{u}</div>)}</div>
}

const User2 = React.memo(User)

export const Example = () => {

    const [count, setCount] = React.useState(0);
    const [users, setUsers] = React.useState(['Alex', 'Vika', 'Sveta']);

return <>
    <Header count={count} />
    <button onClick={()=>setCount(count+1)}>+</button>
<hr/>
    <User2 users={users} />
    <button onClick={()=>setUsers([...users, 'Ira'])}>+</button>
    </>
}