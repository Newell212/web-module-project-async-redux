import {GET_NEW_IDEA} from '../actions/boredActions';

const initialState = {
    newIdea: ''
}

export const boredReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_NEW_IDEA:
            return {...state, newIdea: action.payload}
    }
}