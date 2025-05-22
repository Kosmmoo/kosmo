import reactLogo from '../../assets/react.svg';
import style from './HeaderComponent.module.css';
import viteLogo from '/vite.svg';
export const HeaderComponent = () => {
  return (
    <header className={style.header}>
      <a href="https://vite.dev" target="_blank">
        <img src={viteLogo} className={style.logo} alt="Vite logo" />
      </a>
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className={style.logo} alt="React logo" />
      </a>
    </header>
  );
};
