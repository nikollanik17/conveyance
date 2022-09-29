'use strict';

import Swiper from 'swiper';
// import gsap from 'gsap';
// import { debounce,mediaQuery } from './utils';

if (Swiper) {
    $(function () {
        // ---- ALL SLIDERS -----
        // const sliderMomentumRatio = 0.455;
        const IsInitialized = (ele) => ele.classList.contains('swiper-container-initialized');
        const swiperInstances = {
            multiCol:              { instance: null, init: false },
        };

        // -------- multiCol SLIDER --------

        const multiColSlider = document.querySelectorAll('.multi-column__slider');

        function setupMultiColSlider () {
            multiColSlider.forEach(element => {
                if (!IsInitialized(element)) {
                    swiperInstances.multiCol.instance = new Swiper(element, { // eslint-disable-line
                        slidesPerView: 'auto',
                        spaceBetween: 24,
                    });
                }
            });
        }

        if (multiColSlider.length > 0) {
            // if (!IsInitialized(multiColSlider)) {
            setupMultiColSlider();
            // }
        }
    });
}
