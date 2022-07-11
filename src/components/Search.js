import React from "react";

class Search extends React.Component {
    state = {
        search: '',
        kind: 'all',
    }

    handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            this.props.searchMovies(this.state.search, this.state.kind);
        }
    }

    handleFilter = (event) => {
        this.setState(() => ({ kind: event.target.dataset.type }),
            () => { this.props.searchMovies(this.state.search, this.state.kind); });
    }

    render() {
        return (
            <div className="row">
                <div className="input-field">
                    <input
                        className="validate"
                        type="search"
                        placeholder="search"
                        value={this.state.search}
                        onChange={(e) => this.setState({ search: e.target.value })}
                        onKeyDown={this.handleKeyDown}
                    />
                    <button
                        className="btn grey darken-1 search-btn"
                        onClick={() => this.props.searchMovies(this.state.search, this.state.kind)}
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
                                onChange={this.handleFilter}
                                checked={this.state.kind === 'all'}
                            />
                            <span>All</span>
                        </label>
                        <label>
                            <input
                                className="with-gap"
                                name="kind"
                                type="radio"
                                data-type="movie"
                                onChange={this.handleFilter}
                                checked={this.state.kind === 'movie'}
                            />
                            <span>Movies</span>
                        </label>
                        <label>
                            <input
                                className="with-gap"
                                name="kind"
                                type="radio"
                                data-type="tv"
                                onChange={this.handleFilter}
                                checked={this.state.kind === 'tv'}
                            />
                            <span>Series</span>
                        </label>
                    </div>
                </div>
            </div>
        );
    }
}

export { Search };