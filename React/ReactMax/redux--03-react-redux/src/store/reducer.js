import ActionMap from './ActionMap'

const initialState = {
    counter: 0
}

const reducer = (state = initialState, action) => {
    
    const storedAction = ActionMap
        .find(keyValuePair => keyValuePair.actionType === action.type);

    if (!storedAction) return state;

    return storedAction.func(state, action);
};

export default reducer;