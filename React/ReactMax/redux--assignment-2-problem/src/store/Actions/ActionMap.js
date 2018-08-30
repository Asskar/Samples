import ActionTypes from './ActionTypes'

const ActionMap = [
    { actionType: ActionTypes.ADD_PERSON, func: state => addPerson(state) },
    { actionType: ActionTypes.REMOVE_PERSON, func: (state, { payload }) => removePerson(state, payload) },
]

const addPerson = state => {
    const newPerson = {
        id: Math.random(),
        name: 'Max',
        age: Math.floor(Math.random() * 40)
    };

    return { ...state, persons: state.persons.concat(newPerson) };
}

const removePerson = (state, { id }) => {
    return { ...state, persons: state.persons.filter(person => person.id !== id) };
}

export default ActionMap;