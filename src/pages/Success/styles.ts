import styled from 'styled-components'


export const ContainerSuccess = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5rem 10rem;

  h1 {
    font-family: 'Baloo 2';
    font-weight: 800;
    line-height: 1.3;
    color: ${(props) => props.theme['yellow-dark']}
  }

  h2 {
    font-size: 1.25rem;
    line-height: 1.3;
    color: ${(props) => props.theme['base-subtitle']};
  }

  .container-boxers {
    display: flex;
    flex-direction: row;
    gap: 6rem;
    width: 100%;
  }
`

export const BoxData = styled.div`
  flex-grow: 1;
  margin-top: 2.5rem;
  padding: 2px;
  
  border: 1px;
  border-radius: 6px 36px;
  background-image: 
    linear-gradient(white, white), 
    radial-gradient(circle at top left, ${(props) => props.theme['yellow']}, ${(props) => props.theme['purple']});
  background-origin: border-box;
  background-clip: content-box, border-box;

  .box-data-content {
    display: flex;
    flex-direction: column;
    padding: 2.5rem;
    gap: 2rem;
  }
`
export const CardData = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.75rem;

  .icon {
    border-radius: 999px;
    padding: 0.5rem;
    color: ${(props) => props.theme['white']};
  }

  .color-purple {
    background: ${(props) => props.theme['purple']};
  }

  .color-yellow {
    background: ${(props) => props.theme['yellow']};
  }

  .color-yellow-dark {
    background: ${(props) => props.theme['yellow-dark']};
  }

  .card-data-content {
    color: ${(props) => props.theme['base-text']};
    line-height: 1.3;

    .contrast {
      font-weight: 700;
    }
  }
`

export const BoxImage = styled.div`
  margin-top: 2.5rem;
`