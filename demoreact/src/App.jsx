
import './App.css'
import Texto from './components/Texto'
import Titulo from './components/Titulo'

function App() {

  return (
    <div className='cont-app'>
      <Titulo />
      <Texto />
      
      <img className='imagens-gerais' src="./amordenerd.jpg" alt="" />
      <h2>Leon e Nilce melhor casal</h2>
      <ol>
        <li>Você é legal</li>
        <li>Divertida/o</li>
        <li>Inteligente</li>
        <li>Simpática/o</li>
        <li>Sarcástica/o</li>
      </ol>
    </div>
  )
}

export default App
