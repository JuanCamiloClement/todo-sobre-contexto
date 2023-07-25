import './App.css'
import { useContext } from 'react';
import { VotesContext } from './store/VotesContext';
import Candidate from './components/Candidate';
import Filter from './components/Filter';
import ShowTotal from './components/ShowTotal';
import TotalPerCandidate from './components/TotalPerCandidate';

function App() {

  const store = useContext(VotesContext);

  return (
    <div>
      <h1>Todo sobre contexto</h1>
      <div>
        <div className='candidates'>
          <div>
            <img src="./catdidate-1.webp" alt="" />
            <Candidate option='1' handleIncrement={store.handleIncrementOne}/>
          </div>
          <div>
            <img src="./catdidate-2.webp" alt="" />
            <Candidate option='2' handleIncrement={store.handleIncrementTwo}/>
          </div>
          <div>
            <img src="./catdidate-3.webp" alt="" />
            <Candidate option='3' handleIncrement={store.handleIncrementThree}/>
          </div>
          <div>
            <img src="./catdidate-4.webp" alt="" />
            <Candidate option='4' handleIncrement={store.handleIncrementFour}/>
          </div>
        </div>
        <div className='secondContainer'>
          <div className='filter'>
            <h2>Filtro</h2>
            <Filter />
          </div>
          <div className='totals'>
            <div>
              <h2>Total</h2>
              <ShowTotal />
            </div>
            <div>
              <h2>Totales por candidato</h2>
              <TotalPerCandidate />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
