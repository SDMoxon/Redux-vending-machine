import * as types from '../actions/types';

export const initialState = {
  stock: {
    'A1': {
      name: 'Mars Bar',
      quantity: 10,
      stuck: false,
      price: 0.85
    },
    'A2': {
      name: 'Kettle Crisps',
      quantity: 10,
      stuck: false,
      price: 0.85
    }
  },
  credit: [],
  changeArea: [],
  float: {
    '1': 10,
    '0.5': 10,
    '0.1': 10
  },
  displayMessage: '',
  selection: '',
  productDispenser: '',
  dispenserDoorOpen: false,
  power: true
};

export function reducer (prevState = initialState, action) {
  if (!action) return prevState;
  if (!prevState.power) return prevState;

  if (action.type === types.INSERT_COIN) {
    const newState = Object.assign({}, prevState);
    newState.credit = newState.credit.concat([action.coin]);
    return newState;
  }

  if (action.type === types.REPLENISH_STOCK) {
    if (!action.quantity || !action.code) return prevState;

    const newState = Object.assign({}, prevState);
    newState.stock = Object.assign({}, newState.stock);
    newState.stock[action.code] = Object.assign({}, newState.stock[action.code]);

    newState.stock[action.code].quantity += action.quantity;
    return newState;
  }

  return prevState;
}