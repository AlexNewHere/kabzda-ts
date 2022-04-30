import React, {VFC} from 'react';
import {UnOnOff, UnOnOffType} from './UncontrolOnOff';

export default {
    title: 'UnOnOff',
    component: UnOnOff,
}

export const OnMode: VFC<UnOnOffType> = () => {return <UnOnOff defaultOn={true}  />}
export const OffMode: VFC<UnOnOffType> = () => {return <UnOnOff defaultOn={false} />}

export const ModeChanging: VFC<UnOnOffType> = () => {
    return <UnOnOff />
}


