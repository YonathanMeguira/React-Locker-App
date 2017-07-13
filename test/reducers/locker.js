/**
 * Created by if_found_call_0586288454 on 14/07/2017 ap. J.-C..
 */
// unit test for the the locker reducer
import assert from 'assert';
import lockerApp from '../../src/reducer/combination';

describe('locker reducer', () => {
    describe('lockerApp()', () => {
        it('should append a new element to currentValue[]', () => {
            const state = {
                currentValues: []
            }
            const action = {
                type: 'ADD_NUMBER',
                number: 2
            }
            const expected = {
                currentValues: [2]
            }
            assert.deepEqual(lockerApp(state, action), expected);
        });
        it('should return a boolean value based on === between arrays', () => {
            const state = {
                codesMatch: true
            }
            const action = {
                type: 'COMPARE_CODES',
                value: false
            }
            const expected = {
                codesMatch: false
            }
            assert.deepEqual(lockerApp(state, action), expected);
        })
    })
})

