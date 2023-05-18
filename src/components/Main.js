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

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__card">
          <div className="profile__place-avatar">
            <img alt="фотография профиля" src={userAvatar} className="profile__avatar" />
            <button
              className="profile__avatar-button"
              type="button"
              onClick={props.onEditAvatar}
            ></button>
          </div>
          <div className="profile__info">
            <div className="profile__content">
              <h1 className="profile__title">{userName}</h1>
              <button
                className="profile__edit-button"
                type="button"
                onClick={props.onEditProfile}
              ></button>
            </div>
            <p className="profile__subtitle">{userDescription}</p>
          </div>
        </div>
        <button className="profile__add-button" type="button" onClick={props.onAddPlace}></button>
      </section>
      <section className="cards" aria-label="подборка фотографий интересных мест мира">
        <ul className="cards__list">
          <Card card={cards} onCardClick={props.onCardClick} />
        </ul>
      </section>
    </main>
  );
}

export default Main;
