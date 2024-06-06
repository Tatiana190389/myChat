import { elements } from './UI';
import Cookies from 'js-cookie';

export function createMessage(user: string, text: string, date: string, email: string) {
    const templateRoot = document.createElement('div');
    const templateContent = elements.template.content.cloneNode(true) as HTMLTemplateElement;
    const message = templateContent.querySelector('.message') as HTMLElement;
    const time = templateContent.querySelector('.time') as HTMLElement;
    const sender = templateContent.querySelector('.sender') as HTMLElement;

    message.textContent = text;
    sender.textContent = user + ':';
    time.innerHTML = date;

    templateRoot.append(templateContent);
    templateRoot.classList.add('i');

    const myEmail = Cookies.get('email');
    const userEmail = email;

    myEmail === userEmail ? templateRoot.classList.add('i') : templateRoot.classList.add('it');

    buttonsEmojiHandler();

    return templateRoot;
}

function createCounter() {
    let count = 0;
    return function () {
        count++;
        return count;
    };
}

function buttonsEmojiHandler() {
    const counterSmile = createCounter();
    const counterStars = createCounter();
    const counterHeart = createCounter();
    const counterBomb = createCounter();

    const smileButton = document.querySelector('.smile');
    const smileIndex = document.querySelector('.smile_index') as HTMLElement;
    const starsButton = document.querySelector('.stars');
    const starsIndex = document.querySelector('.stars_index') as HTMLElement;
    const heartButton = document.querySelector('.heart');
    const heartIndex = document.querySelector('.heart_index') as HTMLElement;
    const bombButton = document.querySelector('.bomb');
    const bombIndex = document.querySelector('.bomb_index') as HTMLElement;

    smileButton?.addEventListener('click', () => {
        smileIndex.innerHTML = String(counterSmile());
    });

    starsButton?.addEventListener('click', () => {
        starsIndex.innerHTML = String(counterStars());
    });

    heartButton?.addEventListener('click', () => {
        heartIndex.innerHTML = String(counterHeart());
    });

    bombButton?.addEventListener('click', () => {
        bombIndex.innerHTML = String(counterBomb());
    });
}
