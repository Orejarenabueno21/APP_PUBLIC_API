import {React, useState} from 'react'

const PeticionApi = () => {
    const [personajes, setPersonajes]= useState ([])
    const [paginacion, setPaginacion]= useState (0)

    const obtenerPersonaje = async () => {
        try {
            const res = await  fetch(`https://rickandmortyapi.com/api/character/?page=${paginacion}`)
            const {results}=await res.json()
            setPersonajes(results)
        }catch(error){
            console.log(error)
        }
        
    }
    const Siguiente =  () => {
        setPaginacion(paginacion+1)
        obtenerPersonaje()
    }
    const Atras =  () => {
        setPaginacion(paginacion-1)
        obtenerPersonaje()
    }
  return (
    <div>
        <h1>Peticion Del Api</h1>
        <button onClick={obtenerPersonaje}>Traer Personajes </button>
        <button onClick={Atras}>Atras</button> 
        <button onClick={Siguiente}>Siguiente</button>
        {   
            personajes.map(({id, name, image}) => (
                <div key={id}>
                    <h4>{id} - {name}</h4>
                    <img src={image} alt={name} />
                </div>
            ))
        }
    </div>
  )
}

export default PeticionApi