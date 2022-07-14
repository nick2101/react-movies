import React, { useEffect, useState } from "react";
import { Movies } from "../components/Movies";
import { Preloader } from "../components/Preloader";
import { Search } from "../components/Search";

function Main() {

  const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    const searchMovies = (search, kind = 'all') => {
        setLoading(true);
        fetch(`https://shikimori.one/api/animes?limit=10&order=popularity&censored=true&search=${search}${kind === 'all' ? '' : `&kind=${kind}`}`)
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
        fetch('https://shikimori.one/api/animes?limit=10&order=popularity&censored=true')
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
            <Search searchMovies={searchMovies} />
            {loading ? (
                <Preloader />
            ) : (
                <Movies movies={movies} />
            )}
        </main>
    );
}

export { Main };
