import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';
import React from 'react';

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({
      name: '',
      link: '',
      isOpen: false, 
  });

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  };

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(evt) {
    setSelectedCard({
      name: evt.target.alt,
      link: evt.target.src,
      isOpen: true, 
    });
    
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({});
  }

  return (
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
        <input type="text" name="popupInputName" className="popup__form-input popup__text popup__text_input_name" id="popup-input-name" minLength="2" maxLength="40" placeholder="Имя" required />
        <span className="popup__form-error popup-input-name-error"></span>
        <input type="text" name="popupInputJob" className="popup__form-input popup__text popup__text_input_job" id="popup-input-job" minLength="2" maxLength="200" placeholder="Занятие" required />
        <span className="popup__form-error popup-input-job-error"></span>
      </PopupWithForm>
      <PopupWithForm
        name="add_card" 
        title="Новое место" 
        buttonName="Создать" 
        isOpen={isAddPlacePopupOpen ? 'popup_opened' : 'no-open'} 
        onClose={closeAllPopups}
      >
        <input type="text" name="popupInputPlace" className="popup__form-input popup__text popup__text_input_place" id="popup-input-place" placeholder="Название" minLength="2" maxLength="30" required />
        <span className="popup__form-error popup-input-place-error"></span>
        <input type="url" name="popupInputSrc" id="popup-input-src" className="popup__form-input popup__text popup__text_input_src" placeholder="Ссылка на картинку" required />
        <span className="popup__form-error popup-input-src-error"></span>
      </PopupWithForm>
      <PopupWithForm 
        name="delete_confirm" 
        title="Вы уверены?" 
        buttonName="Да" 
      />
      <PopupWithForm 
        name="change_avatar" 
        title="Обновить аватар"
        buttonName="Сохранить" 
        isOpen={isEditAvatarPopupOpen ? 'popup_opened' : 'no-open'} 
        onClose={closeAllPopups}
      >
        <input type="url" name="popupInputAvatar" className="popup__form-input popup__text popup__text_input_avatar" id="popup-input-avatar" placeholder="Ссылка на картинку" required />
        <span className="popup__form-error popup-input-avatar-error"></span>
      </PopupWithForm>
      <ImagePopup 
        onClose={closeAllPopups}
        card={selectedCard}
      />
    </div>
  );
}

export default App;
