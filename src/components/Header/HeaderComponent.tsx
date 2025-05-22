import discordLogo from '../../assets/discord_logo.png';
import logoGithub from '../../assets/logo_github.png';
import style from './HeaderComponent.module.css';
export const HeaderComponent = () => {
  return (
    <header className={style.header}>
      <a href="https://discord.com/users/kosmo145" target="_blank">
        <img src={discordLogo} className={style.logo} alt="discord" />
      </a>
      <a href="https://github.com" target="_blank">
        <img src={logoGithub} className={style.logo} alt="github" />
      </a>
    </header>
  );
};
