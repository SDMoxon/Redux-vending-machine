import * as types from './types';

export function insertCoin (coin) {
    return {
        type: types.INSERT_COIN,
        coin
    };
}

export function turnOnMachine (is_it_on) {
    return {
        type: types.TURN_ON_MACHINE,
        is_it_on
    };
}