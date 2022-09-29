import gsap from 'gsap';

$(document).ready(function () {
    if (gsap) {
        const heroUnderline = $('.hero-2022__heading__underline');

        if (heroUnderline.length) {
            const tl = gsap.timeline();

            tl.from(heroUnderline,
                {
                    autoAlpha:0,
                    ease: 'power2',
                    x: 4000,
                }, '+=1');
        }
    }
});
