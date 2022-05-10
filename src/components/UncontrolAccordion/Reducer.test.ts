import {reducer, StateType} from './Reducer';

test('reducer should be true', () => {
    //date
    const state: StateType = {
        isCollapsed: true,
    }
    //action
const newState = reducer(state, {type: 'TOGGLE_COLLAPSED'});
    //expected state
    expect(newState.isCollapsed).toBe(true);
})

test('reducer should be false', () => {
    //date
    const state: StateType = {
        isCollapsed: true,
    }
    //action
    const newState = reducer(state, {type: 'TOGGLE_COLLAPSED'});
    //expected state
    expect(newState.isCollapsed).toBe(false);
})
test('reducer should be error', () => {
    //date
    const state: StateType = {
        isCollapsed: false,
    }
    //action
  expect(()=>reducer(state, {type: 'FAIK_COLLAPSED'})).toThrowError();
    //expected state





})