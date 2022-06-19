import React, {useState} from 'react';
import PropTypes from 'prop-types';

function EjercicioComponent({year}) {
  
  const [yearNow, setYearNow] = useState(year);

  function handleClickNext() {
    setYearNow(yearNow + 1);
  }

  function handleClickPrevious() {
    setYearNow(yearNow - 1);
  }

  function handleClickChnageYear(e) {
    let data = parseInt(e.target.value);

    Number.isInteger(data) ? setYearNow(data) : setYearNow(year);
  }
  
  return (
    <>
      <h2>Ejercicio con Eventos y useState</h2>

      <p className='label'>
        <strong>{yearNow}</strong>
      </p>

      <div className='buttons'>
        <button onClick={handleClickPrevious}>Anterior</button>
        <button onClick={handleClickNext}>Siguiente</button>
      </div>

      <input type='text' placeholder='Introduce un Año' onChange={handleClickChnageYear} />
    </>
  )
}

EjercicioComponent.propTypes = {
  year: PropTypes.number.isRequired
}

export default EjercicioComponent