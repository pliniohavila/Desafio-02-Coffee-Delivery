import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";


export function useCart() {
  const { addItem } = useContext(CartContext);
  return {addItem};
}