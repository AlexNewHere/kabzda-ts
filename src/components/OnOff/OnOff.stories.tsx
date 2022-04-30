import React from 'react';
import {action} from '@storybook/addon-actions';
import {OnOff, OnOffType} from './OnOff';
import {Story} from '@storybook/react';

export default {
    title: 'OnOff',
    component: OnOff,
}

const callback = action('On or Off clicked');

const Template: Story<OnOffType> = (args) => <OnOff {...args}/>

export const IsOn = Template.bind({});
IsOn.args = {
    on: true,
    setOn: callback
}
export const IsOff = Template.bind({});
IsOff.args = {
    on: false,
    setOn: callback
}


// export const ModeChanging: Story<OnOffType> = () => {
//     const [value, setValue] = useState<boolean>(true)
//     return <OnOff on={value} setOn={setValue}/>
// }


