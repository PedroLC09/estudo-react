import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [rendimento, setRendimento] = useState(12000)
  
  let salario = 10002

  function incrementarSalario() {
    salario += 10
    console.log("Novo salário: R$" + salario)

    // rendimento = 111111 <<<< nunca

    setRendimento(20000)
  }

  return (
    <div className="cont-app">
      <h1>Estados e outras coisas</h1>
      Salario: R$ {salario.toFixed(2).replace('.',',')}
      <p>
        Rendimento: R$ {rendimento}
      </p>
      <button onClick={incrementarSalario}>➕</button>
    </div>
  )
}

export default App
