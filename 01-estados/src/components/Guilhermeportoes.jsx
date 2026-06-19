import React, { useState } from 'react'

function Guilhermeportoes() {

    const[resultado, setResultado] = useState();
        
            function calcularDevs() {
                let clt= Number(prompt("Número de clts"));
                let estag = Number(prompt("Número de estagiários"));
                let pj = Number(prompt("Número de Pjs"));
                let numeroDevs = clt + estag + pj
                setResultado(numeroDevs);
            }
      
    
      return (
        <div className='cont-guilermeportoes'>
            <h2> Guilherme Portões e a força de trabalho da Macrohard</h2>
            <button onClick={calcularDevs}>Calcular Devs</button>
            <br />
            Numero de Devs: {resultado}
        </div>
  )
}

export default Guilhermeportoes