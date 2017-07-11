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

// buy item. --- dispensory tray. 
// retrieve item from tray.
// recieve change. 
// request refund. 
// replenish float. 
// add new item. 
// discontinue item. 