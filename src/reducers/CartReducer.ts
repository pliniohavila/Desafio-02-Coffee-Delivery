import { TItemCart } from "../contexts/CartContext";

export function cartReducer(state: TItemCart[], action: any) {
  const { id, quantity } = action.payload;

  switch (action.type) {
    case 'ADD': 
      if (!state.find((item) => item.id === id)) {
        return [
          ...state, 
          {id, quantity, dataProduct: action.payload.dataProduct}
        ];
      } else {
        return state.map((item) => {
          return {
            ...item, quantity: item.quantity + quantity
          };
        });
      }
    case 'REMOVE':
      return state.filter((item: TItemCart) => {
        return item.id !== id
      })
    case 'INCREASE':
      return state.map((item) => {
        if (item.id === id) {
          return {
            ...item, quantity: item.quantity + quantity
          };
        } else {
          return item;
        }
      });
    case 'DECREASE':
      return state.map((item) => {
        if (item.id === id) {
          return {
            ...item, quantity: item.quantity - quantity
          };
        } else {
          return item;
        }
      });
    default:
      return state;
  }
}