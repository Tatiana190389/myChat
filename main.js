import { format } from 'date-fns';
const settings = document.querySelector('.settings');
const closeModal = document.querySelector('.close_cross');
const popupOverlay = document.querySelector('.popup-overlay');
const main = document.querySelector('.main');
const template = document.querySelector('#messageI');
const input = document.querySelector('.inputMessage');
const formFooter = document.querySelector('.form_footer');
const mistake = document.querySelector('.mistake');

function showPopup() {
    popupOverlay.style.display = 'block';
}

function hidePopup() {
    popupOverlay.style.display = 'none';
}

function showMessageI() {
    const inputText = input.value;
    if (inputText === '') {
        mistake.textContent = 'Заполните пустое поле';
    } else {
        mistake.textContent = '';
        const templateRoot = document.createElement('div');
        templateRoot.classList.add('i');
        const templateContent = template.content.cloneNode(true);
        const text = templateContent.querySelector('.text');
        const time = templateContent.querySelector('.time');
        text.textContent = `Я:` + inputText;
        time.textContent = format(new Date(), 'HH:mm');
        templateRoot.append(templateContent);
        main.append(templateRoot);
        input.value = '';
    }
}

function buttonHandler(event) {
    event.preventDefault();
    showMessageI();
}

formFooter.addEventListener('submit', buttonHandler);
settings.addEventListener('click', showPopup);
closeModal.addEventListener('click', hidePopup);
