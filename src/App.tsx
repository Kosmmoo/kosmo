import './App.css';
import profilovka from './assets/profilovka.png';
import {BodyComponent} from './components/Body/BodyComponent.tsx';
import {HeaderComponent} from './components/Header/HeaderComponent';

function App() {
  return (
    <>
      <HeaderComponent />
      <div className="profilovka-container">
        <img src={profilovka} className="profilovka" alt="profilovka" />
        <h1>Kosmo</h1>
      </div>
      <BodyComponent />
    </>
  );
}

export default App;
