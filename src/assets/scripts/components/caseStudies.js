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
            caseStudy:              { instance: null, init: false },
        };

        // --------  SOCIAL PROOF SLIDER --------

        const caseStudySlider = $('.case-study__slider');

        function setupcaseStudySlider () {
            swiperInstances.caseStudy.instance = new Swiper(caseStudySlider[0], { // eslint-disable-line
                slidesPerView: 1,
                loop: true,
                navigation: {
                    prevEl: '.case-study__slider .slider-arrow-prev',
                    nextEl: '.case-study__slider .slider-arrow-next'
                },
                breakpoints: {
                    1024: {
                        slidesPerView: 2
                    }
                }
                // pagination: {
                //     el: '.caseStudy .swiper-pagination',
                //     type: 'bullets',
                //     clickable: true
                // },
                // freeModeMomentumRatio: sliderMomentumRatio,
                // centeredSlides: true,
                // loop: true,
            });
        }

        if (caseStudySlider.length > 0) {
            if (!IsInitialized(caseStudySlider)) {
                setupcaseStudySlider();
            }
        }
    });
}
