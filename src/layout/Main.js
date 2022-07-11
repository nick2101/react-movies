import React from "react";
import { Movies } from "../components/Movies";
import { Preloader } from "../components/Preloader";
import { Search } from "../components/Search";

class Main extends React.Component {
    state = {
        movies: [],
        loading: true,
    }

    componentDidMount() {
        fetch('https://shikimori.one/api/animes?limit=10&order=popularity&censored=true')
            .then((response) => response.json())
            .then((data) => this.setState({ movies: data, loading: false }))
            .catch((error) => {
                console.error(error);
                this.setState({ loading: false });
            });
    }

    searchMovies = (search, kind = 'all') => {
        this.setState({ loading: true });
        fetch(`https://shikimori.one/api/animes?limit=10&order=popularity&censored=true&search=${search}${kind === 'all' ? '' : `&kind=${kind}`}`)
            .then((response) => response.json())
            .then((data) => this.setState({ movies: data, loading: false }))
            .catch((error) => {
                console.error(error);
                this.setState({ loading: false });
            });
    }

    render() {
        const { movies, loading } = this.state;
        return <main className="container content">
            <Search searchMovies={this.searchMovies} />
            {loading ? (
                <Preloader />
            ) : (
                <Movies movies={movies} />
            )}
        </main>
    }
}

export { Main };