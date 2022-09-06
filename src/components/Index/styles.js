import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100vh;
  width: 100vw;

  @media (max-width: 420px) {
    width: 100%;
    height: 100%;
  }
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  min-width: 500px;
  min-height: 700px;

  //border: 1px solid red;
  border-radius: 10px;
  outline: none;

  background: var(--shape);

  @media (max-width: 420px) {
    min-width: 100%;
    min-height: 100%;
    width: 100%;
    height: 100%;
  }

  @media (max-height: 700px) {
    min-height: 90%;
    width: 60%;
    height: 90%;
  }
`
