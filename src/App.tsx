import './App.css';
import profilovka from './assets/profilovka.png';
import {BodyComponent} from './components/Body/BodyComponent.tsx';
import {HeaderComponent} from './components/Header/HeaderComponent';

export const App = () => {
  return (
    <>
      <HeaderComponent />
      <div className="profile-container">
        <img src={profilovka} className="profile" alt="avatar" />
        <h1>Kosmo</h1>
      </div>

      <BodyComponent />
    </>
  );
};
export default App;