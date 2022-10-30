import { ShoppingCartSimple } from "phosphor-react";
import { useContext, useState } from "react";
import { CartContext } from "../../contexts/CartContext";
import { CardProductContainer } from "./styles";


export function CardProduct(product: any) {
  const [quantity, setQuantity] = useState(0);
  const { addItem } = useContext(CartContext);

  const coffeeProduct = product.product;

  function handleAddItem() {
    addItem({
      id: coffeeProduct.id,
      quantity: quantity,
      dataProduct: coffeeProduct
    });
  }
  
  return (
    <CardProductContainer>
      <img src={coffeeProduct.img_url}></img>
        <div>
          <div className="tags">Tradicional</div>
        </div>
        <h3 className="name-product">{coffeeProduct.name}</h3>
        <p className="description-product">{coffeeProduct.description}</p>
        <div className="camp-purchase">
          <div className="price">R$ <span>{coffeeProduct.price}0</span></div>
          <div className="count-input">
            {
              quantity <= 0 ? (<button> - </button>) 
              : (<button onClick={() => setQuantity((quantity) => quantity - 1)}> - </button>)
            }
              {quantity}
            <button onClick={() => setQuantity((quantity) => quantity + 1)}> + </button>
          </div>
          <div className="cart-product">
            <ShoppingCartSimple 
              className='cart-cursor'
              size={22} 
              weight="fill"
              onClick={handleAddItem}
            />
          </div>
        </div>
    </CardProductContainer>
  )
}

