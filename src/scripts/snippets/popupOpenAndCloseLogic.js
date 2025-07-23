const popupOpenAndCloseLogic = (popup, backDrop) => {

    if (!popup.classList.contains('active')) {
        //open
        document.body.classList.add('is-scroll-hidden');
        backDrop.classList.add('db');
        popup.classList.remove('dn');
        setTimeout(() => {
            backDrop.classList.add('active');
            popup.classList.add('active');
        }, 10);
    }
    else {
        //close
        popup.classList.remove('active');
        backDrop.classList.remove('active');

        setTimeout(() => {
            popup.classList.add('dn');
            backDrop.classList.remove('db');
        }, 300);
        document.body.classList.remove('is-scroll-hidden');
    }
}

const assignBackDropClose = (popup, backDrop) => {
    // const backDrop = document.getElementById('bg-block');

    backDrop.addEventListener('click', () => {
        popup.classList.remove('active');
        backDrop.classList.remove('active');

        setTimeout(() => {
            popup.classList.add('dn');
            backDrop.classList.remove('db');
        }, 300);
        document.body.classList.remove('is-scroll-hidden');
    })
}

export { popupOpenAndCloseLogic, assignBackDropClose }