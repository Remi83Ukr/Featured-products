import '../../styles/sections/custom-featured-product.scss';
import { popupOpenAndCloseLogic, assignBackDropClose } from '../snippets/popupOpenAndCloseLogic.js';

const bundleButton = document.getElementById('bundle-popup-button'),
    bundlePopup = document.getElementById('bundle-popup'),
    quotationCloseButtons = document.querySelectorAll('[data-modal-close]'),
    backDrop = document.getElementById('bg-block');

if (bundleButton) {
    bundleButton.addEventListener('click', () => {
        popupOpenAndCloseLogic(bundlePopup, backDrop);
    })
}

for (const quotationCloseButton of quotationCloseButtons) {
    quotationCloseButton.addEventListener('click', () => {
        popupOpenAndCloseLogic(bundlePopup, backDrop);
    })
}

assignBackDropClose(bundlePopup, backDrop);

