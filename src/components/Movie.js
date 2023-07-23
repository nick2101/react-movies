function Movie(props) {
  const {id, name, image, episodes, released_on, aired_on} = props;

  return <div id={id} className="card">
    <div className="card-image waves-effect waves-block waves-light">
      <img className="activator" src={`https://shikimori.me${image.original}`} alt={name}/>
    </div>
    <div className="card-content">
      <span className="card-title activator grey-text text-darken-4">{name}</span>
      <p>{new Date(released_on || aired_on).toDateString().slice(4)} - <span>
                    {`${episodes} episode${episodes % 10 === 1 ? '' : 's'}`}</span>
      </p>
    </div>
  </div>
}

export {Movie};
