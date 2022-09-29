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
            posts:  { instance: null, init: false },
            grid:   { instance: null, init: false },
            feature: { instance: null, init: false },
        };

        // -------- POSTS SLIDER --------

        const postsSlider = document.querySelectorAll('.blog-posts__posts-slider');

        function setupPostsSlider () {
            postsSlider.forEach(element => {
                if (!IsInitialized(element)) {
                    swiperInstances.posts.instance = new Swiper(element, { // eslint-disable-line
                        slidesPerView: 'auto',
                        spaceBetween: 24,
                    });
                }
            });
        }

        if (postsSlider.length > 0) {
            // if (!IsInitialized(postsSlider)) {
            setupPostsSlider();
            // }
        }

        // --- GRID SLIDER ----
        const gridSlider = document.querySelectorAll('.blog-posts__grid-slider');

        function setupGridSlider () {
            gridSlider.forEach(element => {
                if (!IsInitialized(element)) {
                    swiperInstances.posts.instance = new Swiper(element, { // eslint-disable-line
                        slidesPerView: 'auto',
                        spaceBetween: 24,
                    });
                }
            });
        }

        if (gridSlider.length > 0) {
            // if (!IsInitialized(postsSlider)) {
            setupGridSlider();
            // }
        }

        // --- GRID SLIDER ----
        const featureSlider = document.querySelectorAll('.blog-posts__grid-feature-slider');

        function setupFeatureSlider () {
            featureSlider.forEach(element => {
                if (!IsInitialized(element)) {
                    swiperInstances.posts.instance = new Swiper(element, { // eslint-disable-line
                        slidesPerView: 'auto',
                        spaceBetween: 24,
                    });
                }
            });
        }

        if (featureSlider.length > 0) {
            // if (!IsInitialized(postsSlider)) {
            setupFeatureSlider();
            // }
        }
    });
}
