import {React, useState} from 'react'

const PeticionApi = () => {
    const [contador, setContador]= useState(0)
    const aumentar = () => {
        setContador(contador+1)
    }
    const disminuir = () => {
        setContador(contador-1)
    }
  return (
    <div>
        <h1>Peticion Del Api Marvel</h1>
        <button onClick={disminuir}>Resta</button>
        <span> {contador} </span>
        <button onClick={aumentar}>Suma</button>
    </div>
  )
}

export default PeticionApi