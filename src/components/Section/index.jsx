import React from 'react'
import { currencyFormatter } from '../../utils/formatters'
import {ShoppingCart, Trash} from 'phosphor-react'
import {
  Container,
  SectionCartEmpty,
  SectionInfo,
  SectionPrice,
  SectionSubPrice,
  SectionTitle,
  SectionTrash,
} from './styles'

function Section({ items, handleDeleteItem }) {

  return (
    <Container>
      {items.items?.length === 0 && (
        <SectionCartEmpty>
          <ShoppingCart size={50} />
          <h3>Carrinho vazio! 😔</h3>
        </SectionCartEmpty>
      )}
      {items.items?.map((item, index) => (
        <div className='sectionPosition' key={item.id}>
        <SectionInfo>
          <div>
            <img
              src={item.imageUrl}
              alt=""
            />
          </div>
          <div>
            <SectionTitle>{item.name}</SectionTitle>
            <SectionPrice>R$ 1,23</SectionPrice>
            <SectionSubPrice>{currencyFormatter(item.price)}</SectionSubPrice>
          </div>
        </SectionInfo>
        <SectionTrash>
          <Trash onClick={() => handleDeleteItem(index)} size={23} />
        </SectionTrash>
        </div>
      ))}
    </Container>
  )
}

export default Section
