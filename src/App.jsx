import './App.css'
import ButtonGroup from './components/buttonOptions'
import MyP5Component from './components/sketch_index';
import sol from './assets/sol.gif';


function App() {
  return (
    <>
    <div>
      <ButtonGroup />
      <MyP5Component />
    </div>

    <p>Arnol, 2024</p>

    <div>
    <img src={sol}></img>

    </div>
    </>
  )
}

export default App
