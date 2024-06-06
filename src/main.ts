import Cookies from 'js-cookie';
import { sendCodeOnEmail, getUser, changeName, getMessage } from './request';
import { elements } from './UI';
import { hidePopup, showPopup, showPopupConfirmation } from './popup';
import { createMessage } from './createMessage';
import { formatDate } from './formatDate';
import { renderAllMessages } from './renderAllMessages';

const token = Cookies.get('userToken');
const socket = new WebSocket(`wss://edu.strada.one/websockets?${token}`);
function sendSocketMessage(inputText: string) {
    socket.send(JSON.stringify({ text: inputText }));
}

let historyMessages: [] = [];

async function loadingMessages() {
    const dataHistoryMessages = await getMessage();
    historyMessages = dataHistoryMessages.messages;
}

async function showMessageMe() {
    const userInfo = await getUser();
    const user = userInfo.name;
    const inputText = elements.input.value;
    const date = formatDate(new Date());
    const userEmail = Cookies.get('email') ?? '';
    if (inputText === '') {
        elements.mistake.textContent = 'Заполните пустое поле';
    } else {
        elements.mistake.textContent = '';
        elements.input.value = '';
        const newMessage = createMessage(user, inputText, date, userEmail);
        elements.messages.append(newMessage);
    }
    sendSocketMessage(inputText);
}

async function allUsersEmail() {
    await loadingMessages();
    let users = new Set();
    historyMessages.forEach((item) => {
        users.add(item.user.email);
    });
    return users;
}

async function allUsersName() {
    await loadingMessages();
    const usersName = new Set();
    const usersEmail = await allUsersEmail();
    usersEmail.forEach((email) => {
        const findUser = historyMessages.reverse().find((item) => item.user.email === email);
        const userName = findUser.user.name;
        usersName.add({ email: email, name: userName });
    });
    return usersName;
}

function createNewUser(userName: string) {
    let isCurrentMessage = true;
    const list = document.querySelector('.users_list');
    const user = document.createElement('li');

    user.addEventListener('click', function () {
        if (isCurrentMessage) {
            const userName = user.textContent;
            user.style.backgroundColor = 'grey';
            renderMessageUser(userName);
            isCurrentMessage = false;
        } else {
            user.style.backgroundColor = 'white';
            elements.messages.innerHTML = '';
            renderAllMessages();
            elements.messages.addEventListener('scroll', scrollHandler);
            isCurrentMessage = true;
        }
    });
    user.textContent = userName;
    list?.append(user);
}

async function renderUsersList() {
    const usersName = await allUsersName();
    usersName.forEach(function (user) {
        const userName = user.name;
        createNewUser(userName);
    });
}

async function renderMessageUser(userName: string) {
    const dataHistoryMessages = await getMessage();
    const users = await allUsersName();
    let historyMessages = dataHistoryMessages.messages;

    const userCurrent = Array.from(users).find((user) => user.name === userName);

    const messageArr = historyMessages.filter((item) => item.user.email === userCurrent.email);

    elements.messages.innerHTML = '';
    messageArr.forEach((message) => {
        const text = message.text;
        const user = message.user.name;
        const date = formatDate(message.createdAt);
        const userEmail = message.user.email;

        const userMessage = createMessage(user, text, date, userEmail);
        elements.messages.prepend(userMessage);
        elements.messages.removeEventListener('scroll', scrollHandler);
    });
}

function enterMessageHandler(event: Event) {
    event.preventDefault();
    showMessageMe();
}

function scrollHandler() {
    if (elements.messages.scrollTop === 0) {
        renderAllMessages();
    }
}

function handlerGetCode(event: Event) {
    event.preventDefault();
    const userEmail = elements.inputEmail.value;
    Cookies.set('email', userEmail);
    sendCodeOnEmail(userEmail);
    elements.formAuthorization.reset();
    showPopupConfirmation();
}

function codeAuthorizationHandler(event: Event) {
    event.preventDefault();
    const token = elements.inputCode.value;
    Cookies.set('userToken', token);
}

function changeNameHandler(event: Event) {
    event.preventDefault();
    const name = elements.inputName.value;
    changeName(name);
    hidePopup(elements.popupOverlaySettings);
    elements.settingsForm.reset();
}

document.addEventListener('DOMContentLoaded', renderAllMessages);
document.addEventListener('DOMContentLoaded', renderUsersList);
elements.messages.addEventListener('scroll', scrollHandler);
elements.settingsForm.addEventListener('submit', changeNameHandler);
elements.confirmationForm.addEventListener('click', codeAuthorizationHandler);
elements.formFooter.addEventListener('submit', enterMessageHandler);
elements.settings.addEventListener('click', () => showPopup(elements.popupOverlaySettings));
elements.closeModalSettings.addEventListener('click', () => hidePopup(elements.popupOverlaySettings));
elements.authorization.addEventListener('click', () => showPopup(elements.popupOverlayAuthorization));
elements.closeModalAuthorization.addEventListener('click', () => hidePopup(elements.popupOverlayAuthorization));
elements.enterCodeButton.addEventListener('click', showPopupConfirmation);
elements.closeModalConfirmation.addEventListener('click', () => hidePopup(elements.popupOverlayConfirmation));
elements.formAuthorization.addEventListener('submit', handlerGetCode);
