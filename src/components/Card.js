function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <li className="card">
      <img
        className="card__image"
        src={props.card.link}
        alt={props.card.name}
        onClick={handleClick}
      />
      <button className="card__delete-button card__delete-button_disabled" type="button"></button>
      <div className="card__content">
        <h2 className="card__text">{props.card.name}</h2>
        <div className="card__place-like">
          <button className="card__like" type="button"></button>
          <p className="card__like-counter">{props.card.likes.length}</p>
        </div>
      </div>
    </li>
  );
}

export default Card;
