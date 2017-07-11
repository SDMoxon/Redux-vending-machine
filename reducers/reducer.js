const initialState = {
    stock: {
        'A1': {
            name: 'Mars bar',
            qty: 10,
            stuck: false,
            price: 0.85,
        },
        'A2': {
            name: 'Kettle chips',
            qty: 10,
            stuck: false,
            price: 0.85,
        }
    },
    credit: [0.5, 0.5],
    float: {
        '0.1':10,
        '0.2':20,
        '0.5':30,
        '1':50
    },
    displayMessage: '',
    selection: '',
    productDispenser: '',
    dispenserDoorOpen: false,
    power: false
};