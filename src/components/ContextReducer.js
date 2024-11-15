import React, { createContext, useReducer, useContext } from 'react';

const CartStateContext = createContext();
const CartDispatchContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      // Add logic for adding items to the cart
      return [...state, action.item];
    case 'REMOVE':
      // Add logic for removing items from the cart
      return state.filter((_, index) => index !== action.index);
    case 'UPDATE':
      // Add logic for updating items in the cart
      return state.map((item, index) =>
        item.id === action.id ? { ...item, qty: action.qty, price: action.price } : item
      );
    case 'DROP':
      // Add logic for clearing the cart
      return [];
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, []);

  return (
    <CartStateContext.Provider value={state}>
      <CartDispatchContext.Provider value={dispatch}>
        {children}
      </CartDispatchContext.Provider>
    </CartStateContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartStateContext);
};

export const useDispatchCart = () => {
  return useContext(CartDispatchContext);
};
