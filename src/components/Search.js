import {useState} from "react";

function Search(props) {
  const {searchMovies = Function.prototype} = props;

  const [search, setSearch] = useState('');
  const [kind, setKind] = useState('all');

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      searchMovies(search, kind);
    }
  }

  const handleFilter = (event) => {
    setKind(event.target.dataset.type);
    searchMovies(search, event.target.dataset.type);
  }

  return (
    <div className="row">
      <div className="input-field">
        <input
          className="validate"
          type="search"
          placeholder="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button
          className="btn grey darken-1 search-btn"
          onClick={() => searchMovies(search, kind)}
        >
          Search
        </button>
        <div>
          <label>
            <input
              className="with-gap"
              name="kind"
              type="radio"
              data-type="all"
              onChange={handleFilter}
              checked={kind === 'all'}
            />
            <span>All</span>
          </label>
          <label>
            <input
              className="with-gap"
              name="kind"
              type="radio"
              data-type="movie"
              onChange={handleFilter}
              checked={kind === 'movie'}
            />
            <span>Movies</span>
          </label>
          <label>
            <input
              className="with-gap"
              name="kind"
              type="radio"
              data-type="tv"
              onChange={handleFilter}
              checked={kind === 'tv'}
            />
            <span>Series</span>
          </label>
          <label>
            <input
              className="with-gap"
              name="kind"
              type="radio"
              data-type="special"
              onChange={handleFilter}
              checked={kind === 'special'}
            />
            <span>Special</span>
          </label>
          <label>
            <input
              className="with-gap"
              name="kind"
              type="radio"
              data-type="ova"
              onChange={handleFilter}
              checked={kind === 'ova'}
            />
            <span>OVA</span>
          </label>
          <label>
            <input
              className="with-gap"
              name="kind"
              type="radio"
              data-type="ona"
              onChange={handleFilter}
              checked={kind === 'ona'}
            />
            <span>ONA</span>
          </label>
        </div>
      </div>
    </div>
  );
}

export {Search};
