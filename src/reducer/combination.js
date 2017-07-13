/**
 * Created by if_found_call_0586288454 on 13/07/2017 ap. J.-C..
 */
import {ADD_NUMBER} from '../action/actions';
import {COMPARE_CODES} from '../action/actions';

const initial_state = {
    secretCode: [2, 6, 5, 2],
    currentCode: [],
    codesMatch: 'nine'
}

export function lockerApp(state = initial_state, action) {
    switch (action.type) {
        case ADD_NUMBER:
            state.currentCode[action.index] = action.number;
            return Object.assign({}, state, {
                currentCode: state.currentCode
            })
        case COMPARE_CODES:
            return Object.assign({}, state, {
                codesMatch: action.value
            })
        default:
            return state;
    }

}