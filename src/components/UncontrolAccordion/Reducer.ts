export type ActionType = {
    type: string
}
export type StateType = {
    isCollapsed: boolean
}


const TOGGLE_COLLPSED = 'TOGGLE-COLLAPSED';
export const AccordionActionCreater = (): ActionType => ({type: TOGGLE_COLLPSED})

export const reducer = (state: StateType, action: ActionType): StateType => {
    switch (action.type) {
        case 'TOGGLE-COLLAPSED':
            return {...state, isCollapsed: !state.isCollapsed}
        default:
            throw new Error('Unknown action')
    }

}