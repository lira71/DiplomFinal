const toggleCallbackForm = () => {

    const callbackBtn = document.querySelector('.head .callback-btn'),
        callbackForm = document.querySelector('#callback_form');

    callbackBtn.addEventListener('click', () => {
        callbackForm.style.display = 'block';
    });

    callbackForm.addEventListener('click', (event) => {
        if (event.target.matches('.close_icon') || event.target.matches('.overlay')) {
            callbackForm.style.display = 'none';
        }
    });
};
export default toggleCallbackForm;