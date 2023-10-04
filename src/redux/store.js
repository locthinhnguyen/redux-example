import { createStore } from 'redux';

const initialState = {
  cart: [
    {
      id: 1,
      name: 'Phone',
      description: 'Power by Iphone',
      price: '$599',
    },
    {
      id: 2,
      name: 'Computer',
      description: 'Power by Dell',
      price: '$799',
    },
    {
      id: 3,
      name: 'Coat',
      description: 'Gucci',
      price: '$299',
    },
  ],
};

const reducer = (state = initialState, action) => {
  if (action.type === 'UPDATE_CART') {
    return {
      ...state,
      cart: action.payload,
    };
  }
  return state;
};

const store = createStore(reducer);

export default store;
