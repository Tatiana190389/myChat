import { elements } from './UI';

export function showPopup(popupName) {
    popupName.style.display = 'block';
}

export function hidePopup(popupName) {
    popupName.style.display = 'none';
}

export function showPopupConfirmation() {
    showPopup(elements.popupOverlayConfirmation);
    hidePopup(elements.popupOverlayAuthorization);
}
