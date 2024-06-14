import './App.css'
import Header from './components/Header'
import Card from './components/Card'
import data from "./data"

function App() {

  const cards = data.map(item => {
    return (
      <Card
        key={item.id}
        item={item}

      />
    )
  }
  )

  return (
    <>
      <Header />
      <section className='card-list'>
        {cards}
      </section>
    </>
  )
}

export default App
