import { Coffee, Package, ShoppingCartSimple, Timer } from "phosphor-react";
import { Link } from "react-router-dom";

import { 
  BannerContainer, 
  BannerContainerText, 
  BannerContainerImg, 
  IconListBanner, 
  ProductsContainer } 
  from "./styles";
import BannerImg from '../../assets/banner-img.svg'

import CoffeesDataJson from '../../assets/data.json'
import { CardProduct } from "../../components/CardProduct";

export function Home() {

  return (
    <>
      <BannerContainer>
        <BannerContainerText>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <h3>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</h3>
          <ul>
            <li><IconListBanner background="yellowDark"><ShoppingCartSimple size={16} weight="fill"/></IconListBanner>Compra simples e segura</li>
            <li><IconListBanner background="yellowLight"><Timer size={16} weight="fill"/></IconListBanner>Entrega rápida e rastreada</li>
            <li><IconListBanner background="baseText"><Package size={16} weight="fill"/></IconListBanner>Embalagem mantém o café intacto</li>
            <li><IconListBanner background="brandPurple"><Coffee size={16} weight="fill"/></IconListBanner>O café chega fresquinho até você</li>
          </ul>
        </BannerContainerText>
        <BannerContainerImg>
          <img src={BannerImg} />
          </BannerContainerImg>
      </BannerContainer>
      <ProductsContainer>
        <div>
          <h1>Nossos cafés</h1>
          <Link className="to-checkout" to='/checkout'>Fechar Pedido</Link>
        </div>
        <div className="products-show">
          {CoffeesDataJson.map((coffeeProduct: any) => {
            return (
              <CardProduct key={coffeeProduct.name} product={coffeeProduct} />
            )
          })
        }             
        </div>
      </ProductsContainer>
    </>
  )
}