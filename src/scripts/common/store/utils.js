/**
 * utils
 **/

import {store} from './index';

export function createConstants(...constants) {
    return constants.reduce((acc, constant) => {
        acc[constant] = constant;
        return acc;
    }, {});
}

export function createReducer(initialState, reducerMap) {
    return (state = initialState, action) => {
        const reducer = reducerMap[action.type];

        return reducer
            ? reducer(state, action.payload)
            : state;
    };
}

export const createAction = (actionType, actionData) => {
    return store.dispatch({
        type: actionType,
        payload: actionData
    });
};