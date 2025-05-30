import {useState} from 'react';
import discordLogo from '../../assets/discord.svg';
import Email from '../../assets/email.svg';
import logoGithub from '../../assets/github.svg';
import Moon from '../../assets/moon-stars.svg';
import Sun from '../../assets/sun.svg';
import style from './HeaderComponent.module.css';

export const HeaderComponent = () => {
  const [dark, setDark] = useState(() => {
    const isLocalTheme = localStorage.getItem('theme');
    if (isLocalTheme && isLocalTheme === 'dark') {
      document.documentElement.classList.add('dark');
      return true;
    }
    if (isLocalTheme && isLocalTheme === 'light') {
      document.documentElement.classList.add('light');
      return false;
    }
    return false;
  });

  const toggleTheme = () => {
    setDark((previousValue) => {
      localStorage.setItem('theme', previousValue ? 'light' : 'dark');
      document.documentElement.classList.toggle('dark', !previousValue);
      return !previousValue;
    });
  };

  return (
    <header className={style.header}>
      <a href="https://discord.com/users/kosmo145" target="_blank" rel="noopener noreferrer">
        <img src={discordLogo} className={`${style.logo} theme-invert`} alt="discord" />
      </a>
      <a href="https://github.com/Kosmmoo" target="_blank" rel="noopener noreferrer">
        <img src={logoGithub} className={`${style.logo} theme-invert`} alt="github" />
      </a>
      <a href="mailto:vaclav.pesek2@educanet.cz?subject=Z webu Kosmo" rel="noopener noreferrer">
        <img src={Email} className={`${style.logo} theme-invert`} alt="email" />
      </a>
      <img
        src={dark ? Moon : Sun}
        className={`${style.logo} theme-invert`}
        alt={dark ? 'světlý režim' : 'tmavý režim'}
        onClick={toggleTheme}
        title={dark ? 'Přepnout na světlý režim' : 'Přepnout na tmavý režim'}
      />
    </header>
  );
};
