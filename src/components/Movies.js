import {Movie} from "./Movie";

function Movies(props) {
  const {movies} = props;

  return <div className="movies">
    {movies.length ? movies.map((movie) => (<Movie key={movie.id} {...movie} />)) : <h4>Movie not found</h4>}
  </div>
}

export {Movies};
