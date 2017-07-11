import {expect} from 'chai';
import * as types from '../actions/types';
import * as actions from '../actions/actions';

describe('ACTIONS', function () {
  describe('INSERT_COIN', function () {
    it('returns the expected action', function () {
      expect(actions.insertCoin(0.2)).to.eql({
        type: types.INSERT_COIN,
        coin: 0.2
      });
    });
  });
  describe('TURN_ON_MACHINE', function () {
    it('returns the expected action', function () {
      expect(actions.turnOnMachine(true)).to.eql({
        type: types.TURN_ON_MACHINE,
        is_it_on: true
      });
    });
  });
});