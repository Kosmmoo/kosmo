import {useEffect, useState} from 'react';
import style from './BodyComponent.module.css';
import {RepoComponent} from './RepoComponent';
export type Repo = {
  id: number;
  name: string;
  html_url: string;
  owner: {
    login: string;
    id: number;
    avatar_url: string;
    url: string;
    html_url: string;
  };
  description: string;
  language: string;
  stargazers_count: number;
  created_at: string;
  updated_at: string;
};

export const BodyComponent = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.github.com/users/Kosmmoo/repos`)
      .then((response) => response.json())
      .then((data: Repo[]) => {
        setRepos(data);
      })
      .catch((error) => {
        console.error('Chyba při načítání repozitářů:', error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
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
        <div>
          {loading ? (
            <div className={style.spinnerContainer}>
              <div className={style.spinner}></div>
            </div>
          ) : (
            <RepoComponent repos={repos} />
          )}
        </div>
      </div>
    </>
  );
};
