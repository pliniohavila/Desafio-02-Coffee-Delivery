import styled from 'styled-components';

export const CardProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;
  width: 256px;
  height: 310px;

  background-color: ${(props) => props.theme['base-card']};
  border-radius: 6px 36px;

  img {
    position: relative;
    top: -2rem;
  }

  .tags {
    display: inline-block;
    padding: 0.25rem 0.5rem;
    color: ${props => props.theme['yellow-dark']};
    background: ${props => props.theme['yellow-light']};
    border-radius: 100px;
  }

  .name-product {
    margin: 0.5rem 0;
    font-family: 'Baloo 2', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 1.25rem;
    color: ${props => props.theme['base-subtitle']};
    line-height: 1.3;
  }

  .description-product {
    font-family: 'Roboto', sans-serif;
    font-size: 0.75rem;
    color: ${props => props.theme['base-label']};
    text-align: center;
    line-height: 1.3;
  }

  .camp-purchase {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    margin-top: 1.5rem;
    font-size: 1.25rem;
    color: ${props => props.theme['base-text']};
    line-height: 1.3;

    span {
      font-size: 1.5rem;
      font-weight: 800;
    }

    .count-input {
      display: flex;
      align-items: center;
      gap: 0.25rem;
      padding: 0.5rem;

      background-color: ${props => props.theme['base-button']};
      border: 0;
      border-radius: 6px;

      button {
        border: none;
        width: 1.75rem;
        font-size: 1.5rem;
        color: ${(props) => props.theme['purple']};
        font-weight: 800;
        cursor: pointer;

        &:hover {
          color: ${(props) => props.theme['purple-dark']};
          background: none;
        }
      }
    }

    .cart-product {
      display: flex;
      align-items: center;
      padding: 0.5rem;
      background: ${props => props.theme['purple-dark']};
      color: ${props => props.theme['white']};
      border-radius: 6px;
      line-height: 1.3;

      &:hover {
        background: ${props => props.theme['purple']};
      }

      .cart-cursor {
        cursor: pointer;
      }
    }
  }
`