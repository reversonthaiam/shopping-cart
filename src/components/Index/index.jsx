import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import Section from '../Section'
import { Container, Card } from './styles'

function index({ data, setData }) {
  const { items = [] } = data

  function handleDeleteItem(item) {
    const newItem = [...items];
    newItem.splice(item, 1);

    const newDate = {
      ...data,
      items: newItem
    }

    setData(newDate);
  }

  return (
    <Container>
      <Card>
        <Header />
        <Section items={data} handleDeleteItem={handleDeleteItem}/>
        <Footer totalizers={data} />
      </Card>
    </Container>
  )
}

export default index
