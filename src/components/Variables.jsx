import React from 'react'

const Variables = () => {
  const saludo = "Hola Mundo"
  const imagen = "https://picsum.photos/200  "
  const texto_alt = "Esto es imagen"


  return (


    <div>
      <h1>{saludo}</h1>
      <img src={imagen} alt={texto_alt} />
      </div>
  )
}

export default Variables