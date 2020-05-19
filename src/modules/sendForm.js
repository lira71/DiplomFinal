 const sendForm = () => {

     const errorMessage = "Что-то пошло не так",
         policyMessage = "Подтвердите обработку персональных данных",
         clubMessage = "Какой Клуб Вы выбираете?";


     const idThanks = document.getElementById("thanks");
     const statusText = document.createElement('div');
     statusText.style.cssText = 'font-size: 2rem; color: red';
     const popUp = document.querySelectorAll('.popup');
     let priceTotal = document.getElementById('price-total');
     const footerLetoMozaika = document.getElementById('footer_leto_mozaika');
     const footerLetoSchelkovo = document.getElementById('footer_leto_schelkovo');

     const form1 = document.getElementById('form1');
     const form2 = document.getElementById('form2');
     const form3 = document.getElementById('banner-form');
     const form4 = document.getElementById('card_order');
     const form5 = document.getElementById('footer_form');

     let arrforms = [form1, form2, form3, form4, form5];

     arrforms.forEach((item) => {

         item.addEventListener('submit', (event) => {
             event.preventDefault();
             item.appendChild(statusText);

             const checkBox = item.querySelector('input[type=checkbox]');

             if (checkBox && !checkBox.checked) {
                 item.appendChild(statusText);
                 statusText.textContent = policyMessage;
                 return false;
             }

             if (item === form5) {
                 if (!footerLetoMozaika.checked && !footerLetoSchelkovo.checked) {
                     statusText.textContent = clubMessage;
                     return false;
                 }
             }

             const formData = new FormData(item);
             let body = {};

             formData.forEach((val, key) => {
                 body[key] = val;
             });


             postData(body)
                 .then((response) => {
                     if (response.status !== 200) throw new Error('status network not 200');
                     idThanks.style.display = 'block';
                 })
                 .then(() => {
                     item.reset();
                     if (priceTotal) priceTotal.textContent = '2999';
                     statusText.style.display = 'none';

                     if (item !== form3 && item !== form4 && item !== form5) {
                         item.style.display = 'none';
                     }

                     idThanks.addEventListener('click', (event) => {
                         let target = event.target;
                         idThanks.style.display = 'none';

                         if (!target.matches('.form-content')) {
                             popUp.forEach((item) => {
                                 item.style.display = 'none';
                             });
                         } else {
                             target = target.matches('.close-btn');
                             if (target) {
                                 idThanks.style.display = 'none';
                                 popUp.forEach((item) => {
                                     item.style.display = 'none';
                                 });
                             }
                         }
                     });
                 })
                 .catch(error => {
                     statusText.textContent = errorMessage;
                     console.error(error);
                 });
         });

         const validateForm = (ID) => {

             let getFormData = (formID) => {
                 const form = document.getElementById(formID);


                 let formTel = document.querySelectorAll(`#${formID} input[type=tel]`);
                 formTel.forEach(element => {
                     maskPhone('#phone');
                     maskPhone('#callback_footer_form-phone');
                     maskPhone('#callback_form-phone');
                     maskPhone('#callback_form1-phone');
                     maskPhone('#callback_form2-phone');
                 });

                 let formName = document.querySelectorAll(`#${formID} input[name=name]`);
                 formName.forEach(element => {
                     element.addEventListener(`input`, () => {
                         element.value = element.value.replace(/[^а-яА-ЯёЁ ]/gi, ``);
                     });
                 });

             };

             getFormData(ID);
         };
         validateForm(`footer_form`);
         validateForm(`banner-form`);
         validateForm(`card_order`);
         validateForm(`form1`);
         validateForm(`form2`);


     });

     const postData = (body) => {
         return fetch('./server.php', {
             method: 'POST',
             headers: {
                 'Content-type': 'application/json'
             },
             body: JSON.stringify(body)
         });
     };

};
export default sendForm;