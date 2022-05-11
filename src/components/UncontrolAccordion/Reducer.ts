export type ActionType = {
    type: string
}
export type StateType = {
    isCollapsed: boolean
}

export const reducer = (state: StateType, action: AccordionACType): StateType => {
    switch (action.type) {
        case 'TOGGLE-COLLAPSED':
            return {...state, isCollapsed: !state.isCollapsed}
        default:
            throw new Error('Unknown action')
    }
}

type AccordionACType = ReturnType<typeof AccordionActionCreater>

export const AccordionActionCreater = (): ActionType => {
    return {
        type: 'TOGGLE-COLLAPSED'
    } as const
}
