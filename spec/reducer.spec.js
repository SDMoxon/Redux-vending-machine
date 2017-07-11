import {expect} from 'chai';
import {reducer, initialState} from '../reducers/reducer';
import * as actions from '../actions/actions';

describe('REDUCER', function () {
    it('it is a function', function () {
        expect(reducer).to.be.a('function');
    });
    // describe('action TURN_ON_MACHINE', function (){
    //     it('updates the state correctly', function () {
    //         const action = actions.turnOnMachine(true);
    //         const newState = reducer(initialState, action);
    //         console.log(newState.power);
    //         console.log(action.power);
    //         expect(newState.power).to.equal(action.power);
    //     });
    // })
    describe('action INSERT_COIN', function (){
        it('updates the state correctly', function () {
            const action = actions.insertCoin(0.2);
            const newState = reducer(initialState, action);
            expect(newState.credit).to.eql([0.2]);
        });
    })
});