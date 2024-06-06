import { elements } from './UI';
import { getMessage } from './request';
import { formatDate } from './formatDate';
import { createMessage } from './createMessage';

export async function renderAllMessages() {
    let messageCurrent = 0;
    const messageNext = 20;
    let counterMessages = 0;
    let isAllMessages = true;

    const dataHistoryMessages = await getMessage();
    let historyMessages = dataHistoryMessages.messages;

    if (counterMessages === historyMessages.length) {
        isAllMessages = false;
        const lastMessage = document.createElement('div');
        lastMessage.classList.add('lastMessage');
        lastMessage.textContent = 'Вся история загружена';
        elements.messages.prepend(lastMessage);
        return;
    }

    const currentMessages = historyMessages.slice(messageCurrent, messageCurrent + messageNext);
    currentMessages.forEach((item) => {
        const text = item.text;
        const user = item.user.name;
        const date = formatDate(item.createdAt);
        const userEmail = item.user.email;

        const message = createMessage(user, text, date, userEmail);
        elements.messages.prepend(message);
        counterMessages += 1;
    });
    elements.messages.scrollTop = elements.messages.scrollHeight;
    messageCurrent += messageNext;
}
