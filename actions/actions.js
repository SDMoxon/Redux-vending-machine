import * as types from './types';

export function insertCoin (coin) {
    return {
        type: types.INSERT_COIN,
        coin
    };
}

export function replenishStock (row, quantity) {
    return {
        type: types.REPLENISH_STOCK,
        row,
        quantity,
    };
}
export function inputSelection (row) {
    return {
        type: types.INPUT_SELECTION,
        row
    };
}
export function giveChange () {
    return {
        type: types.GIVE_CHANGE,
    };
}

// replenish float. 
// add new item. 
// discontinue item. 
// retrieve item from tray.