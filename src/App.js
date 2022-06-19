import logo from './logo.svg';
import './App.css';
import EjercicioComponent from './components/EjercicioComponent';
import MiPrimerEstado from './components/MiPrimerEstado';

function App() {

  const fecha = new Date();
  const yearActual = fecha.getFullYear();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <h1>El Hook useState en React</h1>

        <MiPrimerEstado />

        <EjercicioComponent year={yearActual}/>
      </header>
    </div>
  );
}

export default App;
