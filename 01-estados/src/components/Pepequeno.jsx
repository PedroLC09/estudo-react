import React, { useState } from 'react'

function Pepequeno() {
    const[resultado, setResultado] = useState();
    
        function calcularVale() {
            let preço = Number(prompt("Preço par de calçados:"));
            let pares = Number(prompt("Quantidade de Pares:"));
            let valetroca = preço * pares
            setResultado(valetroca);
        }
  

  return (
    <div  className='cont-pepequeno'>
        <h2>Pepequeno e as trocas</h2>
        <button onClick={calcularVale}>CalcularValeTroca</button>
        <br />
        ValeTroca: {resultado}
    </div>
  )
}

export default Pepequeno