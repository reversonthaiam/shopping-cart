import { useEffect, useState } from 'react'
import Index from './components/Index'
import { api } from './services/api'
import Loading from './ui/Loading'

function App() {
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    api
      .get('http://localhost:3000/api/transactions')
      .then((response) => setData(response.data.transactions[0]))
      .finally(e => setLoading(false))
  }, [])

  return (
    <>
      <Index data={data} setData={setData} />
      {loading && <Loading />}
    </>
  )
}

export default App
