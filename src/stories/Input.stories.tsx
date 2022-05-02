import React, {ChangeEvent, useRef, useState} from 'react';


export default {
    title: 'Example/Input',
    // component: input
}

export const UncontrolledInput = () => <input/>;

export const UncontrolledInputTargetValue = () => {
    let [value, setValue] = useState<string>('')
    return (
        <>
            <input onChange={(e) => setValue(e.currentTarget.value)}/> {value}
        </>
    )
}

export const GetTargetValuePressButton = () => {
    let [value, setValue] = useState<string>('')
    const inputRef = useRef<HTMLInputElement>(null)

    return (
        <>
            <input ref={inputRef}/>
            <button onClick={() => {
                const el = inputRef.current as HTMLInputElement
                setValue(el.value)
            }}> save
            </button>
            Actual value: {value}
        </>
    )
}


export const ControlledInput = () => {
    let [value, setValue] = useState<string>('')

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }

    return <>
        <input value={value} onChange={onChange}/> {value}
    </>
}

export const ControlledCheckBox = () => {
    let [value, setValue] = useState<boolean>(false)

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.checked)
    }

    return <>
        <input type={'checkbox'} checked={value}  onChange={onChange}/>
    </>
}

export const ControlledSelect = () => {
    let [value, setValue] = useState<string | undefined>(undefined)

    const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setValue(e.currentTarget.value)
    }

    return <>
        <select value={value} onChange={onChange}>
            <option>none</option>
            <option value={'1'}>Nick</option>
            <option value={'2'}>Alex</option>
        </select>

    </>
}


// export const Primary = Template.bind({});
// Primary.args = {
//   primary: true,
//   label: 'Button',
// };


