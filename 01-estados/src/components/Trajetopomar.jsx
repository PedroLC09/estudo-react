import React, { useState } from 'react'

function Trajetopomar() {
  const[resultado, setResultado] = useState();
          
              function calcularVendidas() {
                  let qtdinicial= Number(prompt("Quantidade inicial de laranjas"));
                  let qtdfinal = Number(prompt("Quantidade final de laranjas"));
                  let qtdesperada = qtdinicial - qtdfinal;
                  setResultado(qtdesperada);
              }

  return (
    <div className='cont-trajetopomar'>
            <h2>Trajeto Pomar e o estoque de frutas</h2>
            <button onClick={calcularVendidas}>Calcular Laranjas Vendidas</button>
            <br />
            Laranjas Vendidas Esperadas: {resultado}
        </div>
  )
}

export default Trajetopomar