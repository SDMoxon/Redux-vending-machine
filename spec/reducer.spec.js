import {expect} from 'chai';
import {reducer, initialState} from '../reducers/reducer';
import * as actions from '../actions/actions';

describe('REDUCER', function () {
    it('it is a function', function () {
        expect(reducer).to.be.a('function');
    });
    describe('action INSERT_COIN', function (){
        it('updates the state correctly', function () {
            const action = actions.insertCoin(0.2);
            const newState = reducer(initialState, action);
            expect(newState.credit).to.eql([0.2]);
        });
    });
    describe('action REPLENISH_STOCK', () => {
        it('adds qty to existing stock', () => {
            const row = 'A1';
            const action = actions.replenishStock(row, 10);
            const newState = reducer(initialState, action); 
            expect(newState.stock[row].quantity).to.equal(20);
        });
        it('is immutable', () => {
            const row = 'A1';
            const action = actions.replenishStock(row, 10);
            const newState = reducer(initialState, action); 
            expect(newState).to.not.eql(initialState);
            expect(newState.stock).to.not.eql(initialState.stock);
            expect(newState.stock[row]).to.not.eql(initialState.stock[row]);
        });
    });
});