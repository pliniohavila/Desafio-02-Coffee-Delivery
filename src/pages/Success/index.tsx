import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { BoxData, BoxImage, CardData, ContainerSuccess } from "./styles";

import ImageMoto from '../../assets/moto.svg' 
import { useState } from "react";

const initial = JSON.stringify({
  street: 'Rua João Daniel Martinelli',
  number: 102,
  district: 'Farrapos',
  city: 'Porto Alegre',
  state: 'RS',
  payment: 'CARTÃO DE CRÉDITO'
});

const addressClient = JSON.parse(localStorage.getItem('addressClient') || initial); 

export function Success() {
  const [address, setAddress] = useState(addressClient);


  return (
    <ContainerSuccess>
      <h1>Uhu! Pedido confirmado</h1>
      <h2>Agora é só aguardar que logo o café chegará até você</h2>
        <div className="container-boxers">
          <BoxData>
            <div className="box-data-content">
              <CardData>
                <MapPin size={32} weight="fill" className="icon color-purple"/>
                <div className="card-data-content">
                  <p>Entrega em <span className="contrast">{address.street}, {address.number}</span></p>
                  <p>{address.district} - {address.city}, {address.state}</p>
                </div>
              </CardData>
              <CardData>
                <Timer size={32} weight="fill" className="icon color-yellow"/>
                <div className="card-data-content">
                  <p>Previsão de entrega</p>
                  <p className="contrast">20 min - 30 min </p>
                </div>
              </CardData>
              <CardData>
                <CurrencyDollar size={32} weight="fill" className="icon color-yellow-dark"/>
                <div className="card-data-content">
                  <p>Pagamento na entrega</p>
                  <p className="contrast">{address.payment} </p>
                </div>
              </CardData>
            </div>
          </BoxData>

          <BoxImage>
            <img src={ImageMoto} alt="" />
          </BoxImage>
        </div>
    </ContainerSuccess>
  )
}