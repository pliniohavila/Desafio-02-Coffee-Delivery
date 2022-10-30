import styled from 'styled-components'

export const BannerContainer = styled.div`
  margin: 2rem 10rem;
  display: flex;
`

export const BannerContainerText = styled.div`
  h1 {
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: 3rem;
    color: ${props => props.theme['base-title']};
    line-height: 1.3; 
  }

  h3 {
    padding-top: 1rem;
    font-family: 'Roboto', sans-serif;
    font-size: 1.25rem;
    font-weight: 400;
    color: ${props => props.theme['base-subtitle']};
  }

  ul {
    padding-top: 4rem;
    list-style: none;
    column-count: 2;
    column-gap: 1rem;

    font-family: 'Roboto', sans-serif;
    color: ${props => props.theme['base-text']};
  }

  li {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    line-height: 1.6;
    margin-bottom: 1rem;
  }   
`

const COLORS_ICON_LIST = {
  yellowDark: 'yellow-dark', 
  yellowLight: 'yellow',
  baseText: 'base-text',
  brandPurple: 'purple'
} as const

interface ColorsIconProps {
  background: keyof typeof COLORS_ICON_LIST
}

export const IconListBanner = styled.span<ColorsIconProps>`
  padding: 0.4rem;
  width: 2rem;
  height: 2rem;
  background: ${props => props.theme[COLORS_ICON_LIST[props.background]]};
  color: ${props => props.theme['white']};
  border-radius: 999px;
  line-height: 1.6;
  text-align: center;
`

export const BannerContainerImg = styled.div`
  padding: 1rem;
`

export const ProductsContainer= styled.section`
  margin: 2rem 10rem;

  div {
    display: flex;
    justify-content: space-between;
  }

  h1 {
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: 2rem;
    color: ${props => props.theme['base-title']};
    line-height: 1.3; 
  }

  .to-checkout {
    width: 12rem;
    padding: 0.5rem;
    background: ${props => props.theme['yellow']};
    color: ${props => props.theme['white']};
    font-size: 1.5rem;
    font-weight: 800;
    text-align: center;
    text-decoration: none;
    border-radius: 6px;
    line-height: 1.3;

    &:hover {
      background: ${props => props.theme['yellow-dark']};
    } 
  }

  .products-show {
    display: flex;
    justify-content: space-around;
    gap: 2rem;
    flex-wrap: wrap;
  }
`
export const CardProduct = styled.div`
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