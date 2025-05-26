import Email from '../../assets/email-8-svgrepo-com.svg';
import discordLogo from '../../assets/icons8-discord-30.svg';
import logoGithub from '../../assets/icons8-github-24.svg';
import style from './HeaderComponent.module.css';
export const HeaderComponent = () => {
  return (
    <header className={style.header}>
      <a href="https://discord.com/users/kosmo145" target="_blank" rel="noopener noreferrer">
        <img src={discordLogo} className={style.logo} alt="discord" />
      </a>
      <a href="https://github.com/Kosmmoo" target="_blank" rel="noopener noreferrer">
        <img src={logoGithub} className={style.logo} alt="github" />
      </a>
      <a href="mailto:vaclav.pesek2@educanet.cz?subject=Z webu Kosmo" rel="noopener noreferrer">
        <img src={Email} className={style.logo} alt="email" />
      </a>
    </header>
  );
};
