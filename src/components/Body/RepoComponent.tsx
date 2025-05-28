import {type Repo} from './BodyComponent.tsx';
import style from './RepoComponent.module.css';

export const RepoComponent = ({repos}: {repos: Repo[]}) => {
  const handleClick = (url: string) => () => {
    window.open(url, '_blank');
  };

  return (
    <>
      {repos.map((repo) => (
        <div onClick={handleClick(repo.html_url)} className={style.container} key={repo.id}>
          <div className={style.header}>
            <h2 className={style.title}>{repo.name}</h2>
            <span className={style.Stars}> ⭐ {repo.stargazers_count}</span>
          </div>
          <span className={style.text}>{repo.description}</span>
          <span className={style.language}>
            {repo.language ? `Jazyk: ${repo.language}` : 'Jazyk: Není uveden'}
          </span>
          <div className={style.footer}>
            <span className={style.date}>
              Vytvořeno: {new Date(repo.created_at).toLocaleDateString('cs-CZ')}
            </span>
            <span className={style.date}>
              Aktualizováno: {new Date(repo.updated_at).toLocaleDateString('cs-CZ')}
            </span>
          </div>
        </div>
      ))}
    </>
  );
};
