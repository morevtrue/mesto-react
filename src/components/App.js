import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import ImagePopup from './ImagePopup.js';
import EditProfilePopup from './EditProfilePopup.js';
import EditAvatarPopup from './EditAvatarPopup.js';
import AddPlacePopup from './AddPlacePopup.js';
import DeleteCardPopup from './DeleteCardPopup.js';
import React from 'react';
import { api } from '../utils/api.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isDeleteCardPopup, setIsDeleteCardPopup] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({
    name: '',
    link: '',
    isOpen: false
  });
  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    Promise.all([api.getInitialCards(), api.getProfileContent()])
      .then(([cards, info]) => {
        setCards(cards);
        setCurrentUser(info);
      })
      .catch(err => console.log(err));
  }, []);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

<<<<<<< HEAD
=======
  function handleDeleteCardClick(card) {
    setIsDeleteCardPopup(card);
  }

>>>>>>> develop
  function handleCardClick(card) {
    setSelectedCard({
      name: card.name,
      link: card.link,
      isOpen: true
    });
<<<<<<< HEAD
=======
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    api
      .changeLikeCardStatus(card._id, !isLiked)
      .then(newCard => {
        setCards(state => state.map(c => (c._id === card._id ? newCard : c)));
      })
      .catch(err => console.log(err));
  }

  function handleCardDelete() {
    setIsLoading(true);
    api
      .deleteCard(isDeleteCardPopup._id)
      .then(() => {
        setCards(cards => cards.filter(card => card._id !== isDeleteCardPopup._id));
        closeAllPopups();
      })
      .catch(err => console.log(err))
      .finally(() => {
        setIsLoading(false);
      });
  }

  function handleUpdateUser(profileData) {
    setIsLoading(true);
    api
      .submitProfileData(profileData)
      .then(newData => {
        setCurrentUser(newData);
        closeAllPopups();
      })
      .catch(err => console.log(err))
      .finally(() => {
        setIsLoading(false);
      });
  }

  function handleUpdateAvatar(avatar) {
    setIsLoading(true);
    api
      .submitEditAvatar(avatar)
      .then(newAvatar => {
        setCurrentUser(newAvatar);
        closeAllPopups();
      })
      .catch(err => console.log(err))
      .finally(() => {
        setIsLoading(false);
      });
  }

  function handleAddPlaceSubmit(card) {
    setIsLoading(true);
    api
      .addNewCard(card)
      .then(newCard => {
        setCards([newCard, ...cards]);
        closeAllPopups();
      })
      .catch(err => console.log(err))
      .finally(() => {
        setIsLoading(false);
      });
>>>>>>> develop
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({});
    setIsDeleteCardPopup(false);
  }

  return (
<<<<<<< HEAD
    <div className="page">
      <Header />
      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={handleCardClick}
      />
      <Footer />
      <PopupWithForm
        name="edit_profile"
        title="Редактировать профиль"
        buttonName="Сохранить"
        isOpen={isEditProfilePopupOpen ? 'popup_opened' : 'no-open'}
        onClose={closeAllPopups}
      >
        <input
          type="text"
          name="popupInputName"
          className="popup__form-input popup__text popup__text_input_name"
          id="popup-input-name"
          minLength="2"
          maxLength="40"
          placeholder="Имя"
          required
        />
        <span className="popup__form-error popup-input-name-error"></span>
        <input
          type="text"
          name="popupInputJob"
          className="popup__form-input popup__text popup__text_input_job"
          id="popup-input-job"
          minLength="2"
          maxLength="200"
          placeholder="Занятие"
          required
        />
        <span className="popup__form-error popup-input-job-error"></span>
      </PopupWithForm>
      <PopupWithForm
        name="add_card"
        title="Новое место"
        buttonName="Создать"
        isOpen={isAddPlacePopupOpen ? 'popup_opened' : 'no-open'}
        onClose={closeAllPopups}
      >
        <input
          type="text"
          name="popupInputPlace"
          className="popup__form-input popup__text popup__text_input_place"
          id="popup-input-place"
          placeholder="Название"
          minLength="2"
          maxLength="30"
          required
        />
        <span className="popup__form-error popup-input-place-error"></span>
        <input
          type="url"
          name="popupInputSrc"
          id="popup-input-src"
          className="popup__form-input popup__text popup__text_input_src"
          placeholder="Ссылка на картинку"
          required
        />
        <span className="popup__form-error popup-input-src-error"></span>
      </PopupWithForm>
      <PopupWithForm name="delete_confirm" title="Вы уверены?" buttonName="Да" />
      <PopupWithForm
        name="change_avatar"
        title="Обновить аватар"
        buttonName="Сохранить"
        isOpen={isEditAvatarPopupOpen ? 'popup_opened' : 'no-open'}
        onClose={closeAllPopups}
      >
        <input
          type="url"
          name="popupInputAvatar"
          className="popup__form-input popup__text popup__text_input_avatar"
          id="popup-input-avatar"
          placeholder="Ссылка на картинку"
          required
        />
        <span className="popup__form-error popup-input-avatar-error"></span>
      </PopupWithForm>
      <ImagePopup onClose={closeAllPopups} card={selectedCard} />
    </div>
=======
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header />
        <Main
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick}
          onCardLike={handleCardLike}
          onCardDelete={handleDeleteCardClick}
          card={cards}
        />
        <Footer />
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
          onLoading={isLoading}
        />
        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onAddCard={handleAddPlaceSubmit}
          onLoading={isLoading}
        />
        <DeleteCardPopup
          isOpen={isDeleteCardPopup}
          onClose={closeAllPopups}
          onDeleteCard={handleCardDelete}
          onLoading={isLoading}
        />
        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
          onLoading={isLoading}
        />
        <ImagePopup onClose={closeAllPopups} card={selectedCard} />
      </div>
    </CurrentUserContext.Provider>
>>>>>>> develop
  );
}

export default App;
