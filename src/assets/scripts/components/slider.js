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
            socialProof:              { instance: null, init: false },
        };

        // --------  SOCIAL PROOF SLIDER --------

        const socialSlider = $('.social-proof__slider');

        function setupSocialSlider () {
            swiperInstances.socialProof.instance = new Swiper(socialSlider[0], { // eslint-disable-line
                slidesPerView: 'auto',
                spaceBetween: 30,
                freeMode: false,
                breakpoints: {
                    991: {
                        slidesPerView: 6,
                        spaceBetween: $(socialSlider).attr('data-type') === 'circle' ? 40 : 72,
                    }
                },
                pagination: {
                    el: '.testimonials .swiper-pagination',
                    type: 'bullets',
                    clickable: true
                },
            });
        }

        if (socialSlider.length > 0) {
            if (!IsInitialized(socialSlider)) {
                setupSocialSlider();
            }
        }
    });
}
