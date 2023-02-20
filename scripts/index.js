// Объявляем переменные
const popupElement = document.querySelector('.popup');  // Фон попап окна
const formElement = document.querySelector('.popup__block'); // Само окно
const openPopupButton = document.querySelector('.profile__edit-button'); // кнопка редактирования профиля
const closePopupButton = document.querySelector('.popup__close'); // кнопка для закрытия окна

const profileNameElement = document.querySelector('.profile__name'); // профиль: 'имя'
const profileAboutElement = document.querySelector('.profile__content'); // профиль: 'о себе'
const nameInput = document.querySelector('#name'); // профиль: инпут 'имя'
const aboutmeInput = document.querySelector('#aboutme'); // профиль: инпут 'о себе'
const saveButtonElement = document.querySelector('.form__save'); // профиль: инпут кнопка 'Save'


function formSubmitHandler (evt) {
    evt.preventDefault(); // Просим форму не отправлять данные самостоятельно

    profileNameElement.textContent = nameInput.value;
    profileAboutElement.textContent = aboutmeInput.value;
};

// открытие попап профиля
const openPopup = function(e) {
    e.preventDefault();
    popupElement.classList.add('popup_active');
    formElement.classList.add('popup__block_active');

    // получение данных с профиля input: "Имя", "О себе"
    nameInput.value = profileNameElement.textContent;
    aboutmeInput.value = profileAboutElement.textContent;
};
openPopupButton.addEventListener('click', openPopup);

// закрытие попапа через кнопку 'Close'
const closePopup = function(e) {
    popupElement.classList.remove('popup_active');
    formElement.classList.remove('popup__block_active');
};
closePopupButton.addEventListener('click', closePopup);


// закрытие окна при нажатии на фон попапа
popupElement.addEventListener('click', (e) => {  // Вешаем обработчик на весь документ
   if(e.target === popupElement) {  // цель клика - фон
    closePopup();
  }
});

// закрытие попапа через кнопку 'Save'
formElement.addEventListener('submit', () => {
    closePopup();
});

formElement.addEventListener('submit', formSubmitHandler);