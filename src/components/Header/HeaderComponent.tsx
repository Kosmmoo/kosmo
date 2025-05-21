import style from './HeaderComponent.module.css';
export const HeaderComponent = () => {
  return (
    <header className={style.header}>
      <ul className={style.list}>
        <li className={style.listItem}>O mně</li>
        <li className={style.listItem}>Projekty</li>
        <li className={style.listItem}>Kontakty</li>
      </ul>
    </header>
  );
};
