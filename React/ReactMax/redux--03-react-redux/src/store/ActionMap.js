import ActionTypes from './ActionTypes'

const ActionDictionary = [
    { actionType: ActionTypes.INCREMENT, func: (state) => increment(state) },
    { actionType: ActionTypes.DECREMENT, func: (state) => decrement(state) },
    { actionType: ActionTypes.ADD, func: (state, { payload }) => add(state, payload) },
    { actionType: ActionTypes.SUB, func: (state, { payload }) => sub(state, payload) }
]

const increment = (state) => {
    return { counter: state.counter + 1 }
}

const decrement = (state) => {
    return { counter: state.counter + 1 }
}

const add = (state, payload) => {
    return { counter: state.counter + payload }
}

const sub = (state, payload) => {
    return { counter: state.counter - payload }
}

export default ActionDictionary;