import { createContext, useReducer, ReactNode, useState, useEffect, useMemo } from "react";
import { cartReducer } from "../reducers/CartReducer";

type TDataProduct = {
  id: number,
  name: string,
  img_url: string,
  description: string,
  price: string
}

export type TItemCart = {
  id: number,
  quantity: number,
  dataProduct: TDataProduct
}

type CartContextProps = {
  cartQuantityItems: number,
  itemsCart: TItemCart[],
  addItem: (item: TItemCart) => void,
  increaseItem: (item: any) => void,
  decreaseItem: (item: any) => void,
  removeItem: (item: any) => void,
}

type CartContextProviderProps = {
  children: ReactNode;
}

export const CartContext = createContext({} as CartContextProps);

const initialState = JSON.parse(localStorage.getItem('cart') || '[]'); 


export function CartContextProvider({children}: CartContextProviderProps) {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const [cartQuantityItems, setCartQuantityItems] = useState(0);

  function addItem(item: TItemCart) {
    dispatch({
      type: 'ADD',
      payload: item
    });
  };

  function increaseItem(item: any) {
    dispatch({
      type: 'INCREASE',
      payload: item
    });
  }

  function decreaseItem(item: any) {
    dispatch({
      type: 'DECREASE',
      payload: item
    });
  }

  function removeItem(item: any) {
    dispatch({
      type: 'REMOVE',
      payload: item
    });
  }

  let count = 0;
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state));
    count = state.reduce((previous, current) => {
      return previous + current.quantity;
    }, 0);
    setCartQuantityItems(count);
  }, [state]);

  const valueProvider = useMemo(() => ({
    cartQuantityItems,
    itemsCart: state,
    addItem,
    increaseItem,
    decreaseItem,
    removeItem
  }), [state, cartQuantityItems]);

  return (
   <CartContext.Provider value={valueProvider}>
    {children}
   </CartContext.Provider>
  )
}