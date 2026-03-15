import { Suspense } from 'react'
import './App.css'
import Countries from './components/countries/countries'

const fetchCountries = fetch('https://openapi.programming-hero.com/api/all')
.then(res => res.json())

function App() {

  return (
    <div>
      <h1>React Rest Countries</h1>
      
      <Suspense>
        <Countries fetchCountries={fetchCountries}></Countries>
      </Suspense>
    </div>
  )
}

export default App
