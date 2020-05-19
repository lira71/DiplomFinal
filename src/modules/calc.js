 const calc = () => {
     const calcBlock = document.getElementById('card_order'),
         priceTotal = document.getElementById('price-total'),
         labelMozaika = document.getElementById('card_leto_mozaika'),
         labelSchelkovo = document.getElementById('card_leto_schelkovo'),
         time = document.querySelector('.time'),
         promoMessage = document.querySelector('.price-message input[type="text"]'),
         promoCode = "ТЕЛО2020";

     const priceMozaika = {
         1: 1999,
         6: 9900,
         9: 13900,
         12: 19900
     };

     const priceSchelkovo = {
         1: 2999,
         6: 14990,
         9: 21990,
         12: 24990
     };

     const calcSum = (obj) => {
         time.addEventListener('click', (event) => {
             let target = event.target;
             target = target.closest('input');

             if (target) {
                 for (let key in obj) {
                     if (target.value == key) {
                         priceTotal.textContent = obj[key];

                     }
                 }
             }
         });
     };

     if (labelMozaika || labelSchelkovo) {

         calcBlock.addEventListener('click', (event) => {
             let target = event.target;
             target = target.closest('input');

             if (labelMozaika.checked) calcSum(priceMozaika);
             if (labelSchelkovo.checked) calcSum(priceSchelkovo);

         });

         calcBlock.addEventListener('change', (event) => {
             let target = event.target;
             target = target.closest('input[type="checkbox"]') ||
                 target.closest('input[placeholder="Ваше имя..."]') ||
                 target.closest('input[placeholder="Ваш номер телефона..."]');
             const totalPrice = priceTotal.textContent;
             if (promoMessage.value === promoCode && !target) {
                 priceTotal.textContent = Math.ceil(totalPrice * 0.7);
             }

         });
     } else {
         return;
     }
};
export default calc;