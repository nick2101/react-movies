function Header() {
  return <header>
    <nav className="grey darken-3">
      <div className="nav-wrapper">
        <a href="/src/layout/Header" className="brand-logo">React Movies</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><a className="grey-text text-lighten-3" href="/src/layout/Header" target="_blank">React Movies</a></li>
          <li><a className="grey-text text-lighten-3" href="/src/layout/Header" target="_blank">React Shop</a></li>
          <li><a className="grey-text text-lighten-3" href="/src/layout/Header" target="_blank">React Food</a></li>
        </ul>
      </div>
    </nav>
  </header>
}

export {Header};
