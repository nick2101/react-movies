import {useEffect, useState} from "react";
import {Preloader} from "../components/Preloader";
import {Search} from "../components/Search";
import {Movies} from "../components/Movies";

function Main() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const searchMovies = (search, kind = 'all') => {
    setLoading(true);
    fetch(`https://shikimori.me/api/animes?limit=10&order=popularity&censored=true&search=${search}${kind === 'all' ? '' : `&kind=${kind}`}`)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }

  useEffect(() => {
    fetch('https://shikimori.me/api/animes?limit=10&order=popularity&censored=true')
      .then((response) => response.json())
      .then((data) => {
        setMovies(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  return (
    <main className="container content">
      <Search searchMovies={searchMovies}/>
      {loading ? <Preloader/> : <Movies movies={movies}/>}
    </main>
  );
}

export {Main};
