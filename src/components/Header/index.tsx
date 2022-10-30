import { HeaderPage } from "./styles";
import Logo from '../../assets/Logo.svg'
import { MapPin, ShoppingCartSimple } from "phosphor-react";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";


export function Header() {
  const {cartQuantityItems} = useContext(CartContext);


  return (
    <HeaderPage>
      <img src={Logo} />
      <div>
        <div className="location">
          <MapPin size={22} weight="fill"/>
          Porto Alegre, RS
        </div>
        <div className="cart">
          <ShoppingCartSimple size={22} weight="fill"/>
          {
            cartQuantityItems > 0 ? (<span>{cartQuantityItems}</span>) : null
          }
          
        </div>
      </div>
    </HeaderPage>
  )
}