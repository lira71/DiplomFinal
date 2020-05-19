'use strict';

import '@babel/polyfill';
import 'nodelist-foreach-polyfill';
import 'es6-promise';
import 'fetch-polyfill';
import 'formdata-polyfill';
import 'element-closest';
import elementClosest from 'element-closest';
elementClosest(window);

import arrowTop from "./modules/arrowTop";
import calc from "./modules/calc";
import gallerySlider from "./modules/gallerySlider";
import gift from "./modules/gift";
import mainSlider from "./modules/mainSlider";
import sendForm from "./modules/sendForm";
import smoothScroll from "./modules/smoothScroll";
import toggleAll from "./modules/toggleAll";
import toggleCallbackForm from "./modules/toggleCallbackForm";
import toggleMenu from "./modules/toggleMenu";

import SliderCarousel from "./modules/sliderCarousel";



//появление стрелки
arrowTop();
//бургер
toggleMenu();
//подарок 
gift();
//плавная прокрутка
smoothScroll();
//калькулятор с промокодом
calc();
//модальные окна
toggleAll();
//перезвоните мне
toggleCallbackForm();
//отправка формы 
sendForm();
//главный слайдер наверху
mainSlider();
//фото
gallerySlider();
//слайдер карусель
const carousel = new SliderCarousel({
    main: '#services .wrapper',
    wrap: '.services-slider',
    slidesToShow: 5,
    infinity: true,
    responsive: [{
            breakpoint: 1240,
            slidesToShow: 4
        },
        {
            breakpoint: 1024,
            slidesToShow: 3
        },
        {
            breakpoint: 768,
            slidesToShow: 2
        },
        {
            breakpoint: 576,
            slidesToShow: 1
        }
    ]
});
carousel.init();