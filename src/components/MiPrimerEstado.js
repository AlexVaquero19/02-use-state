import React, {useState} from 'react'

function MiPrimerEstado() {

  const [name, setName] = useState('Victor Robles');
  
  function handleClick(e, name) {
    setName(name);
  }

  function handleOnChange(e) {
    setName(e.target.value);
  }

  return (
    <>
      <h3>Componente: MiPrimerEstado</h3>
      <strong>{name}</strong>
      
      <button onClick={e => handleClick(e, 'Alejandro Vaquero')}>Cambiar Nombre</button>

      <input type="text" placeholder='Cambia el Nombre' onChange={e => handleOnChange(e, e.target.value)} />
    </>
  )
}

export default MiPrimerEstado