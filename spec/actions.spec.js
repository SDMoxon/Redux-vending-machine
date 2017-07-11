import {expect} from 'chai';
import * as types from '../actions/types';
import * as actions from '../actions/actions';

describe('ACTIONS', () => {
  describe('INSERT_COIN',() => {
    it('returns the expected action', () => {
      expect(actions.insertCoin(0.2)).to.eql({
        type: types.INSERT_COIN,
        coin: 0.2
      });
    });
  });
  describe('REPLENISH_STOCK',() => {
    it('returns the expected action', () => {
      expect(actions.replenishStock('A1', 10)).to.eql({
        type: types.REPLENISH_STOCK,
        row: 'A1',
        quantity: 10
      });
    });
  });
    describe('INPUT_SELECTION',() => {
    it('returns the expected action', () => {
      expect(actions.inputSelection('A1')).to.eql({
        type: types.INPUT_SELECTION,
        row: 'A1',
      });
    });
  });
});


