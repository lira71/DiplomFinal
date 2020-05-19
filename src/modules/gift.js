const gift = () => {

    try {
        const giftPopup = document.getElementById('gift'),
            giftPopupBtn = document.querySelector('.fixed-gift');


        giftPopupBtn.addEventListener('click', () => {
            giftPopup.style.display = 'block';
            giftPopupBtn.style.display = 'none';
        });


        giftPopup.addEventListener('click', (event) => {
            let target = event.target;

            if (target.classList.contains('close_icon') || target.classList.contains('close-btn')) {
                giftPopup.style.display = 'none';
            } else {
                target = target.closest('.form-wrapper');
                if (!target) {
                    giftPopup.style.display = 'none';
                }
            }

        });
    } catch (e) {

    }

};
export default gift;