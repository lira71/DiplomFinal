const toggleMenu = () => {

    const menuBtn = document.querySelector('.menu-button'),
        topMenu = document.querySelector('.top-menu'),
        fixedGift = document.querySelector('.fixed-gift'),
        popupMenu = document.querySelector('.popup-menu');


    window.addEventListener('scroll', () => {
        if (document.documentElement.clientWidth < 768 && document.documentElement.scrollTop > topMenu.scrollTop) {
            topMenu.style.position = 'fixed';
            topMenu.style.top = '0px';
            try {
                fixedGift.style.right = '55px';
            } catch (e) {

            }
        } else {
            topMenu.style.position = '';
            try {
                fixedGift.style.right = '20px';
            } catch (e) {

            }
        }
    });


    const checkResponse = () => {
        const widthWindow = document.documentElement.clientWidth;
        if (widthWindow < 768) {
            menuBtn.style.display = 'block';
        } else {
            menuBtn.style.display = 'none';
        }
    };

    checkResponse();

    window.addEventListener('resize', checkResponse);


    document.body.addEventListener('click', (event) => {
        let target = event.target;
        if (target.closest('.menu-button')) {
            popupMenu.style.display = 'flex';
        } else if (target.tagName === 'A' || target.closest('.close-menu-btn')) {
            popupMenu.style.display = 'none';
        }
    });

};
export default toggleMenu;