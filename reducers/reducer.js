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

//   if (action.type === types.TURN_ON_MACHINE) {
//       const newState = Object.assign({}, prevState);
//       newState.power = action.power;
//       return newState;
//   }

    // replenish stock 

  return prevState;
}