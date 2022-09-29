'use strict';

import Swiper from 'swiper';
// import gsap from 'gsap';
// import { debounce,mediaQuery } from './utils';

if (Swiper) {
    $(function () {
        // ---- ALL SLIDERS -----
        // const sliderMomentumRatio = 0.455;
        const IsInitialized = (ele) => ele.hasClass('swiper-container-initialized');
        const swiperInstances = {
            testimonials:              { instance: null, init: false },
        };

        // --------  SOCIAL PROOF SLIDER --------

        const testimonialsSlider = $('.testimonials__slider');

        function setuptestimonialsSlider () {
            swiperInstances.testimonials.instance = new Swiper(testimonialsSlider[0], { // eslint-disable-line
                slidesPerView: 1,
                autoplay: {
                    delay: 3000
                },
                disableOnInteraction: false,
                pagination: {
                    el: '.testimonials .swiper-pagination',
                    type: 'bullets',
                    clickable: true
                },
                // freeModeMomentumRatio: sliderMomentumRatio,
                // centeredSlides: true,
                // loop: true,
            });
        }

        if (testimonialsSlider.length > 0) {
            if (!IsInitialized(testimonialsSlider)) {
                setuptestimonialsSlider();
            }
        }
    });
}
