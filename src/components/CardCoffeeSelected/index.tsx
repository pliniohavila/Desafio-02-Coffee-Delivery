import { 
  CardCoffeeSelectedDiv,
  ButtonRemove
} from "./styles";

import { Trash } from "phosphor-react";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";


export function CardCoffeeSelected({dataCoffee}: any) {
  const {increaseItem, decreaseItem, removeItem} = useContext(CartContext);
  const coffee = dataCoffee.dataProduct;

  function handleIncreaseItem() {
    increaseItem({
      id: dataCoffee.id,
      quantity: 1,
    });
  }

  function handleDecreaseItem() {
    decreaseItem({
      id: dataCoffee.id,
      quantity: 1,
    });
  }
  
  function handleRemoveItem() {
    removeItem({
      id: dataCoffee.id,
      quantity: 0,
    });
  }

  return (
    <>
    <CardCoffeeSelectedDiv>
      <img src={coffee.img_url} />
      <div>
        <p>{coffee.name}</p>
        <div className="card-btns">
          <div className="count-input">
          <>
          {
            dataCoffee.quantity <= 0 ? (<button> - </button>) 
            : (<button onClick={handleDecreaseItem}> - </button>) 
          }
            {dataCoffee.quantity}
          <button onClick={handleIncreaseItem}> + </button>
          </>
          </div>
          <ButtonRemove onClick={handleRemoveItem}><Trash size={16} />REMOVER</ButtonRemove>
        </div>
      </div>
      <div className="price">R$ {coffee.price}</div>
    </CardCoffeeSelectedDiv>
    </>
  )
}