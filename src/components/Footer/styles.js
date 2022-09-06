import styled from 'styled-components'

export const Container = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;

  font-weight: bold;

  border-top: 1px solid var(--text-title);

`

export const FooterTotal = styled.footer`
  display: flex;
  flex-direction: column;
  margin: 20px;

  @media (max-height: 700px) {
    margin: 5px 15px 5px 15px;
  }
`

export const FooterTittle = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 420px) {
    font-size: 0.8rem;
  }

  @media (max-height: 700px) {
    font-size: 0.875rem;
  }
`

export const FooterfreightFree = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;

  p {
    color: var(--green-dark);
    text-align: center;
    border-radius: 25px;

    background: var(--green);
    padding: 10px;
  }

  @media (max-height: 700px) {
    margin: 5px 15px 5px 15px;
  }
`

export const FooterValues = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

export const Discounts = styled.div`
  color: var(--green-dark);
`

export const FooterButton = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;

  border-top: 1px solid var(--text-title);

  button {
    margin-top: 20px;
    width: 90%;
    height: 4rem;

    border: none;
    border-radius: 10px;
    outline: none;

    background-color: var(--blue);
    color: white;
    font-weight: bold;
    font-size: 1.4rem;
    transition: 0.5s;

    @media (max-width: 420px) {
      font-size: 1.3rem;
    }
    @media (max-height: 700px) {
      font-size: 1.3rem;
      height: 3rem;
    }

    &:hover {
      opacity: 0.7;
    }
  }
`
