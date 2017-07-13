/**
 * Created by if_found_call_0586288454 on 13/07/2017 ap. J.-C..
 */
// actions type
export const ADD_NUMBER = 'ADD_NUMBER';
export const COMPARE_CODES = 'COMPARE_CODES';
// actions creator
export function addNumber(number, index) {
    return {
        type: ADD_NUMBER,
        number, index
    }
}
export function compareCodes(value) {
    return {
        type: COMPARE_CODES,
        value
    }
}