import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

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

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);

export default { store, persistor };
