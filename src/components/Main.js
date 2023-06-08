<<<<<<< HEAD
import { api } from '../utils/api.js';
import React from 'react';
import Card from './Card.js';

function Main(props) {
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([
      api.getProfileContent({
        name: userName,
        about: userDescription,
        avatar: userAvatar
      }),
      api.getInitialCards()
    ])
      .then(([info, cards]) => {
        setUserName(info.name);
        setUserDescription(info.about);
        setUserAvatar(info.avatar);
        setCards(cards);
      })
      .catch(err => console.log(err));
  }, [userName, userDescription, userAvatar]);
=======
import React from 'react';
import Card from './Card.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

function Main(props) {
  const currentUser = React.useContext(CurrentUserContext);
>>>>>>> develop

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__card">
          <div className="profile__place-avatar">
<<<<<<< HEAD
            <img alt="фотография профиля" src={userAvatar} className="profile__avatar" />
=======
            <img alt="фотография профиля" src={currentUser.avatar} className="profile__avatar" />
>>>>>>> develop
            <button
              className="profile__avatar-button"
              type="button"
              onClick={props.onEditAvatar}
            ></button>
          </div>
          <div className="profile__info">
            <div className="profile__content">
<<<<<<< HEAD
              <h1 className="profile__title">{userName}</h1>
=======
              <h1 className="profile__title">{currentUser.name}</h1>
>>>>>>> develop
              <button
                className="profile__edit-button"
                type="button"
                onClick={props.onEditProfile}
              ></button>
            </div>
<<<<<<< HEAD
            <p className="profile__subtitle">{userDescription}</p>
=======
            <p className="profile__subtitle">{currentUser.about}</p>
>>>>>>> develop
          </div>
        </div>
        <button className="profile__add-button" type="button" onClick={props.onAddPlace}></button>
      </section>
      <section className="cards" aria-label="подборка фотографий интересных мест мира">
        <ul className="cards__list">
<<<<<<< HEAD
          {cards.map(card => (
            <Card key={card._id} card={card} onCardClick={props.onCardClick} />
=======
          {props.card.map(card => (
            <Card
              key={card._id}
              card={card}
              onCardClick={props.onCardClick}
              onCardLike={props.onCardLike}
              onCardDelete={props.onCardDelete}
            />
>>>>>>> develop
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
