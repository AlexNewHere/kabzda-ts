import React, {useCallback, useMemo} from 'react';


const Book = (props: { books: Array<string>, addBooks: ()=> void }) => {
    console.log('books render')
    return <>
        <button onClick={props.addBooks}>+</button>
    <div>{props.books.map((u, i) => <div key={i}>{u}</div>)}</div>
        </>
}

const Book2 = React.memo(Book)

export const BookExample = () => {
    console.log('Example render')
    const [count, setCount] = React.useState(0);
    const [books, setBooks] = React.useState(['React', 'TS', 'JS']);

    const newArray = useMemo(() => {
        const newArray=books.filter(el => el.toLowerCase().indexOf('a'))
        return newArray
    }, [books])

    const addBooks = useCallback(() => {
        setBooks([...books, 'Vue']);
    }, [books])

    return <>
        <button onClick={() => setCount(count + 1)}>+</button>
        {count}
        <hr/>

        <Book2 books={newArray} addBooks={addBooks}/>

    </>
}