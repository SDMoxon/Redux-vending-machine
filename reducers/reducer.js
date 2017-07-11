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
  credit: 0,
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

export function reducer(prevState = initialState, action) {
  if (!action) return prevState;
  if (!prevState.power) return prevState;

  if (action.type === types.INSERT_COIN) {
    const newState = Object.assign({}, prevState);
    newState.credit = newState.credit += action.coin;
    return newState;
  }

  if (action.type === types.REPLENISH_STOCK) {
    const newState = Object.assign({}, prevState);
    newState.stock = Object.assign({}, prevState.stock);
    newState.stock[action.row] = Object.assign({}, prevState.stock[action.row]);
    newState.stock[action.row].quantity += action.quantity;
    return newState;
  }

  if (action.type === types.INPUT_SELECTION) {
    const newState = Object.assign({}, prevState);
    newState.stock = Object.assign({}, prevState.stock);
    newState.stock[action.row] = Object.assign({}, prevState.stock[action.row]);
    newState.selection = action.row;

    if (newState.credit < newState.stock[action.row].price) {
      newState.displayMessage = 'Soz, needz more moneyz bra';
    }
    newState.productDispenser = newState.stock[action.row].name;

    newState.stock[action.row].quantity--;
    newState.credit -= newState.stock[action.row].price;
    newState.credit = Number(newState.credit.toFixed(2));
    return newState;
  }

  //   if (action.type === types.TURN_ON_MACHINE) {
  //       const newState = Object.assign({}, prevState);
  //       newState.power = action.power;
  //       return newState;
  //   }

  // replenish stock 

  return prevState;
}