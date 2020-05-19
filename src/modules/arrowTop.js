 const arrowTop = () => {
     const toTop = document.getElementById('totop');
     toTop.style.display = 'none';

     window.addEventListener('scroll', function () {
         if (pageYOffset > document.documentElement.clientHeight) {
             toTop.style.display = 'block'
         } else {
             toTop.style.display = 'none';
         }
     });
};
 
export default arrowTop;