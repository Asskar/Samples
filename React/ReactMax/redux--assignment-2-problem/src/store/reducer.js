import ActionMap from './Actions/ActionMap'

const initialState = {
    persons: []
}

const reducer = (state = initialState, action) => {
    const keyFuncPair = ActionMap.find(act => act.actionType === action.type);
    if (!keyFuncPair) { return state; }

    return keyFuncPair.func(state, action);
}

export default reducer;