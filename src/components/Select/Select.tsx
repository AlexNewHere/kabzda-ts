import React from 'react';
import s from './Select.module.css';

type ItemType = {
    title: string,
    value: string
}

export type SelectPropsType = {
    value: any
    onChange: (value: any) => void
    items: ItemType[]
}

const Select = (props: SelectPropsType) => {

    const [active, setActive] = React.useState(false);

    const selectItem=()=>{setActive(!active)}
const onItemClick = (value: string) => {
    props.onChange(value); selectItem()
}

    const SelectedItems = props.items.find(i => i.value === props.value)

    return (
        <div className={s.select}>
            <div onClick={selectItem}>
                {SelectedItems && SelectedItems.title}
            </div>
            { active &&
            <div className={s.items}>
                {props.items.map(item => <div
                    key={item.value}
                    onClick={()=>onItemClick(item.value)}>
                {item.title}
                </div>)}
            </div>}
        </div>
    );
};

export default Select;