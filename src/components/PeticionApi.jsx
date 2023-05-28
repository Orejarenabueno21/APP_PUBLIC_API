import {React, useState} from 'react'

const PeticionApi = () => {
    const [personajes, setPersonajes]= useState ([])
    const [paginacion, setPaginacion]= useState (0)
    const [ide, setIde]= useState (1)

    const obtenerPersonaje = async () => {
        try {
            const res = await  fetch(`https://pokeapi.co/api/v2/pokemon/?limit=1&offset=${paginacion}`)
            const {results}=await res.json()
            setPersonajes(results)
        }catch(error){
            console.log(error)
        }
        
    }
    const Siguiente =  () => {
        setIde(ide+1)
        setPaginacion(paginacion+1)
        obtenerPersonaje()
    }
    const Atras =  () => {
        setIde(ide-1)
        setPaginacion(paginacion-1)
        obtenerPersonaje()
    }
    const imagenes =["https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/1.png","https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/2.png","https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/3.png"]
  return (
    <div>
        <h1>Peticion Del Api</h1>
        <button onClick={obtenerPersonaje}>Traer Personajes </button>
        <button onClick={Atras}>Atras</button> 
        <button onClick={Siguiente}>Siguiente</button>
        {   
            personajes.map(({id, name}) => (
                <div>
                    <h4>{ide} - {name}</h4>
                    <img src={imagenes[paginacion]} alt={name} />
                </div>
            ))
        }
    </div>
  )
}

export default PeticionApi