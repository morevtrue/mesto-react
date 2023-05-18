function Card(props) {
  function handleClick(evt) {
    props.onCardClick(evt);
  }

  return (
    <>
      {props.card.map(card => (
        <li className="card" key={card['_id']}>
          <img className="card__image" src={card.link} alt={card.name} onClick={handleClick} />
          <button
            className="card__delete-button card__delete-button_disabled"
            type="button"
          ></button>
          <div className="card__content">
            <h2 className="card__text">{card.name}</h2>
            <div className="card__place-like">
              <button className="card__like" type="button"></button>
              <p className="card__like-counter">{card.likes.length}</p>
            </div>
          </div>
        </li>
      ))}
    </>
  );
}

export default Card;
