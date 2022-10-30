import styled from "styled-components";

export const CardCoffeeSelectedDiv = styled.div`
  display: flex;
  align-items: center;
  padding: 1.5rem 0;

  border-bottom: 1px solid ${props => props.theme['base-button']};

  img {
    height: 4rem;
    width: 4rem;
  }

  div {
    flex-grow: 1;
    margin: 0.5rem;
  }

  p {
    margin: 0 0 0.5rem 0;
    color:  ${props => props.theme['base-subtitle']};
  }

  .card-btns {
    display: flex;
    gap: 0.3rem;
    height: 3rem;
    margin: 0;
  }

  .count-input {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;
    padding: 0.5rem;
    width: 4rem;
    height: 2.5rem;

    background-color: ${props => props.theme['base-button']};
    border: 0;
    border-radius: 6px;

    button {
      border: none;
      width: 1.75rem;
      font-size: 1.5rem;
      color: ${(props) => props.theme['purple']};
      font-weight: 700;
      cursor: pointer;

      &:hover {
        color: ${(props) => props.theme['purple-dark']};
        background: none;
      }
    }
  }

  .price {
    color: ${props => props.theme['base-text']};
    font-weight: 700;
    line-height: 1.6;
  }
`

export const ButtonRemove = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 7.5rem;
  height: 2.5rem;
  margin: 0.5rem;
  padding: 0 0.5rem;
  gap: 4px;
  
  background: ${(props) => props.theme['base-button']};
  color: ${(props) => props.theme['purple-dark']};
  border: none;
  border-radius: 6px;

  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme['base-hover']};
  }
`