import styled from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  gap: 2rem;

  margin: 2rem 10rem;

  h1 {
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: 1.2rem;
    color: ${props => props.theme['base-title']};
    line-height: 1.3; 
  }
`

const DivBase = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  padding: 1.5rem;
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px;
`

export const SectionCompleteRequest = styled.div`
  display: flex;
  flex-direction: column;
  width: 65%;
`

export const BoxAddress = styled(DivBase)`

  .header-box-address {
    display: flex;
    margin: 0 0 2rem 0;

    & p:nth-of-type(1) {
      color: ${(props) => props.theme['base-subtitle']};
      padding: 0.5rem 0 0.5rem 0rem;
    }

    p {
      color: ${(props) => props.theme['base-text']};
      font-size: 0.85rem;
    }
  }

  .color-location {
    color: ${(props) => props.theme['yellow-dark']};
  }

  .field-inputs {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }
`

const InputBase = styled.input`
  padding: 12px;
  margin-bottom: 1rem;
  gap: 4px;
  color: ${(props) => props.theme['base-text']};
  background: ${(props) => props.theme['base-input']};
  border: 1px solid ${(props) => props.theme['base-button']};
  border-radius: 4px;

  &:focus {
    border: 1px solid ${(props) => props.theme['yellow-dark']};
  }
`

export const Input = styled(InputBase)`
  &:nth-of-type(1) {
    width: 40rem;
  }
    
  &:nth-of-type(2) {
    width: 10rem;
  }

  &:nth-of-type(3) {
    width: 20rem;
  }

  &:nth-of-type(4) {
    width: 30rem;
  }
  &:nth-of-type(5) {
    width: 30rem;
  }
  &:nth-of-type(6) {
    width: 5rem;
  }
  &:nth-of-type(7) {
    width: 14rem;
  }
`

export const BoxPayment = styled(DivBase)`

  .header-box-payment {
    margin: 0 0 2rem 0;
    display: flex;

    & p:nth-of-type(1) {
      color: ${(props) => props.theme['base-subtitle']};
      padding: 0.5rem 0 0.5rem 0rem;
    }

    p {
      color: ${(props) => props.theme['base-text']};
      font-size: 0.85rem;
    }

    .currency-color {
      color: ${(props) => props.theme['purple']};
    }
  }

  .payment-options {
    display: flex;
    gap: 0.75rem;

    .payments-color {
      color: ${(props) => props.theme['purple']};
    }
  }
`

export const ButtonChoice = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  width: 16rem;
  padding: 1rem;
  background: ${(props) => props.theme['base-button']};
  line-height: 1.6;
  border: 0;
  border-radius: 6px;
  outline: none;

  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme['base-hover']};
  }

  &:focus {
    background: ${(props) => props.theme['purple-light']};
    border: 1px solid ${(props) => props.theme['purple']};
  }
`

export const SectionCoffeesSelected = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

export const BoxCoffeesSelected = styled(DivBase)`
  border-top-right-radius: 44px;

  .total {
    margin-top: 1.5rem;

    p {
      display: flex;
      justify-content: space-between;
      margin-bottom: 0.75rem;
      color: ${(props) => props.theme['base-text']};

      &:last-child {
        font-size: 1.25rem;
        font-weight: 700;
        color: ${(props) => props.theme['base-subtitle']};
      }
    }  
  }

  .confirm-purchase {
    margin: 0.75rem 0;
    padding: 0.75rem 0.5rem;
    width: 100%;
    text-align: center;
    color: ${(props) => props.theme['white']};
    font-weight: 700;
    background: ${(props) => props.theme['yellow']};
    border: none;
    border-radius: 6px;

    cursor: pointer;

    align-self: stretch;

    &:hover {
      background: ${(props) => props.theme['yellow-dark']};
    }
  }
`

