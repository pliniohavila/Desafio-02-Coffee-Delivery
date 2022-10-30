import styled from "styled-components";

export const HeaderPage = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 2rem 10rem;

  div {
    display: flex;
    gap: 0.75rem;
    line-height: 1.6;
  }

  .location {
    display: flex;
    gap: 0.25rem;
    padding: 0.5rem;
    color: ${props => props.theme['purple-dark']};
    background: ${props => props.theme['purple-light']};
    border-radius: 6px;
  }

  .cart {
    position: relative;
    padding: 0.5rem;
    background: ${props => props.theme['yellow-light']};
    color: ${props => props.theme['yellow-dark']};
    border-radius: 6px;

    span {
      position: absolute;
      top: -10px;
      right: -10px;
      width: 1.5rem;
      height: 1.5rem;
      color: white;
      text-align: center;
      background: ${props => props.theme['yellow-dark']};
      border-radius: 999px;
    }
  }
`