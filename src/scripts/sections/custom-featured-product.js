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

const selectBundleProducts = () => {
    const products = document.querySelectorAll('[data-related-products]');

    for (const product of products) {
        product.addEventListener('click', () => {
            if (!product.classList.contains('active')) {
                product.classList.add('active');
            } else {
                product.classList.remove('active');
            }
        })
    }
}

const addToCart = () => {
    const addButton = document.getElementById('bundle-button');

    addButton.addEventListener('click', function () {
        const selectedCheckboxes = [ ...document.querySelectorAll('[data-related-products].active')];

        if (selectedCheckboxes.length === 0) {
            addButton.innerText = 'choose products'
            return;
        }

        const mainItem = [
            {
                id: parseInt(bundlePopup.dataset.variantId),
                quantity: 1
            }
        ];

        const items = [
            ...selectedCheckboxes.map(checkbox => ({
                id: parseInt(checkbox.dataset.variantId),
                quantity: 1
            })),
            ...mainItem
        ];

        fetch('/cart/add.js', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ items: items })
        })
            .then(response => response.json())
            .then(() => {
                popupOpenAndCloseLogic(bundlePopup, backDrop);
                return fetch(window.Shopify.routes.root + '?sections=header,cart-drawer');
            })
            .then(res => res.json())
            .then(data => {
                const parser = new DOMParser();
                const newHeaderHTML = parser.parseFromString(data['header'], 'text/html');
                const newDrawerHTML = parser.parseFromString(data['cart-drawer'], 'text/html');
                const newHeader = newHeaderHTML.querySelector('header');
                const newDrawer = newDrawerHTML.querySelector('cart-drawer');
                const currentHeader = document.querySelector('header');
                const currentDrawer = document.querySelector('cart-drawer');
                if (newHeader && currentHeader) {
                    currentHeader.innerHTML = newHeader.innerHTML;
                }
                if (newDrawer && currentDrawer) {
                    currentDrawer.innerHTML = newDrawer.innerHTML;
                }
                document.querySelector('cart-drawer')?.classList.add('animate', 'active');
                document.querySelector('cart-drawer')?.classList.remove('is-empty');
            })

            .catch(err => {
                console.error('Error:', err);
            });
    });
}



assignBackDropClose(bundlePopup, backDrop);
selectBundleProducts();

document.addEventListener('DOMContentLoaded',  () => {
    addToCart();
})

