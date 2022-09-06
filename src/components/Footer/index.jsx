import React from 'react'
import { currencyFormatter } from '../../utils/formatters'

import {
  Container,
  Discounts,
  FooterButton,
  FooterfreightFree,
  FooterTittle,
  FooterTotal,
  FooterValues,
} from './styles'

function Footer({ totalizers }) {
  const { totalizers: resultTotalizers, items } = totalizers

  const resultCalculations = items?.reduce((ac, at) => {
    return ac + at.price
  }, 0)

  const totalizersDiscounts = resultTotalizers?.find(
    (e) => e.id === 'Discounts',
  )

  const totally = resultCalculations + totalizersDiscounts?.value

  return (
    <Container>
      <FooterTotal>
        <FooterTittle>
          <div>
            <p>Valor dos produtos</p>
            <p>Valor do desconto</p>
            <h2>Total a pagar</h2>
          </div>
          <FooterValues>
            <p>{currencyFormatter(resultCalculations)}</p>
            <Discounts>
              {totally <= totalizersDiscounts?.value * -1 ? (
                <p>{currencyFormatter(0)}</p>
              ) : (
                <p>{currencyFormatter(totalizersDiscounts?.value)}</p>
              )}
            </Discounts>
            {totally <= totalizersDiscounts?.value * -1 ? (
              <h2>{currencyFormatter(resultCalculations)}</h2>
            ) : (
              <h2>{currencyFormatter(totally)}</h2>
            )}
          </FooterValues>
        </FooterTittle>

        {resultCalculations >= 10 && (
          <FooterfreightFree>
            <p>Parabéns, sua compra tem frete grátis !</p>
          </FooterfreightFree>
        )}
      </FooterTotal>
      <FooterButton>
        <button>Finalizar compra</button>
      </FooterButton>
    </Container>
  )
}

export default Footer
