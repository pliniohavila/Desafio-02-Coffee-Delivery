import { Bank, CreditCard, CurrencyDollar, MapPin, Money } from "phosphor-react";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CardCoffeeSelected } from "../../components/CardCoffeeSelected";
import { CartContext } from "../../contexts/CartContext";
import { 
  BoxAddress, 
  FormContainer, 
  SectionCompleteRequest, 
  BoxPayment, 
  SectionCoffeesSelected, 
  BoxCoffeesSelected,
  Input,
  ButtonChoice,
} from "./styles";


export function Checkout() {
  const { itemsCart } = useContext(CartContext);
  const [payment, setPayment] = useState('');

  let totalItems: number = 0;
  itemsCart.forEach((item) => {
    totalItems += item.quantity * +item.dataProduct.price;
  });

  function handlePayment(event: any) {
    event.preventDefault();
    setPayment(event.target.textContent);
  }

  function handleForm(event: any) {
    event.preventDefault();
    const dataForm = event.target;
    const street = dataForm[0].value; 
    const number = dataForm[1].value;
    const district = dataForm[3].value;
    const city = dataForm[4].value;
    const state = dataForm[5].value;
    const addressClient = {street, number, district, city, state, payment};
    localStorage.setItem('addressClient', JSON.stringify(addressClient));
    localStorage.removeItem('cart');
    location.href = "/success";
  }

  return (
    <FormContainer onSubmit={handleForm}>
      <SectionCompleteRequest>
        <h1>Complete seu pedido</h1>
        <BoxAddress>
          <div className="header-box-address">
            <MapPin className="color-location" size={22}/>
              <div>
                <span>Endereço de Entrega</span>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
          </div>
          
          <div className="field-inputs">
            <Input placeholder="Rua" name="rua" required/>
            <Input type="number" placeholder="Número" name="numero" required/>
            <Input placeholder="Complemento" />
            <Input placeholder="Bairro" required/>
            <Input placeholder="Cidade" required/>
            <Input placeholder="UF" required/>
            <Input type="number" placeholder="CEP" />
          </div>
          
        </BoxAddress>
        <BoxPayment>
            <div className="header-box-payment">
              <CurrencyDollar size={32} weight="fill" className="currency-color" />
              <div>
                <p>Pagamento</p>
                <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
              </div>
            </div>
            <div className="payment-options">
              <ButtonChoice onClick={handlePayment}>
                <CreditCard className="payments-color" size={32} />CARTÃO DE CRÉDITO
              </ButtonChoice>
              <ButtonChoice onClick={handlePayment}>
                <Bank className="payments-color" size={32} />CARTÃO DE DÉBITO
              </ButtonChoice>
              <ButtonChoice onClick={handlePayment}>
              <Money className="payments-color" size={32} />DINHEIRO
              </ButtonChoice>
            </div>
        </BoxPayment>
      </SectionCompleteRequest>
      
      <SectionCoffeesSelected>
        <h1>Cafés Selcionados</h1>
        <BoxCoffeesSelected>
          <>
            {
              itemsCart.map((item: any) => {
                return <CardCoffeeSelected key={item.id} dataCoffee={item}/>
              })
            }
          </>
          <div className="total">
            <p>Total de itens<span>R$ {totalItems}</span></p>
            <p>Entrega<span>R$ 2,40</span></p>
            <p>Total<span>R$ {totalItems + 2.4}</span></p>
          </div>  
            <button 
              type="submit" 
              className="confirm-purchase">
              CONFIRMAR PEDIDO
            </button>
        </BoxCoffeesSelected>
      </SectionCoffeesSelected>
    </FormContainer>
  )
}