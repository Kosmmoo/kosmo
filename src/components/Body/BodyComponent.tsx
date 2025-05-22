import style from './BodyComponent.module.css';

export const BodyComponent = () => {
  return (
    <body className={style.body}>
      <div className={style.container}>
        <h2 className={style.title}>O mně</h2>
        <span className={style.text}>
          Ahoj, jmenuji se Kosmo a jsem studentem střední školy. Mám rád programování a rád se učím
          nové věci. V současné době se zaměřuji na webový vývoj a snažím se zlepšovat své
          dovednosti v této oblasti. Baví mě objevovat nové technologie, které mají skutečný dopad
          od moderního frontendu až po umělou inteligenci. Experimentuju s různými projekty,
          například jednoduché webovky, a mám chuť posouvat své znalosti pořád dál.
        </span>
      </div>
      <div className={style.container}>
        <h2 className={style.title}>Projekty</h2>
        <span className={style.text}>Zde jsou některé projekty, na kterých jsem pracoval:</span>
      </div>
    </body>
  );
};
